var Lotto = new Array(); 
//랜럼 생성될 로또 번호 new Array (객체가 들어갈 공간)
var myLotto = [8, 11, 16, 36, 41, 44];
//나의 로또 번호
var winCount = 0;
//승수 카운트
var ranking = 0;
//  등수 카운트 디폴트 값

//보너스 숫자

for (var i = 0; i < 6; i++) {
     Lotto[i] = Math.floor(Math.random() * 45 + 1);
    //45번 까지의 로또 번호 +1

    while ( Lotto[0] !=  Lotto[1])
        break; {
        if ( Lotto[0] ==  Lotto[1]) {
            ( Lotto[1] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[0] ==  Lotto[2]) {
            ( Lotto[2] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[0] ==  Lotto[3]) {
            ( Lotto[3] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[0] ==  Lotto[4]) {
            ( Lotto[4] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[0] ==  Lotto[5]) {
            ( Lotto[5] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[1] ==  Lotto[2]) {
            ( Lotto[2] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[1] ==  Lotto[3]) {
            ( Lotto[3] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[1] ==  Lotto[4]) {
            ( Lotto[4] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[1] ==  Lotto[5]) {
            ( Lotto[5] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[2] ==  Lotto[3]) {
            ( Lotto[3] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[2] ==  Lotto[4]) {
            ( Lotto[4] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[2] ==  Lotto[5]) {
            ( Lotto[5] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[3] ==  Lotto[4]) {
            ( Lotto[4] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[3] ==  Lotto[5]) {
            ( Lotto[5] = Math.floor(Math.random() * 45 + 1))
        }
        else if ( Lotto[4] ==  Lotto[5]) {
            ( Lotto[5] = Math.floor(Math.random() * 45 + 1))
        }
        continue;
    }
}

var bonus = 0; 
for (var i = 0; i < 1; i++) {
    bonus[i] = Math.floor(Math.random() * 45 + 1);
  
    while ( Lotto[0] != bonus[i])
      break; {
      if ( Lotto[0] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      else if ( Lotto[1] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      else if ( Lotto[2] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      else if ( Lotto[3] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      else if ( Lotto[4] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      else if ( Lotto[5] == bonus[i]) {
        (bonus[i] = Math.floor(Math.random() * 45 + 1))
      }
      continue;
    }
  }

dw("이번 주 행운 번호 <br>");
for (var i = 0; i < 6; i++) {
    dw( Lotto[i] + " ");
}

dw("보너스 번호 " + bonus);
br();

dw("내 번호 : ");
for (var j = 0; j < 6; j++) {
    dw(myLotto[j] + " ");
}

dw("<hr>");

if (myLotto[0] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[0] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[0] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[0] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[0] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[0] ==  Lotto[5]) {
        winCount++;
}

if (myLotto[1] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[1] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[1] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[1] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[1] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[1] ==  Lotto[5]) {
        winCount++;
}

if (myLotto[2] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[2] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[2] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[2] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[2] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[2] ==  Lotto[5]) {
        winCount++;
}

if (myLotto[3] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[3] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[3] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[3] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[3] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[3] ==  Lotto[5]) {
        winCount++;
}

if (myLotto[4] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[4] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[4] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[4] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[4] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[4] ==  Lotto[5]) {
        winCount++;
}

if (myLotto[5] ==  Lotto[0]) {
        winCount++;
}
else if (myLotto[5] ==  Lotto[1]) {
        winCount++;
}
else if (myLotto[5] ==  Lotto[2]) {
        winCount++;
}
else if (myLotto[5] ==  Lotto[3]) {
        winCount++;
}
else if (myLotto[5] ==  Lotto[4]) {
        winCount++;
}
else if (myLotto[5] ==  Lotto[5]) {
        winCount++;
}


switch (winCount) {
    case 3: ranking = "5등";
      break;

    case 4: ranking = "4등";
      break;

    case 5: ranking = "3등";
      if (myLotto[j] == bonus[i]) {
        ranking = "2등";
      }
      break;

    case 6: ranking = "1등";
      break;
      
    default: ranking = "꽝";
  }


br();
dw(winCount + "개 일치");

br();
dw(ranking + " 입니다");

