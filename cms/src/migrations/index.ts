import * as migration_20260607_191444 from './20260607_191444';
import * as migration_20260625_092157 from './20260625_092157';

export const migrations = [
  {
    up: migration_20260607_191444.up,
    down: migration_20260607_191444.down,
    name: '20260607_191444',
  },
  {
    up: migration_20260625_092157.up,
    down: migration_20260625_092157.down,
    name: '20260625_092157'
  },
];
