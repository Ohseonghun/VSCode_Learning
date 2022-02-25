function Cat(){
    // 속성.또는 프로퍼티들
    this.Name=""; //이름
    this.Age=0;     //나이
    this.Weight=0;   //몸무게
    this.family=""      //종류
    this.color=""         //털색
    
}

var kitty = new Cat();
kitty.Age = 15;
kitty.Weight = 350;
kitty.family = "페르시안";
kitty.color = "갈색";
kitty.Name = "길냥이";
dw("이름:"+kitty.Name);hr();
dw("털색:"+kitty.color );hr();
dw("몸무게:"+kitty.Weight);hr();
dw("종류:"+kitty.family);hr();
dw("나이:"+kitty.Age);hr();
