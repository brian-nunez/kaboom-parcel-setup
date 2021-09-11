import { kaboom } from '../kaboom';

const sprites = [
  ['player-idle', 'sprites/adventurer-idle-2-02.png'],
];

export default function loadSprites() {
  sprites.forEach(([name, location]) => {
    kaboom.loadSprite(name, location);
  });
}
