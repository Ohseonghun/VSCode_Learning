function Cat(name,age,weight,family,color){ 
       
    this.name = name;  
    this.age = age;    
    this.weight = weight; 
    this.family = family;    
    this.color = color;     
}

var kitty = new Cat();

kitty.name = "키티";
kitty.age = 1;
kitty.weight = 300;
kitty.family = "코리안숏헤어";
kitty.color = "white";

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


