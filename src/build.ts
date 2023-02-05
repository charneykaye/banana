// Copyright (c) 1999-2023, XJ Music Inc. (https://xj.io) All Rights Reserved.

const fs = require('fs');

export const build = async (env: string) => {
  await fs.promises.mkdir(`./build/${env}/`, {recursive: true}).catch(console.error);
  await fs.promises.writeFile(`./build/${env}/banana.txt`,'This is a test').catch(console.error)
};
