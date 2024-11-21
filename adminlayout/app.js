const closebtn = document.getElementById('closebtn');
const expandbtn = document.getElementById('expandbtn');
const body = document.body;


closebtn.addEventListener('click', () => {

    body.classList.add('sidebar-collapsed');
    expandbtn.style.display = "block";
    closebtn.style.display = "none";

});


expandbtn.addEventListener('click', () => {

    body.classList.remove('sidebar-collapsed');
    closebtn.style.display = "block"; 
    expandbtn.style.display = "none"; 

});


if(window.innerWidth <= 640){
    body.classList.add('sidebar-collapsed');
    closebtn.style.display = "none"; 
}else{
    body.classList.remove('sidebar-collapsed');
}

// Re-check the screen size on window resize to update the layout
window.addEventListener('resize', () => {

    if(window.innerWidth <= 640){
        body.classList.add('sidebar-collapsed');
        closebtn.style.display = "none";
    }else{
        body.classList.remove('sidebar-collapsed');
        closebtn.style.display = "block";
    }

});

document.getElementById('getyear').innerHTML = new Date().getFullYear();


// Dark/Light Mode Toggle



const themeicon = document.getElementById('themeicon');

themeicon.addEventListener('click', () => {

    body.classList.toggle('dark');

    if(body.classList.contains('dark')){

        themeicon.classList.remove('fa-moon');
        themeicon.classList.add('fa-sun');

        // localStorage.setItem('theme', 'dark'); // Save preference to local storage

    }else{

        themeicon.classList.remove('fa-sun');
        themeicon.classList.add('fa-moon');
        // localStorage.setItem('theme', 'light'); // Save preference to local storage
        
    }

});






