const createModulesBuilder = require('modules-builder');
const INFO_TO_COMPILE = require('./compile-config');

const buildModules = createModulesBuilder(INFO_TO_COMPILE);


buildModules(INFO_TO_COMPILE);
