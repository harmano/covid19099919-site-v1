// date is 2020-05-17T14:05
var timeMod = '2020-05-17T14:05'
var deaths = 5792;
var deathsToday = 4;
var confirmed = 76944;
var confirmedToday = 469;

var recovered = 38463;
var recoveredToday = 644;

var active = 32689;
var activeToday =  active - 32673;

var test = 1347287;
var testToday = 81785;

var m = (deaths / confirmed) * 100;
var mortality = m.toFixed(3);
var critical = 502;




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
