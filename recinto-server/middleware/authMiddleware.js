/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user || req.user.type === 'viewer' || !req.user.isActive) {
        return res.status(403).json({ message: 'Access denied: Unauthorized role or inactive account' });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, invalid or expired token' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.type === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Requires Admin role' });
  }
};

const editorOrAdmin = (req, res, next) => {
  if (req.user && (req.user.type === 'admin' || req.user.type === 'editor')) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied: Requires Admin or Editor role' });
  }
};

module.exports = { protect, admin, editorOrAdmin };