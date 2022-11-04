let play=document.getElementById("play");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let count=0;
let hour=00;
let minute = 00;
let second=00;


play.addEventListener('click', function(){
 timer=true;
 stopwatch();
})

stop.addEventListener('click', function(){
  timer=false;
})

reset.addEventListener('click', function(){
  timer=false;
  hour=00;
  minute=00;
  second=00;
  document.getElementById('hour').innerHTML="00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  })

 stopwatch=()=>{


 } 


