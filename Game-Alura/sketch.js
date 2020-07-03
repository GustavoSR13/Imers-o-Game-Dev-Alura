function setup() {
  createCanvas(windowWidth, windowHeight);

  jogo = new Jogo();

  telaInicial = new TelaInicial();
  
  somDoJogo.loop();

  jogo.setup();

  cenas = {
    jogo,
    telaInicial
    };
  
  botao = new Botao('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}