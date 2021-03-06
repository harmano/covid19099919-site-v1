// Gathering data


// date is 2020-06-15T10:00
var timeMod = '2020-06-15T10:00'
var deaths = 8217;
var deathsToday = 0;

var confirmed = 100404;
var confirmedToday = 1;

var recovered = 60668;
var recoveredToday = 2;

var active = 31519;
var activeToday =  active - 31519;

var test = 2152700;
var testToday = 0;

var m = (deaths / confirmed) * 100;
var mortality = m.toFixed(3);
var critical = 1937;






document.getElementById("confirmed").innerHTML = numberWithCommas(confirmed);
document.getElementById("confirmedAlt").innerHTML = numberWithCommas(confirmed);
document.getElementById("confirmedToday").innerHTML = '+' + countItUpConfirmedToday(confirmedToday);
document.getElementById("confirmedTodayAlt").innerHTML = '+' + countItUp5(confirmedToday);

document.getElementById("deaths").innerHTML = numberWithCommas(deaths);
document.getElementById("deathsAlt").innerHTML = numberWithCommas(deaths);
document.getElementById("deathsToday").innerHTML = '+' + countItUp10(deathsToday);
document.getElementById("deathsTodayAlt").innerHTML = '+' + countItUp6(deathsToday);

document.getElementById("recovered").innerHTML = numberWithCommas(recovered);
document.getElementById("recoveredAlt").innerHTML = numberWithCommas(recovered);
document.getElementById("recoveredToday").innerHTML = '+' + countItUpRecoveredToday(recoveredToday);
document.getElementById("recoveredTodayAlt").innerHTML = '+' + countItUp7(recoveredToday);

document.getElementById("active").innerHTML = numberWithCommas(active);
document.getElementById("activeToday").innerHTML = '+' + countItUp8(activeToday);



document.getElementById("mortality").innerHTML = mortality +'%';
document.getElementById("mortalityToday").innerHTML = countItUp3(critical);


document.getElementById("totatTests").innerHTML = numberWithCommas(test);
document.getElementById("totatTestsToday").innerHTML = countItUp2(testToday);

document.getElementById("timeMod").innerHTML = timeMod;
document.getElementById("timeModAlt").innerHTML = timeMod;
document.getElementById("timeModalt2").innerHTML = timeMod;
document.getElementById("timeModalt3").innerHTML = timeMod;


function countItUpRecoveredToday(numb) {
  var secondsLabel = document.getElementById("recoveredToday");
  var totalSeconds = numb - 30;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
function countItUpConfirmedToday(numb) {
  var secondsLabel = document.getElementById("confirmedToday");
  var totalSeconds = numb - 30;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}
function countItUp2(numb) {
  var secondsLabel = document.getElementById("totatTestsToday");
  var totalSeconds = numb - 100;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
function countItUp5(numb) {
  var secondsLabel = document.getElementById("confirmedTodayAlt");
  var totalSeconds = numb - 100;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
function countItUp3(numb) {
  var secondsLabel = document.getElementById("mortalityToday");
  var totalSeconds = numb - 100;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}

function countItUp6(numb) {
  var secondsLabel = document.getElementById("deathsTodayAlt");
  var totalSeconds = numb - 20;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}

function countItUp10(numb) {
  var secondsLabel = document.getElementById("deathsToday");
  var totalSeconds = numb - 20;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}

function countItUp7(numb) {
  var secondsLabel = document.getElementById("recoveredTodayAlt");
  var totalSeconds = numb - 100;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
function countItUp8(numb) {
  var secondsLabel = document.getElementById("activeToday");
  var totalSeconds = numb - 20;

  var countdown = setInterval(function(){
    totalSeconds++;
    secondsLabel.innerHTML = totalSeconds;

    if (totalSeconds >= numb) {
      clearInterval(countdown);
    }
  }, 1);
}
