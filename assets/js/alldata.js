var deaths = 4990;
var deathsToday = 168;
var confirmed = 70034;
var confirmedToday = 1173;

var recovered = 32096;
var recoveredToday = 847;

var active = 32948;
var activeToday = 502;

var m = (deaths / confirmed) * 100;
var mortality = m.toFixed(3);
var critical = 502;

var test = 1135984;
var testToday = 67984;

var timeMod = 'Last Updated : Today - 3:20 PM ET'

document.getElementById("confirmed").innerHTML = numberWithCommas(confirmed);
document.getElementById("confirmedAlt").innerHTML = numberWithCommas(confirmed);
document.getElementById("confirmedToday").innerHTML = '+' + numberWithCommas(confirmedToday);
document.getElementById("confirmedTodayAlt").innerHTML = '+' + numberWithCommas(confirmedToday);

document.getElementById("deaths").innerHTML = numberWithCommas(deaths);
document.getElementById("deathsAlt").innerHTML = numberWithCommas(deaths);
document.getElementById("deathsToday").innerHTML = '+' + numberWithCommas(deathsToday);
document.getElementById("deathsTodayAlt").innerHTML = '+' + numberWithCommas(deathsToday);

document.getElementById("recovered").innerHTML = numberWithCommas(recovered);
document.getElementById("recoveredAlt").innerHTML = numberWithCommas(recovered);
document.getElementById("recoveredToday").innerHTML = '+' + numberWithCommas(recoveredToday);
document.getElementById("recoveredTodayAlt").innerHTML = '+' + numberWithCommas(recoveredToday);

document.getElementById("active").innerHTML = numberWithCommas(active);
document.getElementById("activeToday").innerHTML = '+' + numberWithCommas(activeToday);



document.getElementById("mortality").innerHTML = mortality +'%';
document.getElementById("mortalityToday").innerHTML = critical;


document.getElementById("totatTests").innerHTML = numberWithCommas(test);
document.getElementById("totatTestsToday").innerHTML = numberWithCommas(testToday);

document.getElementById("timeMod").innerHTML = timeMod;
document.getElementById("timeModAlt").innerHTML = timeMod;
document.getElementById("timeModalt2").innerHTML = timeMod;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
