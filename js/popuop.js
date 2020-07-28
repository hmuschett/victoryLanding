
//-----------------------------------------------
// Get the modal
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
// let modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");
let btn4 = document.getElementById("myBtn4");
// let btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close")[1];
let span2 = document.getElementsByClassName("close")[2];
let span3 = document.getElementsByClassName("close")[3];
let span4 = document.getElementsByClassName("close")[4];
// let span5 = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
// btn5.onclick = function() {
//   modal5.style.display = "block";
// }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
// span5.onclick = function() {
//   modal5.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else if (event.target == modal1) {
    modal1.style.display = "none";
   }
   else if (event.target == modal2) {
     modal2.style.display = "none";
   }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4) {
    modal4.style.display = "none";
  }
  //else if (event.target == modal5) {
  //   modal5.style.display = "none";
  // }

} 