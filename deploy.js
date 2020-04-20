const chalk = require('chalk');
const fs = require('fs');
const { exec } = require("child_process");

const { blue, green, yellow } = chalk;

const directories = fs.readdirSync('./');
const reactProjects = directories.filter(d => d.startsWith('react'));

let dependenciesQueue = [...reactProjects];
let buildQueue = [...reactProjects];

const deployLog = {
  error: [],
  stdout: [],
};

const startQueues = () => {
  if (dependenciesQueue.length > 0) {
    installDependencies();
  }
  else if (dependenciesQueue.length === 0 && buildQueue.length > 0) {
    buildProject();
  }
};

const installDependencies = () => {
  const projectFolder = dependenciesQueue.pop();

  if (projectFolder) {
    console.log(blue(`📦 Installing dependecies of ${projectFolder}...`));

    exec(`cd ${projectFolder} && yarn install`, (error, stdout) => {
      if (error) {
        deployLog.error.push(error.message);

        return;
      }

      deployLog.stdout.push(stdout);
      console.log(green(`✅ success! \n`));

      startQueues();
    });
  }
};

const buildProject = () => {
  const projectFolder = buildQueue.pop();

  if (projectFolder) {
    console.log(blue(`🚀 Building ${projectFolder} project...`));

    exec(`cd ${projectFolder} && yarn build`, (error, stdout) => {
      if (error) {
        deployLog.error.push(error.message);

        return;
      }

      deployLog.stdout.push(stdout);
      console.log(green(`✅ success! \n`));

      startQueues();
    });
  }
};

startQueues();
