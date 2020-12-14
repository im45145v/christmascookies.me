class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' })
  }

  preload() {
    this.load.image('end', 'https://i.ibb.co/K2J86W6/Copy-of-lust-oriented-susanth-1.jpg');
  }

  create() {
    screen = this.add.image(0, 0, 'end').setOrigin(0);

    // Reset global variables
    score = 0;
    speed = 1;
    // Reset sprite positions
    gameState.numCoordinates = {};

    this.input.keyboard.on('keydown', () => {
      this.scene.stop('EndScene');
      this.scene.start('GameScene');
    });
  }
}



