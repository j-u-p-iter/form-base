const getConfig = (configName, defaultConfigValue) => (
  process.env[configName] || defaultConfigValue
);


export {
  getConfig,
};
