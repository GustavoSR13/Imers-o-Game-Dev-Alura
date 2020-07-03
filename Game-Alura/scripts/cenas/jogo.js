class Jogo {

  constructor() {
    this.indice = 0;
    this.mapa = cartucho.mapa;
  }

  setup() {

    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();

    vida = new Vida(cartucho.configuracoes.vidaMaxima, cartucho.configuracoes.vidaInicial);

    personagem = new Personagem(
      matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    frameRate(40);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo,
      width - 52, 30, 52, 52, 104, 104, 7);


    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
      width, 0, 200, 200, 400, 400, 7);


    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador,
      width - 52, 200, 100, 75, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

  }

  keyPressed(key) {
    if (key === 'Enter') {
      personagem.jump();
      somPulo.play();
    }
  }

  draw() {
    cenario.display();
    cenario.move();

    vida.draw();

    pontuacao.display();
    pontuacao.gainPoints();

    personagem.display();
    personagem.gravityLaw();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < (-inimigo.largura);
    inimigo.speed = linhaAtual.speed;

    inimigo.display();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.emergir();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.iscolliding(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2);
        noLoop();
      }
    }
  }
}