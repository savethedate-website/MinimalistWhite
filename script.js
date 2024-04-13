const list = document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item) =>
  item.addEventListener('click', activeLink));

// document.getElementById("playButton").addEventListener("click", function() {
//     var video1 = document.getElementById("video1");
//     var video2 = document.getElementById("video2");

//     // Hide the play button
//     document.getElementById("playButton").style.display = "none";

//     // Play video 1
//     video1.play();

//     // When video 1 ends, hide it and show video 2
//     video1.addEventListener("ended", function() {
//       video1.style.display = "none";
//       video2.style.display = "block";

//       // Play video 2
//       video2.play();

//       // Show next button
//       document.getElementById("nextButton").style.display = "block";
//     });
//   });

//   document.getElementById("nextButton").addEventListener("click", function() {
//     var video2 = document.getElementById("video2");
//     var video3 = document.getElementById("video3");

//     // Hide video 2 and show video 3
//     video2.style.display = "none";
//     video3.style.display = "block";

//     // Play video 3
//     video3.play();

//     // Hide next button
//     document.getElementById("nextButton").style.display = "none";
//   });

document.getElementById("playButton").addEventListener("click", function () {
  var video1 = document.getElementById("video1");
  var video2 = document.getElementById("video2");

  // Hide the play button
  document.getElementById("playButton").style.display = "none";

  // Play video 1
  video1.play();

  // When video 1 ends, hide it and show video 2
  video1.addEventListener("ended", function () {
    video1.style.display = "none";
    video2.style.display = "block";

    // Play video 2
    video2.play();

    // Show next button
    document.getElementById("nextButton").style.display = "block";
  });
});

document.getElementById("nextButton").addEventListener("click", function () {
  var video2 = document.getElementById("video2");
  var video3 = document.getElementById("video3");

  // Hide video 2 and show video 3
  video2.style.display = "none";
  video3.style.display = "block";

  // Play video 3
  video3.play();

  // Show prev button
  document.getElementById("prevButton").style.display = "block";

  // Hide next button
  document.getElementById("nextButton").style.display = "none";
});

document.getElementById("prevButton").addEventListener("click", function () {
  var video2 = document.getElementById("video2");
  var video3 = document.getElementById("video3");

  // Hide video 3 and show video 2
  video3.style.display = "none";
  video2.style.display = "block";

  // Play video 2
  video2.play();

  // Show next button
  document.getElementById("nextButton").style.display = "block";

  // Hide prev button if we are at the start
  document.getElementById("prevButton").style.display = "none";
});

var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function (e, i) {
  e.addEventListener("click", function (e) {
    navItems.forEach(function (e2, i2) {
      e2.classList.remove("mobile-bottom-nav__item--active");
    })
    this.classList.add("mobile-bottom-nav__item--active");
  });
});

// Get the modal elements
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the buttons that open the modals
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> elements that close the modals
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");

// Function to open modal 1
btn1.onclick = function () {
  modal1.style.display = "block";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "none";
}

// Function to close modal 1
close1.onclick = function () {
  modal1.style.display = "none";
}

// Function to open modal 2
btn2.onclick = function () {
  modal1.style.display = "none";
  modal2.style.display = "block";
  modal3.style.display = "none";
  modal4.style.display = "none";
}

// Function to close modal 2
close2.onclick = function () {
  modal2.style.display = "none";
}

// Function to open modal 3
btn3.onclick = function () {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "block";
  modal4.style.display = "none";
}

// Function to close modal 3
close3.onclick = function () {
  modal3.style.display = "none";
}

// Function to open modal 4
btn4.onclick = function () {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal4.style.display = "block";
}

// Function to close modal 4
close4.onclick = function () {
  modal4.style.display = "none";
}

// Close modals when clicking outside modal content
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
