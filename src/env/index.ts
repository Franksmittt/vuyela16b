import { getEnvOptional } from './config';

/**
 * Environment variables configuration
 */
const NODE_ENV = getEnvOptional('NODE_ENV', 'development');

const env = {
  NODE_ENV,
};

export default env;
