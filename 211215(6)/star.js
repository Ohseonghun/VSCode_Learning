const star = "*";
const space = "_";
const br = "<br>";
const MAX_LENGTH = 10;

for (var i = 1; i <= MAX_LENGTH; i = i+1) {
  //i적인 무언가를 10번 반복
  for (a = 1; a <= MAX_LENGTH; a++)
    //a적인 무언가를 10번 반복
    if (a < i - 1) {
      //i-1값이 a값보다 클떄
      document.write(star);
      //무언가의 내용
    } else {
      document.write(space);
      //조건이 부합하지 않을 때의 무언가의 내용
    }
  document.write("<br>");
}
