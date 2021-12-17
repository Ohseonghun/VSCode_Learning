var cpu;

while (true) {
  user = prompt ("입력하세요")
  if (user == "가위" || user == "바위" || user == "보" ) {
    break;
  } else {
    alert("다시 입력하세요");
  }
}

var cpu = Math.floor(Math.random() * 3) +1


switch (user){
  case "가위":
    if (1==cpu){
      dw("상대가 가위를 냈습니다.");
      alert("비겼습니다.");
    }

    else if (2==cpu){
      dw("상대가 바위를 냈습니다.");
      alert("졌습니다.");
    }

    else{
      dw("상대가 보를 냈습니다.");
      alert("이겼습니다.");
    }
    break;

  case "바위":
    if (1==cpu){
      dw("상대가 가위를 냈습니다.");
      alert("이겼습니다.");
    }

    else if (2==cpu){
      dw("상대가 바위를 냈습니다.");
      alert("비겼습니다.");
    }

    else{
      dw("상대가 보를 냈습니다.");
      alert("졌습니다.");
    }
    break;

  case "보":
    if (1==cpu){
      dw("상대가 가위를 냈습니다.");
      alert("졌습니다.");
    }

    else if (2==cpu){
      dw("상대가 바위를 냈습니다.");
      alert("이겼습니다.");
    }

    else{
      dw("상대가 보를 냈습니다.");
      alert("비겼습니다.");
    }
    break;
  
}
