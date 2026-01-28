const PASSWORD_PATTERN =
    /^(?!.*(?:123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz))(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/i;

const validatePassword = async (password) => {
    if (!PASSWORD_PATTERN.test(password))
        throw new Error(
            "password must be at least 8 characters long, contain at least one number, one uppercase letter, one lowercase letter, one permited special character, and not a consecutive serie"
        );
};

export { validatePassword };
