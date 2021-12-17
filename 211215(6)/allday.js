var random;
random = Math.floor(Math.random() * 10) + 1;

document.write("랜덤 숫자" + random + "<br>");

for (var limit_number = 1; limit_number <= 10; limit_number++) {
  if (limit_number < random) {
  }
  document.write(limit_number);
}
