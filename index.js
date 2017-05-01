/*
  Copyright Sergio García <s3rgio.gr@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

exports.yargs = {
  command: 'voip-dorks [options]',
  describe: 'list VoIP dorks',

  builder: {
  },

  handler: () => {
    const chalk = require('chalk');
    const dorks = require('./voipDorks.json');

    // TODO: Maybe it should be better to print this in the client.
    console.log(chalk.bold.underline('VoIP Dorks'));
    console.log(dorks);
  } 
}
