
const count_of_celebrities=9;
let current_index=0;
let right_answers_count=0;
let celeb_selected = false;
let names = [
  "Elon Musk",
  "Tapasya",
  "Gor Vardanyan",
  "Alexanyan",
  "Vin Diesel",
  "Ani Zakharyan",
  "Alan Turing",
  "Pythagoras",
  "Julius Caesar"
]

let right_answers = [
    2,
    4,
    6,
    8,
    1,
    0,
    3,
    5,
    7
  ]

let button_next=document.getElementById("next");
let cell_0=document.getElementById("cell_0");
let cell_1=document.getElementById("cell_1");
let cell_2=document.getElementById("cell_2");
let cell_3=document.getElementById("cell_3");
let cell_4=document.getElementById("cell_4");
let cell_5=document.getElementById("cell_5");
let cell_6=document.getElementById("cell_6");
let cell_7=document.getElementById("cell_7");
let cell_8=document.getElementById("cell_8");

let celeb_name=document.getElementById("celeb_name");
let result_info=document.getElementById("result_info");
let emoji=document.getElementById("emojii");

celeb_name.innerHTML=names[current_index];

button_next.addEventListener('click',onNextClicked,false);
cell_0.addEventListener('click',onImageSelected0,false);
cell_1.addEventListener('click',onImageSelected1,false);
cell_2.addEventListener('click',onImageSelected2,false);
cell_3.addEventListener('click',onImageSelected3,false);
cell_4.addEventListener('click',onImageSelected4,false);
cell_5.addEventListener('click',onImageSelected5,false);
cell_6.addEventListener('click',onImageSelected6,false);
cell_7.addEventListener('click',onImageSelected7,false);
cell_8.addEventListener('click',onImageSelected8,false);


function showResult(){
    result_info.style.visibility = "visible";
    emoji.style.visibility = "visible";

    if(right_answers_count==0){
        result_info.innerHTML=" right answers count = "+right_answers_count + " Dude at least watch TV";
        result_info.style.color="red";

    }else if(right_answers_count==3 ||right_answers_count==2|| right_answers_count==1){
        result_info.innerHTML=" right answers count = "+right_answers_count +  " Low";
        result_info.style.color="yellow";
        emoji.src="poker.jpg";
    }else if(right_answers_count==4 ||right_answers_count==5|| right_answers_count==6)
    {
        result_info.innerHTML=" right answers count = "+right_answers_count + " Middle";
        result_info.style.color="blue";
        emoji.src = "sm.JPG"
    }else {
        result_info.innerHTML=" right answers count = "+right_answers_count + " Great";
        result_info.style.color="green";
        emoji.src="great.jpg";
    }
}

function onNextClicked(event){
    if(celeb_selected){
    celeb_selected=false;
    cleanAllFrameColors();
    if(button_next.innerHTML=="Next"){
        ++current_index;
        if(current_index<names.length){
            celeb_name.innerHTML=names[current_index];
        }
        if(current_index==names.length-1){
            button_next.innerHTML="Show Result";
        }
    }else{
        showResult();
    }
}
}

function cleanAllFrameColors(){
    cell_0.style.backgroundColor="coral";
    cell_1.style.backgroundColor="coral";
    cell_2.style.backgroundColor="coral";
    cell_3.style.backgroundColor="coral";
    cell_4.style.backgroundColor="coral";
    cell_5.style.backgroundColor="coral";
    cell_6.style.backgroundColor="coral";
    cell_7.style.backgroundColor="coral";
    cell_8.style.backgroundColor="coral";

    


}

function onImageSelected0(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(0 == right_answers[current_index]){
        ++right_answers_count;
        cell_0.style.backgroundColor="green";
    }else{
        cell_0.style.backgroundColor="red";
    }
}
}

function onImageSelected1(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(1 == right_answers[current_index]){
        ++right_answers_count;
        cell_1.style.backgroundColor="green";
    }else{
        cell_1.style.backgroundColor="red";
    }
}
}


function onImageSelected2(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(2 == right_answers[current_index]){
        ++right_answers_count;
        cell_2.style.backgroundColor="green";
    }else{
        cell_2.style.backgroundColor="red";
    }
}
}

function onImageSelected3(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(3 == right_answers[current_index]){
        ++right_answers_count;
        cell_3.style.backgroundColor="green";
    }else{
        cell_3.style.backgroundColor="red";
    }
}
}

function onImageSelected4(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(4 == right_answers[current_index]){
        ++right_answers_count;
        cell_4.style.backgroundColor="green";
    }else{
        cell_4.style.backgroundColor="red";
    }
}
}

function onImageSelected5(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(5 == right_answers[current_index]){
        ++right_answers_count;
        cell_5.style.backgroundColor="green";
    }else{
        cell_5.style.backgroundColor="red";
    }
}
}

function onImageSelected6(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(6 == right_answers[current_index]){
        ++right_answers_count;
        cell_6.style.backgroundColor="green";
    }else{
        cell_6.style.backgroundColor="red";
    }
}
}

function onImageSelected7(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(7 == right_answers[current_index]){
        ++right_answers_count;
        cell_7.style.backgroundColor="green";
    }else{
        cell_7.style.backgroundColor="red";
    }
}
}

function onImageSelected8(event){
    if(!celeb_selected){
        celeb_selected=true;
    if(8 == right_answers[current_index]){
        ++right_answers_count;
        cell_8.style.backgroundColor="green";
    }else{
        cell_8.style.backgroundColor="red";
    }
}
}
