const createModulesBuilder = require('@j.u.p.iter/modules-builder');

const INFO_TO_COMPILE = require('./compile-config');


const buildModules = createModulesBuilder(INFO_TO_COMPILE);
buildModules();
