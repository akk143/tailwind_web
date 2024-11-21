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
const totalslides = document.querySelectorAll('[data-slide-index]').length; 
const carouselslide = document.getElementById('carousel-slides');          
const dots = document.querySelectorAll('[data-slide]');                    


function showslides(index){

    const offset = index * -100;
    carouselslide.style.transform = `translateX(${offset}%)`; 


    dots.forEach((dot, x) => {
        dot.classList.toggle('bg-gray-800', x === index); // Show Active
        dot.classList.toggle('bg-gray-400', x !== index); // Reset others
    });

}


const slidesteps = {
    first: 0,
    second: 1,
    last: 2,
    backToSecond: 3,
};


let step = slidesteps.first;
let currslideidx = 0;


function nextslide(){

    switch(step){

        case slidesteps.first:               // Move to Slide 2
            currslideidx = 1;
            step = slidesteps.second;
            break;

        case slidesteps.second:              // Move to Last Slide
            currslideidx = totalslides - 1;
            step = slidesteps.last;
            break;

        case slidesteps.last:                // Go back to Slide 2
            currslideidx = 1;
            step = slidesteps.backToSecond;
            break;

        case slidesteps.backToSecond:        // Go back to First Slide
            currslideidx = 0;
            step = slidesteps.first;         // Reset to restart the sequence
            break;
    }

    showslides(currslideidx);
}


let autoslide = setInterval(nextslide, 5000);


showslides(currslideidx);


dots.forEach((dot, index) => {

    dot.addEventListener('click',() =>{

        clearInterval(autoslide);
        
        currslideidx = index;
        showslides(currslideidx);

        if(currslideidx === 0) step = slidesteps.first;
        if(currslideidx === 1) step = slidesteps.second;
        if(currslideidx === totalslides - 1) step = slidesteps.last;

        autoslide = setInterval(nextslide, 5000);

    });

});


function togglemenu(ele){

    const getul = document.querySelector('nav ul');

    ele.classList.toggle('togglemenus');
    
    getul.classList.toggle('opacity-100');
    getul.classList.toggle('hidden');

}

