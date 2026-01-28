import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import { createServer } from "http";
import "colors";

import { dbConnection } from "../db/config_db.js";
import {
    authRoutes,
    exerciseRoutes,
    unitRoutes,
    userRoutes,
} from "../routes/index.js";

const corsOptions = {
    origin: [
        // "http://localhost:8080",
        // "http://localhost:8081",
        // "http://localhost:8082",
        // "http://192.168.1.67:8080",
        // "http://192.168.1.147:8080",
        // "http://192.168.1.115:8080",
        // "http://192.168.1.115:8081",
        // "http://192.168.1.115:8082",
        process.env.RENDER_EXTERNAL_URL,
    ].filter(Boolean), // filter deletes undefined/null
    optionsSuccessStatus: 200,
};

class Server {
    constructor() {
        this.app = express().use(cors(corsOptions));
        this.port = process.env.PORT || 1000;
        this.server = createServer(this.app);

        this.paths = {
            auth: "/api/auth",
            exercise: "/api/exercise",
            unit: "/api/unit",
            user: "/api/user",
        };

        // Connect to DB
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async connectDB() {
        try {
            const flag = await dbConnection();
            if (flag.status) {
                console.log("\nSuccessful database connection".green);
                console.log(
                    "==========================================================================\n",
                );
            } else {
                console.log(flag.err);
                console.log("\n\nUnable to connect to the database".red);
            }
        } catch (error) {
            console.error(`Database connection error: ${error.message}`.red);
        }
    }

    middlewares() {
        // Public Files
        this.app.use(express.static("static"));

        // Read and parse the body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // File upload
        this.app.use(
            fileUpload({
                abortOnLimit: true,
                createParentPath: true, // controls the files to be attached to req.files
                // debug: true,
                limits: { fileSize: 52428800 },
                preserveExtension: true,
                responseOnLimit: "file size limit exceded - 52428800 bytes",
                safeFileNames: true,
                tempFileDir: "/tmp/",
                useTempFiles: true, // allows to move files with the function .mv
            }),
        );
    }

    routes() {
        this.app.use(this.paths.auth, authRoutes);
        this.app.use(this.paths.exercise, exerciseRoutes);
        this.app.use(this.paths.unit, unitRoutes);
        this.app.use(this.paths.user, userRoutes);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server running on port => ${this.port}`.blue.green);
        });
    }
}

export default Server;
