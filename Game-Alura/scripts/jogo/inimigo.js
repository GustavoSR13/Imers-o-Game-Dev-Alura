class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, speed) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.speed = speed
    this.x = width;
  }

  move() {
    this.x = this.x - this.speed;
  }

  emergir() {
  this.x = width;
  }
}