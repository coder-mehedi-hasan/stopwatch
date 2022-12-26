window.onload = function() {
  var tens = 00;
  var seconds = 00;
  var minutes = 00;
  var apptens = document.getElementById('tens');
  var appseconds = document.getElementById('seconds');
  var appminutes = document.getElementById('minutes');
  var buttonStart = document.getElementById('button-start');
  var buutonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(timestart,10);
  }
  buutonStop.onclick =  function() {
    clearInterval(Interval);
  }
  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00' ;
    apptens.innerHTML = tens;
    appseconds.innerHTML = seconds;
    appminutes.innerHTML = minutes;
  }
  function timestart() {
    tens++;
    if( tens <= 9 ) {
      apptens.innerHTML = '0'+ tens;
    }
    if ( tens > 9){
      apptens.innerHTML = tens;
    }
    if (tens > 59){
      seconds++;
      appseconds.innerHTML = '0' + seconds;
      tens = 00;
      apptens.innerHTML = '0' + 0 ;

    }
    if ( seconds > 9 ){
      appseconds.innerHTML = seconds;
    }
    if ( seconds > 59){
      minutes++;
      appminutes.innerHTML = '0'+ minutes;
      seconds = 0;
      appseconds.innerHTML = '0'+ seconds;
    }
    if ( minutes > 9){
      appminutes.innerHTML = minutes;
    }
    if ( minutes > 12){
      minutes = 1;
      appminutes.innerHTML = '0'+ minutes;
    }
  }
}