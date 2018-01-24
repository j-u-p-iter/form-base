const fs = require('fs');
const spawn = require('child_process').spawn;
const Duplex = require('stream').Duplex;
const chalk = require('chalk');

const { forEachObjIndexed } = require('ramda');

const INFO_TO_COMPILE = require('./compile-config');


const exec = (command, extraEnv) =>
  spawn(command, {
    shell: true,
    env: { ...process.env, ...extraEnv },
  });

const writeMessage = message => process.stdout.write(message);

const compileAccordingToInfo = ({
  messages,
  command,
  moduleType,
  env = 'development',
}) => {
  writeMessage(chalk.blue(messages.onBeforeRun));

  const execCompiling = exec(command, {
    BABEL_ENV: moduleType,
    NODE_ENV: env,
  });

  execCompiling.on('exit', () => writeMessage(chalk.green(messages.onSuccess)));
};

forEachObjIndexed(compileAccordingToInfo, INFO_TO_COMPILE);
