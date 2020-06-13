//  Vaccine Timeline - Timeline - Provinces Charts

// ontario
var ontarioInfected = 31992;
var ontarioInfectedToday = 266;
var ontariodeaths = 2507	;
var ontariodeathstoday = 351;
var ontariorecovered = 26538;
var ontariorecoveredToday = 375;
var ontarioactive = ontarioInfected - ontariorecovered - ontariodeaths;
var ontariochange = ontarioInfected - 24177;
var ontariocritical = 489;
var ontariotest = 980471	;

// Alberta
var albertaInfected = 7346;
var albertaInfectedToday = 15;
var albertadeaths = 149;
var albertadeathstoday = 0;
var albertarecovered = 6811;
var albertarecoveredToday = 0;
var albertaactive = albertaInfected - albertadeaths - albertarecovered;
var albertachange = albertaInfected - 6818;
var albertacritical = 53;
var albertatest = 325148;

// BritishColumbia
var britishColumbiaInfected = 2709;
var britishColumbiaInfectedToday = 16;
var britishColumbiadeaths = 168;
var britishColumbiadeathstoday = 0;
var britishColumbiarecovered = 2354;
var britishColumbiarecoveredToday = 0;
var britishColumbiaactive = britishColumbiaInfected - britishColumbiadeaths - britishColumbiarecovered;
var britishColumbiachange = britishColumbiaInfected - 2428;
var britishColumbiacritical = 12;
var britishColumbiatest = 165256;

// saskatchewan
var saskatchewanInfected = 663;
var saskatchewanInfectedToday = 0;
var saskatchewandeaths = 13;
var saskatchewandeathstoday = 0;
var saskatchewanrecovered = 627;
var saskatchewanrecoveredToday = 0;
var saskatchewanactive = saskatchewanInfected - saskatchewandeaths - saskatchewanrecovered;
var saskatchewanchange = saskatchewanInfected - 630;
var saskatchewancritical = 1;
var saskatchewantest = 54508;

// manitoba
var manitobaInfected = 300;
var manitobaInfectedToday = 2;
var manitobadeaths = 7;
var manitobadeathstoday = 0;
var manitobarecovered = 284;
var manitobarecoveredToday = 0;
var manitobaactive = manitobaInfected - manitobadeaths - manitobarecovered;
var manitobachange = manitobaInfected - 290;
var manitobacritical = 0;
var manitobatest = 47372;

// quebec
var quebecInfected = 52398;
var quebecInfectedToday = 573;
var quebeceaths = 4069;
var quebecdeathstoday = 0;
var quebecrecovered = 14654;
var quebecrecoveredToday = 0;
var quebecactive = quebecInfected - quebeceaths - quebecrecovered;
var quebecchange = quebecInfected - 43627;
var quebeccritical = 1452;
var quebectest = 0;


// newBrunswick
var newBrunswickInfected = 136;
var newBrunswickInfectedToday = 0;
var newBrunswickdeaths = 1;
var newBrunswickdeathstoday = 0;
var newBrunswickrecovered = 121;
var newBrunswickrecoveredToday = 0;
var newBrunswickactive = newBrunswickInfected - newBrunswickdeaths - newBrunswickrecovered;
var newBrunswickchange = newBrunswickInfected - 120;
var newBrunswickcritical = 4;
var newBrunswicktest = 32954
;

// novaScotia
var novaScotiaInfected = 1058;
var novaScotiaInfectedToday = 1;
var novaScotiadeaths = 58;
var novaScotiadeathstoday = 0;
var novaScotiarecovered = 997;
var novaScotiarecoveredToday = 0;
var novaScotiaactive = novaScotiaInfected - novaScotiadeaths - novaScotiarecovered;
var novaScotiachange = novaScotiaInfected - 1044;
var novaScotiacritical = 2;
var novaScotiatest = 44477 + novaScotiaInfected ;

// Prince Edward Island
var pieInfected = 27;
var pieInfectedToday = 0;
var piedeaths = 0;
var piedeathstoday = 0;
var pierecovered = 27;
var pierecoveredToday = 0;
var pieactive = 0;
var piechange = pieInfected - 27;
var piecritical = 0	;
var pietest = 7212	+ 25 +27;


// Newfoundland
var newfoundlandInfected = 261;
var newfoundlandInfectedToday = 0;
var newfoundlanddeaths = 3;
var newfoundlanddeathstoday = 0;
var newfoundlandrecovered = 256;
var newfoundlandrecoveredToday = 0;
var newfoundlandactive = newfoundlandInfected - newfoundlanddeaths - newfoundlandrecovered;
var newfoundlandchange = newfoundlandInfected - 260;
var newfoundlandcritical = 1;
var newfoundlandtest = 12952;

// yukon
var yukonInfected = 11;
var yukonInfectedToday = 0;
var yukondeaths = 0;
var yukondeathstoday = 0;
var yukonrecovered = 11;
var yukonrecoveredToday = 0;
var yukonactive = 0;
var yukonchange = yukonInfected - 11;
var yukoncritical = 0;
var yukontest = 1145;


// northwest Territories
var northwestTerritoriesInfected = 5;
var northwestTerritoriesInfectedToday = 0;
var northwestTerritoriesdeaths = 0;
var northwestTerritoriesdeathstoday = 0;
var northwestTerritoriesrecovered = 5;
var northwestTerritoriesrecoveredToday = 0;
var northwestTerritoriesactive = 0;
var northwestTerritorieschange = northwestTerritoriesInfected -  5;
var northwestTerritoriescritical = 0;
var northwestTerritoriestest = 2056;

// nunavut
var nunavutInfected = 0;
var nunavutInfectedToday = 0;
var nunavutDeaths = 0;
var nunavutDeathstoday = 0;
var nunavutRecovered = 0;
var nunavutRecoveredToday = 0;
var nunavutActive = 0;
var nunavutChange = nunavutInfected - 0;
var nunavutCritical = 0;
var nunavutTest = 972;


google.charts.load('current', {'packages':['table']});
 google.charts.setOnLoadCallback(drawTable);


 function drawTable() {
 var data = new google.visualization.DataTable();
 data.addColumn('string', 'Province ^' );
 data.addColumn('number', 'Infected' );
 data.addColumn('number', 'Infected Today' );
 data.addColumn('number', 'Deaths');
 data.addColumn('number', 'Deaths Today');
 data.addColumn('number', 'Recovered');
 data.addColumn('number', 'Recovered Today');
 data.addColumn('number', 'Active');
 data.addColumn('number', 'In ICU');
 data.addColumn('number', 'Tests');
 data.addColumn('number', 'Active (+/-)');

 data.addRows([
   ['Ontario',  ontarioInfected , ontarioInfectedToday, ontariodeaths, ontariodeathstoday, ontariorecovered, ontariorecoveredToday, ontarioactive, ontariocritical, ontariotest, ontariochange],
   ['British Columbia',    britishColumbiaInfected , britishColumbiaInfectedToday, britishColumbiadeaths, britishColumbiadeathstoday, britishColumbiarecovered, britishColumbiarecoveredToday, britishColumbiaactive , britishColumbiacritical, britishColumbiatest, britishColumbiachange],
   ['Alberta',  albertaInfected , albertaInfectedToday, albertadeaths, albertadeathstoday, albertarecovered, albertarecoveredToday, albertaactive, albertacritical, albertatest, albertachange],
   ['Saskatchewan',    saskatchewanInfected , saskatchewanInfectedToday, saskatchewandeaths, saskatchewandeathstoday, saskatchewanrecovered, saskatchewanrecoveredToday, saskatchewanactive, saskatchewancritical, saskatchewantest,saskatchewanchange],
   ['Manitoba',   manitobaInfected , manitobaInfectedToday, manitobadeaths, manitobadeathstoday, manitobarecovered, manitobarecoveredToday, manitobaactive, manitobacritical, manitobatest, manitobachange],
   ['Quebec',    quebecInfected , quebecInfectedToday, quebeceaths, quebecdeathstoday, quebecrecovered, quebecrecoveredToday, quebecactive, quebeccritical, quebectest, quebecchange],
   ['New Brunswick',  newBrunswickInfected , newBrunswickInfectedToday, newBrunswickdeaths, newBrunswickdeathstoday, newBrunswickrecovered, newBrunswickrecoveredToday, newBrunswickactive, newBrunswickcritical, newBrunswicktest, newBrunswickchange],
   ['Nova Scotia',   novaScotiaInfected , novaScotiaInfectedToday, novaScotiadeaths, novaScotiadeathstoday, novaScotiarecovered, novaScotiarecoveredToday, novaScotiaactive, novaScotiacritical, novaScotiatest, novaScotiachange],
   ['Prince Edward Island',    pieInfected , pieInfectedToday, piedeaths, piedeathstoday, pierecovered, pierecoveredToday, pieactive, piecritical, pietest, piechange],
   ['Newfoundland and Labrador',   newfoundlandInfected , newfoundlandInfectedToday, newfoundlanddeaths, newfoundlanddeathstoday, newfoundlandrecovered, newfoundlandrecoveredToday, newfoundlandactive, newfoundlandcritical, newfoundlandtest, newfoundlandchange],
   ['Yukon',    yukonInfected , yukonInfectedToday, yukondeaths, yukondeathstoday, yukonrecovered, yukonrecoveredToday, yukonactive, yukoncritical, yukontest, yukonchange],
   ['Northwest Territories',  northwestTerritoriesInfected , northwestTerritoriesInfectedToday, northwestTerritoriesdeaths, northwestTerritoriesdeathstoday, northwestTerritoriesrecovered, northwestTerritoriesrecoveredToday, northwestTerritoriesactive,northwestTerritorieschange, northwestTerritoriestest, northwestTerritoriescritical],
   ['Nunavut',   nunavutInfected , nunavutInfectedToday, nunavutDeaths, nunavutDeathstoday, nunavutRecovered, nunavutRecoveredToday, nunavutActive,nunavutChange,  nunavutTest, nunavutCritical],

 ]);



 var table = new google.visualization.Table(document.getElementById('table_div'));
 var options =
 {
   showRowNumber: true, allowHTML: true,
   allowHtml: true,
   width: '100%',
   height: '100%',
   cssClassNames: {
     headerRow: 'headerRow',
     tableRow: 'tableRow',
     headerCell: 'headerCell',
     rowNumberCell: 'rowNumberCell'

   },
 };


 table.draw(data, options);

 }

 google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawDateFormatTable);
 function drawDateFormatTable() {
   var data = new google.visualization.DataTable();
    data.addColumn('date', 'DATE');
    data.addColumn('string', 'TYPE');
    data.addColumn('string', '');
   data.addRows([
     [new Date(2020, 5, 12), 'NEWS', "TREND LINE: Canada was warned about an 'explosive' second wave of COVID-19  "],
     [new Date(2020, 5, 11), '  ', '  '],
     [new Date(2020, 5, 11), '  ', '  '],
     [new Date(2020, 5, 10), '  ', '  '],
     [new Date(2020, 5, 9), '  ', '  '],
     [new Date(2020, 5, 8), '  ', '  ' ],
     [new Date(2020, 5, 7), '  ', '  ' ],
     [new Date(2020, 5, 6), '  ' , '  '],
    [new Date(2020, 5, 5), 'NEWS', 'Ontario extends emergency orders to June 19, as province reports 455 new cases'],
     [new Date(2020, 5, 4), 'ECONOMY', 'Ontario considering Stage 2 of reopening despite steady stream of new COVID-19 cases'],
     [new Date(2020, 5, 3), 'SUPPORT ', "Feds to announce date for seniors benefit top-up"],
     [new Date(2020, 5, 2), '  ', ''],
     [new Date(2020, 5, 1), '  ', ''],
      [new Date(2020, 4, 31), '  ', ''],
     [new Date(2020, 4, 30), '  ', ''],
     [new Date(2020, 4, 29), '  ', ''],
     [new Date(2020, 4, 28), '  ', ''],
     [new Date(2020, 4, 27), '  ', ''],
      [new Date(2020, 4, 26), '  ', ''],
     [new Date(2020, 4, 25), '  ', ''],
     [new Date(2020, 4, 24), '  ', ''],
      [new Date(2020, 4, 23), '  ', ''],
      [new Date(2020, 4, 22), '  ', ''],
      [new Date(2020, 4, 21), 'SUPPORT ', 'Ottawa announces another $75M in pandemic funding for Indigenous people living off-reserve.'],
      [new Date(2020, 4, 20), 'ECONOMY ', 'Inflation rate turned negative in April for first time since 2009'],
      [new Date(2020, 4, 20), 'SOCIAL ', 'Manitoba to allow gatherings of up to 50 people outdoors, 25 indoors'],
      [new Date(2020, 4, 19), 'VACCINE ', 'Health Canada approves first Covid-19 vaccine trials'],
      [new Date(2020, 4, 18), ' ', ' '],
      [new Date(2020, 4, 17), ' ', ' '],
      [new Date(2020, 4, 16), ' ', ' '],
      [new Date(2020, 4, 15), ' ', ' '],
      [new Date(2020, 4, 14), ' ', ' '],
      [new Date(2020, 4, 13), ' ', ' '],
      [new Date(2020, 4, 12), ' ', ' '],
      [new Date(2020, 4, 11), '', ''],
      [new Date(2020, 4, 11), 'NEWS', 'State of emergency to be pushed to June 2'],
      [new Date(2020, 4, 10), ' ', ' '],
      [new Date(2020, 4, 9), '', ' '],
      [new Date(2020, 4, 8), '', ''],
      [new Date(2020, 4, 7), '', ''],
      [new Date(2020, 4, 6), ' ', ' '],
      [new Date(2020, 4, 5), ' ', ' '],
      [new Date(2020, 4, 4), ' ', ' '],
      [new Date(2020, 4, 3), ' ', ' '],
      [new Date(2020, 4, 2), ' ', ' '],
      [new Date(2020, 4, 1), ' ', ' '],

      [new Date(2020, 3, 30), ' ', ' '],
      [new Date(2020, 3, 29), ' ', ' '],
      [new Date(2020, 3, 28), ' ', ' '],
      [new Date(2020, 3, 27), ' ', ' '],
      [new Date(2020, 3, 26), ' ', ' '],
      [new Date(2020, 3, 25), ' ', ' '],
      [new Date(2020, 3, 24), ' ', ' '],
      [new Date(2020, 3, 23), ' ', ' '],
      [new Date(2020, 3, 22), ' ', ' '],
      [new Date(2020, 3, 21), ' ', ' '],
      [new Date(2020, 3, 20), ' ', ' '],
      [new Date(2020, 3, 19), ' ', ' '],
      [new Date(2020, 3, 18), ' ', ' '],
      [new Date(2020, 3, 17), ' ', ' '],
      [new Date(2020, 3, 16), ' ', ' '],
      [new Date(2020, 3, 15), ' ', ' '],
      [new Date(2020, 3, 14), ' ', ' '],
      [new Date(2020, 3, 13), ' ', ' '],
      [new Date(2020, 3, 12), ' ', ' '],
      [new Date(2020, 3, 11), ' ', ' '],
      [new Date(2020, 3, 11), ' ', ' '],
      [new Date(2020, 3, 10), ' ', ' '],
      [new Date(2020, 3, 9), ' ', ' '],
      [new Date(2020, 3, 8), ' ', ' '],
      [new Date(2020, 3, 7), ' ', ' '],
      [new Date(2020, 3, 6), ' ', ' '],
      [new Date(2020, 3, 5), ' ', ' '],
      [new Date(2020, 3, 4), ' ', ' '],
      [new Date(2020, 3, 3), ' ', ' '],
      [new Date(2020, 3, 2), ' ', ' '],
      [new Date(2020, 3, 1), ' ', ' '],

      [new Date(2020, 2, 31), ' ', ' '],
      [new Date(2020, 2, 30), ' ', ' '],
      [new Date(2020, 2, 29), ' ', ' '],
      [new Date(2020, 2, 28), ' ', ' '],
      [new Date(2020, 2, 27), ' ', ' '],
      [new Date(2020, 2, 26), ' ', ' '],
      [new Date(2020, 2, 25), ' ', ' '],
      [new Date(2020, 2, 24), ' ', ' '],
      [new Date(2020, 2, 23), ' ', ' '],
      [new Date(2020, 2, 22), ' ', ' '],
      [new Date(2020, 2, 21), ' ', ' '],
      [new Date(2020, 2, 20), ' ', ' '],
      [new Date(2020, 2, 19), ' ', ' '],
      [new Date(2020, 2, 18), ' ', ' '],
      [new Date(2020, 2, 17), ' ', ' '],
      [new Date(2020, 2, 16), ' ', ' '],
      [new Date(2020, 2, 15), ' ', ' '],
      [new Date(2020, 2, 14), ' ', ' '],
      [new Date(2020, 2, 13), ' ', ' '],
      [new Date(2020, 2, 12), ' ', ' '],
      [new Date(2020, 2, 11), ' ', ' '],
      [new Date(2020, 2, 11), ' ', ' '],
      [new Date(2020, 2, 10), ' ', ' '],
      [new Date(2020, 2, 9), ' ', ' '],
      [new Date(2020, 2, 8), ' ', ' '],
      [new Date(2020, 2, 7), ' ', ' '],
      [new Date(2020, 2, 6), ' ', ' '],
      [new Date(2020, 2, 5), ' ', ' '],
      [new Date(2020, 2, 4), ' ', ' '],
      [new Date(2020, 2, 3), ' ', ' '],
      [new Date(2020, 2, 2), ' ', ' '],
      [new Date(2020, 2, 1), ' ', ' '],


      [new Date(2020, 1, 29), ' ', ' '],
      [new Date(2020, 1, 28), ' ', ' '],
      [new Date(2020, 1, 27), ' ', ' '],
      [new Date(2020, 1, 26), ' ', ' '],
      [new Date(2020, 1, 25), ' ', ' '],
      [new Date(2020, 1, 24), ' ', ' '],
      [new Date(2020, 1, 23), ' ', ' '],
      [new Date(2020, 1, 22), ' ', ' '],
      [new Date(2020, 1, 21), ' ', ' '],
      [new Date(2020, 1, 20), ' ', ' '],
      [new Date(2020, 1, 19), 'RECOVERED ', 'BC: Henry announces that the person diagnosed with B.C.’s first case of the new coronavirus has recovered. It’s the first time this has happened in the province. '],
      [new Date(2020, 1, 18), ' ', ' '],
      [new Date(2020, 1, 17), ' ', ' '],
      [new Date(2020, 1, 16), ' ', ' '],
      [new Date(2020, 1, 15), ' ', ' '],
      [new Date(2020, 1, 14), ' ', ' '],
      [new Date(2020, 1, 13), ' ', ' '],
      [new Date(2020, 1, 12), ' ', ' '],
      [new Date(2020, 1, 11), ' ', ' '],
      [new Date(2020, 1, 11), ' ', ' '],
      [new Date(2020, 1, 10), ' ', ' '],
      [new Date(2020, 1, 9), ' ', ' '],
      [new Date(2020, 1, 8), ' ', ' '],
      [new Date(2020, 1, 7), ' ', ' '],
      [new Date(2020, 1, 6), ' ', ' '],
      [new Date(2020, 1, 5), ' ', ' '],
      [new Date(2020, 1, 4), ' ', ' '],
      [new Date(2020, 1, 3), ' ', ' '],
      [new Date(2020, 1, 2), ' ', ' '],
      [new Date(2020, 1, 1), ' ', ' '],

      [new Date(2020, 0, 31), ' ', ' '],
      [new Date(2020, 0, 30), ' ', ' '],
      [new Date(2020, 0, 29), 'INFECTED ', 'BC 1st case: The presumed case of the new strain of coronavirus in B.C. is confirmed by the National Microbiology Laboratory in Winnipeg.'],
      [new Date(2020, 0, 28), 'INFECTED ', 'Canada 2nd case: Health authorities confirm Canada’s second case of the novel coronavirus. The woman had recently travelled to Wuhan with her husband, who was the first case confirmed in Canada.'],
      [new Date(2020, 0, 27), 'INFECTED ', 'Canada 1st case: The National Microbiology Lab in Winnipeg confirms that a man in quarantine in Sunnybrook Hospital is Canada’s first documented case of the new coronavirus. '],
      [new Date(2020, 0, 26), ' ', ' '],
      [new Date(2020, 0, 25), 'REPORT ', 'A man in his 50s who arrived in Toronto from Wuhan, China, the epicentre of the outbreak, becomes the first “presumptive” case of the new coronavirus in Canada. The man called 911 as soon as he got sick with relatively minor symptoms and was placed in isolation in Toronto’s Sunnybrook Hospital. '],

    ]);

   // Create three formatters in three styles.
   var formatter_long = new google.visualization.DateFormat({formatType: 'long'});

   // Reformat our data.
   formatter_long.format(data, 1);

   // Draw our data


   var table = new google.visualization.Table(document.getElementById('dateformat_div'));
   var options =
   {
     showRowNumber: false, allowHTML: true,
     allowHtml: true,
     width: '100%',
     height: '100%',
     page: 'enable',
     pageSize:'25',
     cssClassNames: {
       headerRow: 'headerRow',
       tableRow: 'tableRow',
       headerCell: 'headerCell',
       rowNumberCell: 'rowNumberCell'

     },
   };


   table.draw(data, options);
 }


  google.charts.load('current', {'packages':['table']});
   google.charts.setOnLoadCallback(drawDateFormatTable2);
  function drawDateFormatTable2() {
    var data = new google.visualization.DataTable();
     data.addColumn('date', 'DATE');
     data.addColumn('string', '');
    data.addRows([
      [new Date(2020, 5, 12), 'Canadian expert says he is confident COVID-19 vaccine is months, not years away (CP24)'],
      [new Date(2020, 5, 11), '  '],
      [new Date(2020, 5, 10), '  '],
      [new Date(2020, 5, 9), '  '],
      [new Date(2020, 5, 8), '  '],
      [new Date(2020, 5, 7), '  '],
      [new Date(2020, 5, 6), '  '],
      [new Date(2020, 5, 5), 'Chief Public Health Officer Dr. Theresa Tam has issued a clear warning that Canada could see “explosive growth” in new cases if reopening is not done with caution  '],
      [new Date(2020, 5, 4), '  '],
      [new Date(2020, 5, 3), "Anticipating 'mass vaccinations', Canada ordering millions of syringes  "],
      [new Date(2020, 5, 2), '  '],
      [new Date(2020, 5, 1), '  '],
      [new Date(2020, 4, 31), '  '],
      [new Date(2020, 4, 30), '  '],
      [new Date(2020, 4, 29), '  '],
      [new Date(2020, 4, 29), '  '],
      [new Date(2020, 4, 28), '  '],
      [new Date(2020, 4, 27), '  '],
      [new Date(2020, 4, 26), '  '],
      [new Date(2020, 4, 25), '  '],
      [new Date(2020, 4, 24), '  '],
      [new Date(2020, 4, 23), '  '],
      [new Date(2020, 4, 22), '  '],
      [new Date(2020, 4, 21), '  '],
      [new Date(2020, 4, 20), '  '],
      [new Date(2020, 4, 20), '  '],
      [new Date(2020, 4, 19), 'Health Canada approves first Covid-19 vaccine trials '],
      [new Date(2020, 4, 18), '  '],
      [new Date(2020, 4, 17), '  '],
      [new Date(2020, 4, 16), '  '],
      [new Date(2020, 4, 15), '  '],
      [new Date(2020, 4, 14), '  '],
      [new Date(2020, 4, 13), '  '],
      [new Date(2020, 4, 12), '  '],
      [new Date(2020, 4, 11), '  '],
      [new Date(2020, 4, 11), '  '],
      [new Date(2020, 4, 10), '  '],
      [new Date(2020, 4, 9), '  '],
      [new Date(2020, 4, 8), '  '],
      [new Date(2020, 4, 7), '  '],
      [new Date(2020, 4, 6), '  '],
      [new Date(2020, 4, 5), '  '],
      [new Date(2020, 4, 4), '  '],
      [new Date(2020, 4, 3), '  '],
      [new Date(2020, 4, 2), '  '],
      [new Date(2020, 4, 1), '  '],
      [new Date(2020, 3, 30), '  '],
      [new Date(2020, 3, 29), '  '],
      [new Date(2020, 3, 28), '  '],
      [new Date(2020, 3, 27), '  '],
      [new Date(2020, 3, 26), '  '],
      [new Date(2020, 3, 25), '  '],
      [new Date(2020, 3, 24), '  '],
      [new Date(2020, 3, 23), '  '],
      [new Date(2020, 3, 22), '  '],
      [new Date(2020, 3, 21), '  '],
      [new Date(2020, 3, 20), '  '],
      [new Date(2020, 3, 19), '  '],
      [new Date(2020, 3, 18), '  '],
      [new Date(2020, 3, 17), '  '],
      [new Date(2020, 3, 16), '  '],
      [new Date(2020, 3, 15), '  '],
      [new Date(2020, 3, 14), '  '],
      [new Date(2020, 3, 13), '  '],
      [new Date(2020, 3, 12), '  '],
      [new Date(2020, 3, 11), '  '],
      [new Date(2020, 3, 11), '  '],
      [new Date(2020, 3, 10), '  '],
      [new Date(2020, 3, 9), '  '],
      [new Date(2020, 3, 8), '  '],
      [new Date(2020, 3, 7), '  '],
      [new Date(2020, 3, 6), '  '],
      [new Date(2020, 3, 5), '  '],
      [new Date(2020, 3, 4), '  '],
      [new Date(2020, 3, 3), '  '],
      [new Date(2020, 3, 2), '  '],
      [new Date(2020, 3, 1), '  '],

      [new Date(2020, 2, 31), '  '],
      [new Date(2020, 2, 30), '  '],
      [new Date(2020, 2, 29), '  '],
      [new Date(2020, 2, 28), '  '],
      [new Date(2020, 2, 27), '  '],
      [new Date(2020, 2, 26), '  '],
      [new Date(2020, 2, 25), '  '],
      [new Date(2020, 2, 24), '  '],
      [new Date(2020, 2, 23), '  '],
      [new Date(2020, 2, 22), '  '],
      [new Date(2020, 2, 21), '  '],
      [new Date(2020, 2, 20), '  '],
      [new Date(2020, 2, 19), '  '],
      [new Date(2020, 2, 18), '  '],
      [new Date(2020, 2, 17), '  '],
      [new Date(2020, 2, 16), '  '],
      [new Date(2020, 2, 15), '  '],
      [new Date(2020, 2, 14), '  '],
      [new Date(2020, 2, 13), '  '],
      [new Date(2020, 2, 12), '  '],
      [new Date(2020, 2, 11), '  '],
      [new Date(2020, 2, 11), '  '],
      [new Date(2020, 2, 10), '  '],
      [new Date(2020, 2, 9), '  '],
      [new Date(2020, 2, 8), '  '],
      [new Date(2020, 2, 7), '  '],
      [new Date(2020, 2, 6), '  '],
      [new Date(2020, 2, 5), '  '],
      [new Date(2020, 2, 4), '  '],
      [new Date(2020, 2, 3), '  '],
      [new Date(2020, 2, 2), '  '],
      [new Date(2020, 2, 1), '  '],


      [new Date(2020, 1, 29), '  '],
      [new Date(2020, 1, 28), '  '],
      [new Date(2020, 1, 27), '  '],
      [new Date(2020, 1, 26), '  '],
      [new Date(2020, 1, 25), '  '],
      [new Date(2020, 1, 24), '  '],
      [new Date(2020, 1, 23), '  '],
      [new Date(2020, 1, 22), '  '],
      [new Date(2020, 1, 21), '  '],
      [new Date(2020, 1, 20), '  '],
      [new Date(2020, 1, 19), '  '],
      [new Date(2020, 1, 18), '  '],
      [new Date(2020, 1, 17), '  '],
      [new Date(2020, 1, 16), '  '],
      [new Date(2020, 1, 15), '  '],
      [new Date(2020, 1, 14), '  '],
      [new Date(2020, 1, 13), '  '],
      [new Date(2020, 1, 12), '  '],
      [new Date(2020, 1, 11), '  '],
      [new Date(2020, 1, 11), '  '],
      [new Date(2020, 1, 10), '  '],
      [new Date(2020, 1, 9), '  '],
      [new Date(2020, 1, 8), '  '],
      [new Date(2020, 1, 7), '  '],
      [new Date(2020, 1, 6), '  '],
      [new Date(2020, 1, 5), '  '],
      [new Date(2020, 1, 4), '  '],
      [new Date(2020, 1, 3), '  '],
      [new Date(2020, 1, 2), '  '],
      [new Date(2020, 1, 1), '  '],

      [new Date(2020, 0, 31), '  '],
      [new Date(2020, 0, 30), '  '],
      [new Date(2020, 0, 29), '  '],
      [new Date(2020, 0, 28),'  '],
      [new Date(2020, 0, 26), '  '],
      [new Date(2020, 0, 25), '  '],

    ]);

    // Create three formatters in three styles.
    var formatter_long = new google.visualization.DateFormat({formatType: 'long'});

    // Reformat our data.
    formatter_long.format(data, 1);

    // Draw our data


    var table = new google.visualization.Table(document.getElementById('dateformat_div-2'));
    var options =
    {
      showRowNumber: false, allowHTML: true,
      allowHtml: true,
      width: '100%',
      height: '100%',
      page: 'enable',
      pageSize:'25',
      cssClassNames: {
        headerRow: 'headerRow',
        tableRow: 'tableRow',
        headerCell: 'headerCell',
        rowNumberCell: 'rowNumberCell'

      },
    };


    table.draw(data, options);
  }

  google.charts.load('current', {'packages':['table']});
   google.charts.setOnLoadCallback(drawDateFormatTable3);
  function drawDateFormatTable3() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Company');
     data.addColumn('string', 'Trial Name');
     data.addColumn('string', 'Title');
      data.addColumn('string', 'Interventions');
      data.addColumn('date', 'Date');
      data.addColumn('string', 'Trial Link');
    data.addRows([
      ['Canadian Medical and Surgical Knowledge Translation Research  ','VASCEPA -COVID-19 CARDIOLINK-9 Control #239025', 'An Investigation on the Effects of Icosapent Ethyl (Vascepa™) on Inflammatory Biomarkers in Individuals with COVID-19 Cardiolink-9  ', 'icosapent (Vascepa™)',  new Date(2020, 4, 8), 'N/A'],
      ['University Health Network  ','U-DEPLOY (OZUHN-001/ Sub-protocol # OZUHN-001-2)(Control # 237848)', 'Umbrella Trial Defining Coordinated Approach to Pandemic Trials of COVID-19 and Data Harmonization to Accelerate Discovery ', 'ruxolitinib',  new Date(2020, 3, 7), 'NCT04331665'],
      ['Sanofi-Aventis Recherche & Développement ', 'SAR153191 (Control # 237332) ', 'The multi-center, double-blind, Phase 2/3 trial has an adaptive design phase 2/3 CT proposed for affected patients with serious lung inflammation treatment Kevzara®', 'Kevzara® (sarilumab) ',  new Date(2020, 4, 24), 'NCT04315298'],
      ['Dr. Lisa Barrett ', 'SAIL-004 (Control # 237708)', 'Assessment of Investigational Medications adjunct to Clinical Standard of Care for Treatment of Moderate to Severe Coronavirus Disease (COVID-19) ', 'lopinavir/ritonavir hydroxychloroquine sarilumab baricitinib ', new Date(2020, 3, 14), 'NCT04321993'],
      //[' ', ' ', ' ', ' ', new Date(2020, 4, 7), ' '],

    ]);

    // Create three formatters in three styles.
    var formatter_long = new google.visualization.DateFormat({formatType: 'long'});

    // Reformat our data.
    formatter_long.format(data, 1);

    // Draw our data


    var table = new google.visualization.Table(document.getElementById('dateformat_div-3'));
    var options =
    {
      showRowNumber: false, allowHTML: true,
      allowHtml: true,
      width: '100%',
      height: '100%',
      page: 'enable',
      pageSize:'25',
      cssClassNames: {
        headerRow: 'headerRow',
        tableRow: 'tableRow',
        headerCell: 'headerCell',
        rowNumberCell: 'rowNumberCell',
        hoverTableRow: 'hoverTableRow'

      },
    };


    table.draw(data, options);
  }
