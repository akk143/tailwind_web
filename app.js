// Start Back To Top
document.addEventListener('DOMContentLoaded',function(){

    const backtotopbtn = document.querySelector('.backtotops-btn');
    
    // Initially hide with opacity and pointer-events
    backtotopbtn.style.opacity = 0;
    backtotopbtn.style.pointerEvents = 'none';
    backtotopbtn.style.transition = 'opacity 1s';

    window.addEventListener('scroll',()=>{

        let scrollTop = window.scrollY;

        if(scrollTop >= 150){
            backtotopbtn.style.opacity = 1;
            backtotopbtn.style.pointerEvents = 'auto';
        }else{
            backtotopbtn.style.opacity = 0;
            backtotopbtn.style.pointerEvents = 'none';
        }

    });

});


// End Back To Top



const newdate = new Date();
document.getElementById('getdate').innerHTML = newdate.getFullYear();


// Start Carousel
const carouselslide = document.getElementById('carousel-slides');
const slides = document.querySelectorAll('[data-slide-index]');
const dots = document.querySelectorAll('[data-slide]');
const totalSlides = slides.length;

let currslideidx = 1;                   // Start with the first visible slide (index 1)


// Clone first and last slides for seamless looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);


firstClone.setAttribute('data-slide-index', totalSlides);
lastClone.setAttribute('data-slide-index', -1);

carouselslide.appendChild(firstClone);
carouselslide.insertBefore(lastClone, slides[0]);


// Adjust slide width and initial position
const slideWidth = 100;                // Assuming 100% width per slide
carouselslide.style.transform = `translateX(-${currslideidx * slideWidth}%)`;


function showslides(index){

  carouselslide.style.transition = 'transform 0.7s ease-in-out'; // Smooth transition
  carouselslide.style.transform = `translateX(-${index * slideWidth}%)`;

  dots.forEach((dot, i) => {

    dot.classList.toggle('bg-gray-800', i === (index - 1 + totalSlides) % totalSlides);
    dot.classList.toggle('bg-gray-400', i !== (index - 1 + totalSlides) % totalSlides);

  });

}

function handleTransitionEnd(){

  // Seamlessly loop back to the first or last slide
  if(currslideidx === 0){

    carouselslide.style.transition = 'none'; // Remove animation for seamless transition
    currslideidx = totalSlides;              // Move to the real last slide
    carouselslide.style.transform = `translateX(-${currslideidx * slideWidth}%)`;

  }else if(currslideidx === totalSlides + 1){

    carouselslide.style.transition = 'none'; // Remove animation for seamless transition
    currslideidx = 1;                        // Move to the real first slide
    carouselslide.style.transform = `translateX(-${currslideidx * slideWidth}%)`;

  }

}

function nextslide(){

  if(currslideidx <= totalSlides){
    currslideidx++;
    showslides(currslideidx);
  }

}

function prevslide(){

  if(currslideidx > 0){
    currslideidx--;
    showslides(currslideidx);
  }

}

// Auto-slide
let autoslide = setInterval(nextslide, 5000);

// Add Event Listeners
document.getElementById('prev-slide').addEventListener('click', () => {

  clearInterval(autoslide);
  prevslide();
  autoslide = setInterval(nextslide, 5000);

});

document.getElementById('next-slide').addEventListener('click', () => {

  clearInterval(autoslide);
  nextslide();
  autoslide = setInterval(nextslide, 5000);

});


// Add click event to dots
dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {
    
    clearInterval(autoslide);
    currslideidx = index + 1;                     // Dots correspond to the middle slides
    showslides(currslideidx);
    autoslide = setInterval(nextslide, 5000);

  });

});

// Handle transition end for seamless looping
carouselslide.addEventListener('transitionend', handleTransitionEnd);

// Show the initial slide
showslides(currslideidx);

// // End Carousel



// toggle menu
function togglemenu(ele){

    const getul = document.querySelector('nav ul');

    ele.classList.toggle('togglemenus');
    
    getul.classList.toggle('opacity-100');
    getul.classList.toggle('hidden');

}

