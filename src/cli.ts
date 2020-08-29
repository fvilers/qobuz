#!/usr/bin/env node

import yargs from "yargs";

yargs.scriptName("qobuz").commandDir("commands").demandCommand().help().argv;
