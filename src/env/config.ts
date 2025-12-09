export const getEnvSafely = (envKey: string) => {
  const envVal = process.env[envKey];
  if (!envVal) throw new Error(`Missing variable ${envKey}!`);
  return envVal;
};

export const getEnvOptional = (envKey: string, defaultValue: string = '') => {
  return process.env[envKey] || defaultValue;
};
