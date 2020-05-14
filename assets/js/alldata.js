var timeMod = 'Last Updated : Today - 6:07 PM ET'
var deaths = 5574;
var deathsToday = 150;
var confirmed = 73977;
var confirmedToday = 471;

var recovered = 35936;
var recoveredToday = 772;

var active = 32467;
var activeToday = 211;

var m = (deaths / confirmed) * 100;
var mortality = m.toFixed(3);
var critical = 502;

var test = 1169380;
var testToday = 5564;


var ontario = 22854;
var  pe = 27;
var  newfoundland = 261;
var  nova = 1026;
var  newbuns = 120;
var  quebec = 40732;
var  manatoba = 290;
var  saka = 582;
var  alberta = 6407;
var  bc = 2376;
var  yukon = 11;
var  nt = 5;
var  nu = 0;


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
