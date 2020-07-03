class Pontuacao {
  constructor() {
    this.points = 0;
  }
  
  display(){
    textAlign(RIGHT);
    fill('#fff');
    textSize(50);
    text(parseInt(this.points), width - 30, 50);
  }
  
  gainPoints(){
    this.points = this.points + 0.3;
  }
}