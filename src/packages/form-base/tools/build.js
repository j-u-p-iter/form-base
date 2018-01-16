const fs = require('fs');
const spawn = require('child_process').spawn;
const Duplex = require('stream').Duplex;


const COMPILE_DATA = {
  TO_ES: { 
    command: 'npx babel modules -d es --ignore __tests__', 
    moduleType: 'es',
    messages: {
      onBeforeRun: 'Compiling to ES modules\n', 
      onSuccess: 'Compiled to ES modules with success\n',
    },
  },
  TO_CMJS: { 
    command: 'babel modules -d cmjs --ignore __tests__', 
    moduleType: 'cmjs', 
    messages: {
      onBeforeRun: 'Compiling to CMJS modules', 
      onSuccess: 'Compiled to CMJS modules with success',
    },
  },
  TO_DEV_UMD: {
    command: 'rollup -c -i modules/index.js -o umd/form-base.js',
    moduleType: 'es',
    env: 'development',
    messages: {
      onBeforeRun: 'Compiling to development UMD module',
      onSuccess: 'Compiled to development UMD module with success',
    },
  },
  TO_PROD_UMD: {
    command: 'rollup -c -i modules/index.js -o umd/form-base.min.js',
    moduleType: 'es',
    env: 'production',
    messages: {
      onBeforeRun: 'Compiling to production UMD module',
      onSuccess: 'Compiled to production UMD module with success',
    },
  },
};

const exec = (command, extraEnv) => 
  spawn(command, {
    shell: true,
    env: { ...process.env, ...extraEnv },
  });

const createLogger = messages => (new Duplex({
  read() {
    process.stdout.write(messages.onBeforeRun);
    this.push(null);
  },
  write(chunk, encoding, callback) {
    process.stdout.write(messages.onSuccess);
    callback();
  },
}));


const compileDataScope = COMPILE_DATA.TO_ES;
const compileToESLogger = createLogger(compileDataScope.messages); 
const execCompilingToES = exec(compileDataScope.command, { BABEL_ENV: compileDataScope.moduleType });

compileToESLogger.pipe(execCompilingToES.stdin);
execCompilingToES.stdout.pipe(compileToESLogger);

