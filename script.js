let slideIndex = 0;
let slideIndex1 = 0;
showSlides();
showSlides1();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  slides1[slideIndex1-1].style.display = "block";  
  setTimeout(showSlides1, 3000); // Change image every 3 seconds
}
