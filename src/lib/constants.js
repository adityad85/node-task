import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3001,
  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || 'SocialCops',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '12h',
};
