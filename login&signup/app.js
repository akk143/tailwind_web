const getdots= document.getElementsByClassName('dot');
const getpages = document.getElementsByClassName('page');
const getform = document.getElementById('form');
const pervbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const resultcontainer = document.getElementById('result-container');
// console.log(getdots, getpages);

var pagekeys = [
    ["email", "password", "newsletter", "newsletter"],
    ["firstname", "lastname", "image"],
    ["dob"],
    ["phone", "address", "documents", "documents"]
];

var datas = [];


let curridx = 0;
showpage(curridx);

function showpage(num){
    // console.log(num);   // 0

    // getpages[num].style.display = "block";

    const pages = document.querySelectorAll('.page');
    pages.forEach((page,index)=>{
        page.style.display = index === num ? "block" : "none"
    });

    num === 0 ? prevbtn.style.display = "none" : prevbtn.style.display = "inline-block";

    num == (getpages.length-1) ? nextbtn.textContent = "Submit" : nextbtn.textContent = "Next";

    dotindicatior(num);
}



function dotindicatior(num){
    // console.log(num);

    for(let x = 0; x < getdots.length, x++;){
        getdots[x].classList.remove('acitve');
    }

    getdots[num].classList.add('active');
}


function gonow(num){

    // console.log(num);
    // console.log(curridx);  // 0

    if(num == 1 && !formvalidation()){
        return false;
    }

    getpages[curridx].style.display = "none";
    curridx = curridx + num;
    // console.log(curridx);  // 1

    if(curridx >= getpages.length){

        getform.style.display = "none";
        resultcontainer.style.display = "block";

        result(datas);
        return false;
    }

    showpage(curridx);

}


function formvalidation(){

    let valid = true;

    getcurrinput = getpages[curridx].getElementsByTagName('input');
    // console.log(getcurrinput);
    // console.log(getcurrinput[0].value);


    if(!datas[curridx]){
        datas[curridx] = {};
    }

    let curpagekeys = pagekeys[curridx];
    // console.log(curpagekeys);

    for(let x = 0; x < getcurrinput.length; x++){
        // console.log(x);

        let input = getcurrinput[x];
        let key = curpagekeys[x];

        if(input.type === "radio"){

            if(input.checked){
                datas[curridx][key] = input.value;
            }

        }else if(input.type === "checkbox"){

            if(!datas[curridx][key]){
                datas[curridx][key] = [];
            }

            if(input.checked){
                datas[curridx][key].push(input.value);
            }

        }else if(input.value.trim() === ''){
            input.classList.add('error');
            valid = false;
        }else{
            input.classList.remove('error');
            datas[curridx][key] = input.value;
        }
    }

    console.log(datas);

    if(valid){
        getdots[curridx].classList.add('done');
    }

    // console.log(valid);
    return valid;
}


function result(data){

    console.log(data);

    const documentlists = data[3].documents.length > 0 ? data[3].documents.join(',') : "No Data";

    resultcontainer.innerHTML = `
                                    <ul>
                                        <h1>Details</h1>
                                        <li>Name: ${data[1].firstname} ${data[1].lastname}</li>
                                        <li>Agree: ${data[0].newsletter === 1 ? "Yes" : "No"} </li>
                                        <li>Email: ${data[0].email}</li>
                                        <li>Profile: ${data[1].image}</li>
                                        <li>Date of Birth: ${data[2].dob}</li>
                                        <li>Phone Number: ${data[3].phone}</li>
                                        <li>Address: ${data[3].address}</li>
                                        <li>Documents: ${documentlists}</li>
                                    </ul>
                                    <button type="submit" class="submit-btn" onclick="submitbtn()">Apply Now</button>
                                `;
}


function submitbtn(){
    getform.submit();
}

