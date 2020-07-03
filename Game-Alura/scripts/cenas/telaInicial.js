class TelaInicial {

  constructor() {
    
  }
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras', width/2, 110);
    text('de', width/2, 150);
    textSize(70);
    text('Hipsta', width/2, 200);
  }
  
  _botao(){
    botao.draw();
  }
}