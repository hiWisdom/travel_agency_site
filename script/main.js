//script written by wisdom

// Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" rrt-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " rrt-red";
}



// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();


//date update start
var updatedTime = document.querySelector('#date');
var newTime = new Date();
var newShortTime = newTime.getFullYear();
updatedTime.innerHTML = newShortTime;
//date update ends


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//slide show

// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex[no]-1].style.display = "block";  
//   setTimeout(showSlides(no), 2000); // Change image every 2 seconds
// }






// Slideshow begins
let slideIndex = 0;
showSlides();


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//  Slideshow ends


// Slideshow two begins
let slideIndexTwo = 0;
showSlidesTwo();


function plusSlidesTwo(n, no) {
  showSlidesTwo(slideIndexTwo[no] += n, no);
}


function showSlidesTwo() {
  let i;
  let slidesTwo = document.getElementsByClassName("rrt-display-container-sidesfade");
  let dotsTwo = document.getElementsByClassName("dot");
  for (i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = "none";  
  }
  slideIndexTwo++;
  if (slideIndexTwo > slidesTwo.length) {slideIndexTwo = 1}    
  for (i = 0; i < dotsTwo.length; i++) {
    dotsTwo[i].className = dotsTwo[i].className.replace(" active", "");
  }
  slidesTwo[slideIndexTwo-1].style.display = "block";  
  dotsTwo[slideIndexTwo-1].className += " active";
  setTimeout(showSlidesTwo, 5000); // Change image every 2 seconds
}
//  Slideshow two ends



// Slideshow three begins
let slideIndexThree = 0;
showSlidesThree();


function plusSlides(n, no) {
  showSlidesThree(slideIndexThree[no] += n, no);
}


function showSlidesThree() {
  let i;
  let slidesThree = document.getElementsByClassName("rrt-display-container-sidesfade-one");
  let dotsThree = document.getElementsByClassName("dot");
  for (i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = "none";  
  }
  slideIndexThree++;
  if (slideIndexThree > slidesThree.length) {slideIndexThree = 1}    
  for (i = 0; i < dotsThree.length; i++) {
    dotsThree[i].className = dotsThree[i].className.replace(" active", "");
  }
  slidesThree[slideIndexThree-1].style.display = "block";  
  dotsThree[slideIndexThree-1].className += " active";
  setTimeout(showSlidesThree, 5000); // Change image every 2 seconds
}
//  Slideshow three ends



// Slideshow four begins
let slideIndexFour = 0;
showSlidesFour();


function plusSlides(n, no) {
  showSlidesFour(slideIndexFour[no] += n, no);
}


function showSlidesFour() {
  let i;
  let slidesFour = document.getElementsByClassName("rrt-display-container-sidesfade-two");
  let dotsFour = document.getElementsByClassName("dot");
  for (i = 0; i < slidesFour.length; i++) {
    slidesFour[i].style.display = "none";  
  }
  slideIndexFour++;
  if (slideIndexFour > slidesFour.length) {slideIndexFour = 1}    
  for (i = 0; i < dotsFour.length; i++) {
    dotsFour[i].className = dotsFour[i].className.replace(" active", "");
  }
  slidesFour[slideIndexFour-1].style.display = "block";  
  dotsFour[slideIndexFour-1].className += " active";
  setTimeout(showSlidesFour, 5000); // Change image every 2 seconds
}
//  Slideshow four ends


// Slideshow five begins
let slideIndexFive = 0;
showSlidesFive();


function plusSlides(n, no) {
  showSlidesFive(slideIndexFive[no] += n, no);
}


function showSlidesFive() {
  let i;
  let slidesFive = document.getElementsByClassName("rrt-display-container-sidesfade-three");
  let dotsFive = document.getElementsByClassName("dot");
  for (i = 0; i < slidesFive.length; i++) {
    slidesFive[i].style.display = "none";  
  }
  slideIndexFive++;
  if (slideIndexFive > slidesFive.length) {slideIndexFive = 1}    
  for (i = 0; i < dotsFive.length; i++) {
    dotsFive[i].className = dotsFive[i].className.replace(" active", "");
  }
  slidesFive[slideIndexFive-1].style.display = "block";  
  dotsFive[slideIndexFive-1].className += " active";
  setTimeout(showSlidesFive, 5000); // Change image every 2 seconds
}
//  Slideshow five ends



// Slideshow Six begins
let slideIndexSix = 0;
showSlidesSix();


function plusSlides(n, no) {
  showSlidesSix(slideIndexSix[no] += n, no);
}


function showSlidesSix() {
  let i;
  let slidesSix = document.getElementsByClassName("rrt-display-container-sidesfade-four");
  let dotsSix = document.getElementsByClassName("dot");
  for (i = 0; i < slidesSix.length; i++) {
    slidesSix[i].style.display = "none";  
  }  
  slideIndexSix++;
  if (slideIndexSix > slidesSix.length) {slideIndexSix = 1}    
  for (i = 0; i < dotsSix.length; i++) {
    dotsSix[i].className = dotsSix[i].className.replace(" active", "");
  }
  slidesSix[slideIndexSix-1].style.display = "block";  
  dotsSix[slideIndexSix-1].className += " active";
  setTimeout(showSlidesSix, 5000); // Change image every 2 seconds
}
//  Slideshow Six ends


//DOM change

//slide show change width and height

