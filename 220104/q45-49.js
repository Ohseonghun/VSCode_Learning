// * 생성자 * 를 클래스 선언 시 추가로 선언했음. 
// 함수 매개변수처럼 똑같은 형식으로 주고 값의 전달은
function Cat(name,age,weight,family,color){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.age = age;    // 나이
    this.weight = weight; // 몸무게
    this.family = family;    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
    this.color = color;     // 털색
}

var kitty = new Cat();

kitty.name = "키티";
kitty.age = 1;
kitty.weight = 300;
kitty.family = "코리안숏헤어";
kitty.color = "white";

// * 생성자 * 를 이용하여 초기값을 바로 주는것도 가능함
var yaongi = new Cat(
    "야옹이",
    2,
    200,
    "페르시아고양이",
    "black"
);

if(kitty.age > yaongi){
    dw("형님고양이:"+kitty.name); br();
    dw("동생고양이:"+yaongi.name);
}else if(kitty.age == yaongi.age){
    dw("둘은 친구임");
}else{
    dw("형님고양이:"+yaongi.name); br();
    dw("동생고양이:"+kitty.name);
}


// function Cat(name,age,weight,family,color){
//     //속성, 프로퍼티    
//     this.name = name;  // 이름
//     this.age = age;    // 나이
//     this.weight = weight; // 몸무게
//     this.family = family;    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
//     this.color = color;     // 털색
// }

// var kitty = new Cat();
// kitty.name = "키티";
// kitty.age = 1;
// kitty.weight = 300;
// kitty.family = "코리안숏헤어";
// kitty.color = "white";

// var yaongi = new Cat(
//     "야옹이",
//     2,
//     200,
//     "페르시아고양이",
//     "black"
// );

// dw("이름:"+kitty.name); hr();
// dw("나이:"+kitty.age); hr();
// dw("몸무게:"+kitty.weight); hr();
// dw("종류:"+kitty.family); hr();
// dw("털색:"+kitty.color); hr();

// dw("이름:"+yaongi.name); hr();
// dw("나이:"+yaongi.age); hr();
// dw("몸무게:"+yaongi.weight); hr();
// dw("종류:"+yaongi.family); hr();
// dw("털색:"+yaongi.color); hr();
