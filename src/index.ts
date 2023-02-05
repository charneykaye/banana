// Copyright (c) 1999-2023, XJ Music Inc. (https://xj.io) All Rights Reserved.

// vendor
import {OptionValues} from 'commander';
import {Environment} from './types';
import * as Process from 'process';
import {build} from './build';

const {Command} = require('commander');
const figlet = require('figlet');

// app
const pkg = require('../package.json');

//
// BOOTSTRAP
//

interface Options extends OptionValues {
  build: boolean;
  env: Environment;
}

const program = new Command()
    .version(pkg.version)
    .description(pkg.description)
    .option('-b, --build', 'Build the banana for publication')
    .option('-e, --env <value>', 'Environment')
    .parse(Process.argv);

//
// MAIN
//

console.info(figlet.textSync('Banana'));
const options: Options = program.opts();

const requireOption = (key: keyof Options) => {
  if (!(options[key] && 0 < options[key].length)) {
    console.error(`ERROR!\n--${key} required`);
    Process.exit(-1);
  }
};

if (options.build) {
  requireOption('env');
  try {
    const t0 = performance.now();
    build(options.env).then(() => {
      const t1 = performance.now();
      console.debug(
          ` > Built banana in ${Math.floor((t1 - t0) / 10) / 100} s`);
    });
  } catch (e: any) {
    console.error(e);
    Process.exit(-1);
  }
} else {
  console.error(`DID NOTHING`);
  Process.exit(-1);
}
