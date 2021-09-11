import { kaboom } from './kaboom';
import {
  main,
} from './scenes';
import loadSprites from './utils/loadSprites';

loadSprites();

kaboom.scene('main', main);

kaboom.start('main');
