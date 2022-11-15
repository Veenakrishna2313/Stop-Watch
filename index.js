let play=document.getElementById("play");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let count=00;
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
  count=00;
  document.getElementById('hour').innerHTML="00";
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  })

 stopwatch=()=>{

  if(timer){
    count++;

    if(count==100){
      second++;
      count=0;
    }

  if(second==60){
     minute++;
     second = 0;
  }

  if(minute==60){
    hour++;
    minute = 0;
    second=0;
  }

  let hrString=hour;
  let minString=minute;
  let secString=second;
  let countString=count;

  if(hour<10)
  {
    hrString = "0" + hrString;
  }

  if (minute < 10) {
    minString = "0" + minString;
  }

  if (second < 10) {
    secString = "0" + secString;
  }

   document.getElementById("hour").innerHTML = hrString;
   document.getElementById("minute").innerHTML = minString;
   document.getElementById("second").innerHTML = secString;
 
  setTimeout(stopwatch, 10);

  }

 } 


