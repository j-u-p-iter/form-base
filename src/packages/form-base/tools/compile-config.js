const COMPILE_CONFIG = {
  TO_ES: {
    command: 'npx babel modules -d es --ignore __tests__',
    moduleType: 'es',
    messages: {
      onBeforeRun: 'Compiling to ES modules\n',
      onSuccess: 'Compiled to ES modules with success\n',
    },
  },
  TO_CMJS: {
    command: 'npx babel modules -d cmjs --ignore __tests__',
    moduleType: 'cmjs',
    messages: {
      onBeforeRun: 'Compiling to CMJS modules\n',
      onSuccess: 'Compiled to CMJS modules with success\n',
    },
  },
  TO_DEV_UMD: {
    command: 'npx rollup -c -i modules/index.js -o umd/form-base.js',
    moduleType: 'umd',
    env: 'development',
    messages: {
      onBeforeRun: 'Compiling to development UMD module\n',
      onError: 'Compiling to development UMD module is failed\n',
      onSuccess: 'Compiled to development UMD module with success\n',
    },
  },
  TO_PROD_UMD: {
    command: 'npx rollup -c -i modules/index.js -o umd/form-base.min.js',
    moduleType: 'umd',
    env: 'production',
    messages: {
      onBeforeRun: 'Compiling to production UMD module\n',
      onError: 'Compiling to production UMD module is failed\n',
      onSuccess: 'Compiled to production UMD module with success\n',
    },
  },
};


module.exports =  COMPILE_CONFIG;
