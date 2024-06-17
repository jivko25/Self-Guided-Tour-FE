import jwt from 'jsonwebtoken';

// const SECRET_KEY = process.env.JWT_SECRET;
const SECRET_KEY = 'zrWymMzG55CSh3fxL1DHVQDXrzOjmM8U';

export function generateToken(payload) {
    return jwt.sign(payload, SECRET_KEY);
};

export function decodeToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        return null;
    }
};