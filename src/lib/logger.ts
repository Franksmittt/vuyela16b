// Simple logger utility - replace with your preferred logging solution if needed

const logInfo = (message: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }
};

const logError = (error: Error | string): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;
  
  console.error(`[ERROR] ${new Date().toISOString()} - ${errorMessage}`);
  if (errorStack && process.env.NODE_ENV !== 'production') {
    console.error(errorStack);
  }
};

export { logError, logInfo };
