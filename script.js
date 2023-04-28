let button = document.getElementById("finish");
button.addEventListener("click", checkTest1);

let button2 = document.getElementById("finish-2")
button2.addEventListener("click", checkTest2);

let button3 = document.getElementById("finish-3")
button2.addEventListener("click", checkTest3);

function checkTest1() {
  let result = 0;

  let a1 = document.getElementById("q1").value;
  if (a1 === "2") {
    result++;
  }

  let a2 = document.getElementById("q2").value;
  if (a2 === "5") {
    result++;
  }

  let a3 = document.getElementById("q3").value;
  if (a3 === "7") {
    result++;
  }

  let a4 = document.getElementById("q4").value;
  if (a4 === "12") {
    result++;
  }

  let a5 = document.getElementById("q5").value;
  if (a5 === "9") {
    result++;
  }

  let a6 = document.getElementById("q6").value;
  if (a6 === "8") {
    result++;
  }

  let a7 = document.getElementById("q7").value;
  if ( a7 === "8") {
    result++;
  }

  let a8 = document.getElementById("q8").value;
  if (a6 === "8") {
    result++;
  }

  let a9 = document.getElementById("q9").value;
  if (a6 === "9") {
    result++;
  }

  let a10 = document.getElementById("q10").value;
  if (a6 === "9") {
    result++;
  }
  
  alert("Правильных ответов:" + result);
}

function checkTest2() {
  let result = 0;
  
  let a11 = document.getElementById("q11").value;
  if (a11 === "2002") {
    result++;
  }

  let a12 = document.getElementById("q12").value;
  if (a12 === "2002") {
    result++;
  }

  let a13 = document.getElementById("q13").value;
  if (a13 === "2002") {
    result++;
  }

  let a14 = document.getElementById("q14").value;
  if (a14 === "2002") {
    result++;
  }

  let a15 = document.getElementById("q15").value;
  if (a15 === "2002") {
    result++;
  }

  let a16 = document.getElementById("q16").value;
  if (a16 === "2002") {
    result++;
  }

  let a17 = document.getElementById("q17").value;
  if (a11 === "2002") {
    result++;
  }

  let a18 = document.getElementById("q18").value;
  if (a18 === "2002") {
    result++;
  }

  let a19 = document.getElementById("q19").value;
  if (a11 === "2002") {
    result++;
  }

  let a20 = document.getElementById("q20").value;
  if (a20 === "2002") {
    result++;
  }

  alert("Правильных ответов:" + result);
}

