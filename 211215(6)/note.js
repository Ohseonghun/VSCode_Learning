
for(var i=1; i<=10 ; i=i+1){
    document.write(i + " , ");
}

var s = prompt("입력하세요 :");

switch(s){
    case 1:
}

document.write(s);


var a = 100;
if(a>1){
    alert("크다");
}

var s = prompt("입력하세요 :");

switch(s){
    case 1:
}

document.write(s);


var a = prompt("입력:");
if(a>100){
    alert("100보다 큽니다");
} else {
    alert("100 이하 입니다.");
}

var a = prompt("입력:");
if(a>100){
    alert("100보다 큽니다");
} else if(a<100){
    alert("100 보다 작습니다");
} else {
    alert("100 입니다.");
}


var a = prompt("입력:");
switch(a){
    case "1":
        alert("1");
        break;
    case "2":
        alert("2");
        break;
    case "3":
        alert("3");
        break;
    default:
        alert("1,2,3 이 아닙니다");
        break;        
}

var i = 0;
while(i < 10){    
    i = i + 1;
    // i++;
    document.write(i + "<br>");
}


const star = "*";
const space = "_";
const br = "<br>";

for (var i = 1; i <= 10; i = i + 1) {
    for (a = 1; a <= 10; a++)
        
        if (a < (i - 1 )) {
            document.write(star);
        // } else {
        //     document.write(space);
        }
        document.write("<br>")
}

const star = "*";
const space = "_";
const br = "<br>";

for (var i = 1; i <= 10; i = i + 1) {
    for (a = 1; a <= 10; a++)
        
        if (a < (i - 1 )) {
            document.write(star);
         } else {
            document.write(space);
        }
        document.write("<br>")
}


var name = prompt("이름을 입력 하세요");
var age = prompt("나이를 입력 하세요");
var kind = prompt("품종를 입력 하세요");
const br = "<br>"


document.write("이름" + name + br);
document.write("나이" + age + br);
document.write("품종" + kind + br);

document.write(br);

document.write(name + br + age + br + kind);


alert("이름" +name + "나이" + age +"품종"+ kind + "입력 완료");


let ran = Math.floor(Math.random() * 10) + 1;

document.write("랜덤값: " + ran + "<br>");

for(let i=1; i<11; i++){
    if(i == ran){
        break;
    }
    document.write(i + " ");   
}

var random;
random = Math.floor(Math.random() *10)+1

document.write("랜덤 숫자" + random +"<br>");

for(var limit_number=1; limit_number<=random; limit_number++){

    document.write(limit_number)
}

var random;
random = Math.floor(Math.random() * 10) + 1;

document.write("랜덤 숫자" + random + "<br>");

for (var limit_number = 1; limit_number <= 10; limit_number++) {
  if (limit_number == random) {
    continue;
  }
  document.write(limit_number);
}

