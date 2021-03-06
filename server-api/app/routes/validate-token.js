const jwt = require('jsonwebtoken')

// middleware
const verifyToken = (req, res, next) => {

    const token = req.header('auth-token');
    
    if (!token) return res.status(401).json({ error: 'Access denied' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({error: 'invalid token'});
    }
}

module.exports = verifyToken;