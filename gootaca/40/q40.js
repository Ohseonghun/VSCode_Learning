c = new Array(6);
a = [1,2,3,4,5,6];  


dw("번호 " + a);
hr();




c[0]=Math.floor(Math.random()*45+1);
dw("첫번호: "+c[0]);
hr();

while(true){
    c[1]=Math.floor(Math.random()*45+1);
    if(c[0] == c[1]){
        continue;
    } else {
        dw("번호"+c[1]);
        hr();
        break;
    }
}

while(true){
    c[2]=Math.floor(Math.random()*45+1);
    if(c[0] == c[2]){
        continue;
    } else if(c[1] == c[2]){
        continue;
    } else {
        dw("번호"+c[2]);
        hr();
        break;
    }
}

while(true){
    c[3]=Math.floor(Math.random()*45+1);
    if(c[0] == c[3]){
        continue;
    } else if(c[1] == c[3]){
        continue;
    } else if(c[2] == c[3]){
        continue;
    } else {
        dw("번호"+c[3]);
        hr();
        break;
    }
}

while(true){
    c[4]=Math.floor(Math.random()*45+1);
    if(c[0] == c[4]){
        continue;
    } else if(c[1] == c[4]){
        continue;
    } else if(c[2] == c[4]){
        continue;
    } else if(c[3] == c[4]){
        continue;
    } else {
        dw("번호"+c[4]);
        hr();
        break;
    }
}

while(true){
    c[5]=Math.floor(Math.random()*45+1);
    if(c[0] == c[5]){
        continue;
    } else if(c[1] == c[5]){
        continue;
    } else if(c[2] == c[5]){
        continue;
    } else if(c[3] == c[5]){
        continue;
    } else if(c[4] == c[5]){
        continue;
    } else {
        dw("번호"+c[5]);
        hr();
        break;
    }
}




var winningCount = 0;
for(var i=0;i<a.length;i++){
    for(var j=0;j<c.length;j++){
        if(a[i] == c[j]){
            dw("하나당첨");
            hr();
            winningCount++;
        }
    }
}

dw("총 당첨된 갯수는 :"+winningCount);
hr();

var rank = "";
switch(winningCount){
    case 3:
        rank = "5등입니다.";
        break;
    case 4:
        rank = "4등입니다.";
        break;
    case 5:
        rank = "3등입니다.";
        for(var i=0;i<6;i++){
            if(a[i]==c){
                rank="2등입니다";
            }
        }
    case 6:
        rank = "1등입니다.";
        break;
    default:
        rank = "꽝입니다."        
        break;
}
dw("등수: "+rank);