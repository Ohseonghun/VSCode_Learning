function Cat(){
      
    this.name = ""; 
    this.age = 0;  
    this.weight = 0;
    this.family = ""   
    this.color = ""    
}

var kitty = new Cat();
kitty.name = "키티";
kitty.age = 1;
kitty.weight = 300;
kitty.family = "코리안숏헤어";
kitty.color = "white";
dw("이름:"+kitty.name); hr();
dw("나이:"+kitty.age); hr();
dw("몸무게:"+kitty.weight); hr();
dw("종류:"+kitty.family); hr();
dw("털색:"+kitty.color); hr();