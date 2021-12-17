var random; // 랜덤 변수 선언
random = Math.floor(Math.random() * 100) + 1;

document.write("<div id='cat_row_reyout'>");

for (var i = 1; i <= random; i = i + 1) {
  // 7 황금 고양이
  if (i == 7) {
    document.write("<div class='gold'>");
  } else {
    document.write("<div class='normal'>");
  }

  document.write("<img class='cat' src='cat.jpg'>");
  document.write("<p class='text'>" + i + "</p>");
  document.write("</div>");
}

document.write("</div");
