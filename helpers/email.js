import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { CLIENT_ID, CLIENT_SECRET, GMAIL_USER, REDIRECT_URI, REFRESH_TOKEN } =
    process.env;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
});

const getNewCode = () => {
    return crypto.randomInt(0, 1_000_000).toString().padStart(6, '0');
};

export const sendVerificationEmail = async (email) => {
    const code = getNewCode();

    try {
        const { token } = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER,
                type: 'OAuth2',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                accessToken: token ?? undefined,
            },
        });

        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subject: 'Código de verificación',
            text: `Tu código de verificación es: ${code}. Válido por 10 minutos.`,
            html: `<!DOCTYPE html>
<html>
	<head>
		<style>
			body {font-family: Arial, sans-serif;line-height: 1.6;display: flex;align-items: center;justify-content: center;}
			.container {max-width: 600px;margin: 0 auto;padding: 20px;}
			.header {background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);color: white;padding: 30px;text-align: center;border-radius: 10px 10px 0 0;font-size: 12px;}
			.content {background: #f9f9f9;padding: 30px;}
			.code-box {background: white;border: 2px solid #667eea;padding: 20px;text-align: center;margin: 20px 0;border-radius: 8px;}
			.code {font-size: 36px;font-weight: bold;letter-spacing: 8px;color: #667eea;}
			.footer {background: #333;color: #999;padding: 20px;text-align: center;font-size: 12px;border-radius: 0 0 10px 10px;}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>Verifica tu Email</h1>
			</div>
		<div class="content">
			<p>Gracias por registrarte en nuestro sitio. Para continuar tu registro, por favor verifica tu dirección de email usando el siguiente código:</p>
			<div class="code-box">
			<div class="code">${code}</div>
			</div>
			<p><strong>Este código expirará en 10 minutos.</strong></p>
			<p>Si no solicitaste este código, puedes ignorar este mensaje de forma segura.</p>
		</div>
		<div class="footer">
			<p>Este es un mensaje automático, por favor no respondas a este email.</p>
			<p>&copy; 2025 Englishing. Todos los derechos reservados.</p>
		</div>
		</div>
	</body>
</html>
`,
        };
        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId, code };
    } catch (error) {
        console.error('❌ Error al enviar email:', error);
        return { success: false, error: error.message };
    }
};
