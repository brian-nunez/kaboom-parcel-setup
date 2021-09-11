import { kaboom } from '../kaboom';

function Main(args) {
  kaboom.layer(['obj', 'ui'], 'obj');

  kaboom.add([
    kaboom.text(`Kaboom is all setup!`),
    kaboom.origin('center'),
    kaboom.scale(10),
    kaboom.pos(kaboom.width() / 2, kaboom.height() / 2 + 100),
  ]);

  kaboom.add([
    kaboom.sprite('player-idle'),
    kaboom.scale(5),
    kaboom.origin('center'),
    kaboom.pos(kaboom.width() / 2, kaboom.height() / 2 - 100),
  ]);
}

export default Main;
