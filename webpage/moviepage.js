document.getElementById("btn-hamburger").addEventListener("click",f1);
        let count=0;
        function f1(){
            if (count%2==0)
            {
                document.getElementById("menu").style.display="block";
                document.getElementById("menu").style.transition="all 0.8s ease-in";
                document.getElementById("hamburgerline-2").style.width='0px';
                document.getElementById("hamburgerline-1").style.transform='translateY(9px) rotate(-45deg)';
                document.getElementById("hamburgerline-3").style.transform='translateY(-9px) rotate(45deg)';
            }
            else{
                document.getElementById("menu").style.display="none";
                document.getElementById("hamburgerline-2").style.width='25px';
                document.getElementById("hamburgerline-1").style.transform='rotate(0)';
                document.getElementById("hamburgerline-3").style.transform='rotate(0)';
            }
            count+=1;
        }


function toggleText() {
    var points = 
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");
    if (points.style.display === "none") {
        showMoreText.style.display = "none";
        points.style.display = "inline";
        buttonText.innerHTML = "Show More";
    }
    else {
        showMoreText.style.display = "inline";
        points.style.display = "none";
        buttonText.innerHTML = "Show Less";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

VANTA.TRUNK({
    el: "#vantas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    //color: 0xe0b77d,
    color: 0xa36758,
    backgroundColor: 0x62151D,
    spacing: 30.00,
    chaos: 2.50
})




