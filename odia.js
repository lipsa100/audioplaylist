
var audio=new Audio("balikabadhu.mp3");
var audio1=new Audio("tuthile.mp3");
var audio2=new Audio("janamadeinusina.mp3");
var audio3=new Audio("kulanandana.mp3");
var audio4=new Audio("maasinagae.mp3");
var audio5=new Audio("moakhiretupalaka.mp3");
var audio6=new Audio("moramanaudijae.mp3");
var audio14=new Audio("mukotiemotire.mp3");
var audio15=new Audio("tudakilu.mp3");


var buttonbalika = document.querySelector(".balika"),count =0;
var buttontuthile = document.querySelector(".tuthile"),count = 0;
var buttonjanamadeinusina = document.querySelector(".janamadeinusina"),count = 0;
var buttonkulanandana = document.querySelector(".kulanandana"),count =0;
var buttonmaasinagae = document.querySelector(".maasinagae"),count = 0;
var buttonmoakhiretupalaka = document.querySelector(".moakhiretupalaka"),count = 0;
var buttonsunapanjuri = document.querySelector(".sunapanjuri"),count = 0;
var buttontumoakhira = document.querySelector(".tumoakhira"),count = 0;
var buttonchatichirideletu = document.querySelector(".chatichirideletu"),count = 0;

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
    case "balika":

    buttonbalika.onclick = function() {
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

    case "tuthile":
    buttontuthile.onclick = function() {
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


    case "janamadeinusina":
    buttonjanamadeinusina.onclick = function() {

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


    case "kulanandana":
    buttonkulanandana.onclick = function() {
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


    case "maasinagae":
    buttonmaasinagae.onclick = function() {
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


    case "moakhiretupalaka":
    buttonmoakhiretupalaka.onclick = function() {
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


    case "sunapanjuri":
    buttonsunapanjuri.onclick = function() {
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


    case "tumoakhira" :
    buttontumoakhira.onclick = function() {
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

    case "chatichirideletu":
    buttonchatichirideletu.onclick = function() {
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
