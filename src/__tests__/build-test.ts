// Copyright (c) 1999-2023, XJ Music Inc. (https://xj.io) All Rights Reserved.

import {describe, test} from '@jest/globals';
import {build} from '../build';

describe('Build all banana', () => {
  test('build', async () => {
    await build('dev');
  });
});
