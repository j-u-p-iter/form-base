const fs = require('fs');
const spawn = require('child_process').spawn;
const Duplex = require('stream').Duplex;
const { forEachObjIndexed } = require('ramda');
const chalk = require('chalk');

const INFO_TO_COMPILE = require('./info-to-compile');


const exec = (command, extraEnv) =>
  spawn(command, {
    shell: true,
    env: { ...process.env, ...extraEnv },
  });

const writeMessage = message => process.stdout.write(message);

const createLogger = messages => (new Duplex({
  read() {
    writeMessage(chalk.blue(messages.onBeforeRun));
    this.push(null);
  },
  write(chunk, encoding, callback) {
    writeMessage(chalk.green(messages.onSuccess));
    callback();
  },
}));

const compileAccordingToInfo = ({
  messages,
  command,
  moduleType,
}) => {
  const compileToESLogger = createLogger(messages);
  const execCompilingToES = exec(command, { BABEL_ENV: moduleType });

  compileToESLogger.pipe(execCompilingToES.stdin);
  execCompilingToES.stdout.pipe(compileToESLogger);
};

forEachObjIndexed(compileAccordingToInfo, INFO_TO_COMPILE);
