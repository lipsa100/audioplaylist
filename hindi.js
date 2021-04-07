

// sounds
var audio=new Audio("aksarisduniyamein.mp3");
var audio1=new Audio("dheeredheerese.mp3");
var audio2=new Audio("dilkarishta.mp3");
var audio3=new Audio("dillagaliyamaine.mp3");
var audio4=new Audio("humeintumsehuahaipyaar.mp3");
var audio5=new Audio("kissikimuskurahaton.mp3");
var audio6=new Audio("bepanah.mp3");
var audio14=new Audio("mainduniyabhuladunga.mp3");
var audio15=new Audio("mohabbatdilkasukoon.mp3");


var buttonw = document.querySelector(".wajah"),count =0;
var buttonk = document.querySelector(".kabhi"),count = 0;
var buttonb = document.querySelector(".butterfly"),count = 0;
var buttonc = document.querySelector(".cmyn"),count =0;
var buttone = document.querySelector(".ekdin"),count = 0;
var buttonh = document.querySelector(".haledil"),count = 0;
var buttonl = document.querySelector(".laapata"),count = 0;
var buttonbu = document.querySelector(".burj"),count = 0;
var buttont = document.querySelector(".tumhiho"),count = 0;

var number=document.querySelectorAll(".drum").length;

 

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
    case "W":

    buttonw.onclick = function() {
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

    case "K":
    buttonk.onclick = function() {
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


    case "C":
    buttonc.onclick = function() {

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


    case "E":
    buttone.onclick = function() {
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


    case "H":
    buttonh.onclick = function() {
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


    case "J":
    buttonb.onclick = function() {
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


    case "T":
    buttont.onclick = function() {
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


    case "L" :
    buttonl.onclick = function() {
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

    case "B":
    buttonbu.onclick = function() {
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
