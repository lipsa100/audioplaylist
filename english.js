
var audio=new Audio("senorita.mp3");
var audio1=new Audio("lovemelikeyoudo.mp3");
var audio2=new Audio("safari.mp3");
var audio3=new Audio("heartattack.mp3");
var audio4=new Audio("believer.mp3");
var audio5=new Audio("turndownforwhat.mp3");
var audio6=new Audio("sounds/English/leanon.mp3");
var audio14=new Audio("seeyouagain.mp3");
var audio15=new Audio("faded.mp3");


var buttonse = document.querySelector(".senorita"),count =0;
var buttonlo = document.querySelector(".love_me"),count = 0;
var buttonsa = document.querySelector(".safari"),count = 0;
var buttonh = document.querySelector(".heartattack"),count =0;
var buttonb = document.querySelector(".believer"),count = 0;
var buttont = document.querySelector(".turndown"),count = 0;
var buttonle = document.querySelector(".lean_on"),count = 0;
var buttonsee = document.querySelector(".seeyouagain"),count = 0;
var buttonf = document.querySelector(".faded"),count = 0;

var number=document.querySelectorAll(".drum").length;

 var rotateimage=  document.querySelector(".right-default");

var songname=document.querySelector('#title');
for(i=0; i<number ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// detecting button press

 var buttonInnerHTML = this.innerHTML;

makesound(buttonInnerHTML);
recentbutton(buttonInnerHTML);
});

}



function makesound(key){
  switch (key){
    case "SE":

    buttonse.onclick = function() {
      count += 1;
    if (count % 2 ==0){

     audio.pause();

    }
    else{

    audio.play();
    audio1.pause();audio2.pause();audio3.pause();audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
      }
    };
audio.play();
audio1.pause();audio2.pause();audio3.pause();audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
    break;

    case "LO":
    buttonlo.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio1.pause();
    }
    else{

    audio1.play();
  audio.pause();audio2.pause();  audio3.pause();audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
      }
    };

      audio1.play();
      audio.pause();audio2.pause();  audio3.pause();audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
      break;


    case "SA":
    buttonsa.onclick = function() {

      count += 1;

    if (count % 2 ==0){

     audio2.pause();
    }
    else{

    audio2.play();
    audio1.pause();audio.pause();audio3.pause();  audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
      }
    };

      audio2.play();
      audio1.pause();audio.pause();audio3.pause();  audio4.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
    break;


    case "H":
    buttonh.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio3.pause();
    }
    else{

    audio3.play();
  audio1.pause();audio2.pause();  audio.pause();audio4.pause();audio5.pause();  audio6.pause();audio14.pause();audio15.pause();
      }
    };

      audio3.play();
      audio1.pause();audio2.pause();  audio.pause();audio4.pause();audio5.pause();  audio6.pause();audio14.pause();audio15.pause();
    break;


    case "B":
    buttonb.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio4.pause();
    }
    else{

    audio4.play();
      audio1.pause();audio2.pause();audio3.pause();audio.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
      }
    };

      audio4.play();
      audio1.pause();audio2.pause();audio3.pause();audio.pause();audio5.pause();audio6.pause();audio14.pause();audio15.pause();
    break;


    case "T":
    buttont.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio5.pause();
    }
    else{

    audio5.play();
    audio1.pause();audio2.pause();audio3.pause();audio4.pause();audio.pause();audio6.pause();audio14.pause();audio15.pause();
      }
    };

      audio5.play();
      audio1.pause();audio2.pause();audio3.pause();audio4.pause();audio.pause();audio6.pause();audio14.pause();audio15.pause();
    break;


    case "LE":
    buttonle.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio6.pause();

    }
    else{

    audio6.play();
  audio1.pause();audio2.pause();audio3.pause();  audio4.pause();audio5.pause();audio.pause();  audio14.pause();audio15.pause();
      }
    };

      audio6.play();
      audio1.pause();audio2.pause();audio3.pause();  audio4.pause();audio5.pause();audio.pause();  audio14.pause();audio15.pause();

    break;


    case "SEE" :
    buttonsee.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio14.pause();
    }
    else{

    audio14.play();
audio1.pause();audio2.pause();audio3.pause();  audio4.pause();  audio5.pause();  audio6.pause();  audio.pause();  audio15.pause();
      }
    };
    audio14.play();
    audio1.pause();audio2.pause();audio3.pause();  audio4.pause();  audio5.pause();  audio6.pause();  audio.pause();  audio15.pause();
    break;

    case "F":
    buttonf.onclick = function() {
      count += 1;

    if (count % 2 ==0){

     audio15.pause();
    }
    else{

    audio15.play();
    audio.pause();audio14.pause();audio6.pause();audio5.pause(); audio4.pause();audio3.pause();audio2.pause();audio1.pause();

      }
    };
    audio15.play();
    audio1.pause();audio2.pause();  audio3.pause();audio4.pause();audio5.pause();audio6.pause();audio.pause();  audio14.pause();

    break;

    default : alert("wrong entry");
  }

}

function recentbutton(activekey){
   var activebutton=  document.querySelector("."+activekey);
   activebutton.classList.add("pressed");
   setTimeout(function() {
     activebutton.classList.remove("pressed");
   },100);
 }
