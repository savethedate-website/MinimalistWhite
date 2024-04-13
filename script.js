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

