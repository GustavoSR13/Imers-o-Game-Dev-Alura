class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){ 
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) 
    this.variacaoY = variacaoY;
    this.yIni = height - this.altura - this.variacaoY;
    this.y = this.yIni;
    
    this.jumpSpeed = 0;
    this.gravity = 5;
    this.jumpHeight = - 50;
    this.jumpCount = 0;
    this.invencivel = false;
  }
  
  jump() {
    if(this.jumpCount < 2){
      
    this.jumpSpeed = this.jumpHeight;
    this.jumpCount++; 
      
    }
  }
  
  gravityLaw(){
    this.y = this.y + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
  
    if(this.y > this.yIni){
      this.y = this.yIni;
      this.jumpCount = 0;
    }
  }
  
  ficaInvencivel(){
  
    this.invencivel = true;
    setTimeout(() => {
    
      this.invencivel = false;
      
    }, 3000)
  }
  
  
  iscolliding(inimigo) {
    if(this.invencivel){
      return false;
    }
    
    const precision = .7
    const collide = collideRectRect(
      this.x,
      this.y,
      this.largura * precision,
      this.altura * precision,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precision,
      inimigo.altura * precision
      );
    return collide;
  }
}
