// World geo chart - Pie Chart - Bar Chart

google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Province', 'Infected'],
          ['CA-ON', ontarioInfected],
          ['CA-PE', pieInfected],
          ['CA-NL', newfoundlandInfected],
          ['CA-NS', novaScotiaInfected],
          ['CA-NB', newBrunswickInfected],
          ['CA-QC', quebecInfected],
          ['CA-MB', manitobaInfected],
          ['CA-SK', saskatchewanInfected],
          ['CA-AB', albertaInfected],
          ['CA-BC', britishColumbiaInfected],
          ['CA-YT', yukonInfected],
          ['CA-NT', northwestTerritoriesInfected],
          ['CA-NU	', nunavutInfected]

        ]);

        var options = {
        sizeAxis: { minValue: 0, maxValue: 100000 },
        region: 'CA',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['lightgrey', '#59748E']}
      };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }





      google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Title', 'Stats'],
         ['Deaths',      deaths],
         ['Recovered',   recovered],
         ['Active',   active]
        ]);

       var options = {
         title: '',
         pieHole: 0.4,
         slices: {
             0: { color: '#FF4C4C' },
             1: { color: '#759785' },
             3: { color: '#F4B400' }
           }
       };

       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
       chart.draw(data, options);
     }


     google.charts.load('current', {'packages':['bar']});
           google.charts.setOnLoadCallback(drawChart2);

           function drawChart2() {
             var data = google.visualization.arrayToDataTable([
               ['Month', 'Infected ', 'Deaths', 'Recovered'],
               ['Feb',  20,      0,      0],
               ['Mar',  8592,      101,      1242],
               ['Apr',  45782,       3202,      20181],
               ['May',  38085,       4071,      27834],
               ['Jun',  (confirmed - 92479),      (deaths - 7374),     (recovered - 49257)]
             ]);

             var options = {
               chart: {

               },
               colors: ['#59748E', '#FF4C4C', '#759785'],
               legend: {
              position: 'bottom', alignment: 'start' },
               bars: 'vertical' // Required for Material Bar Charts.
             };


             var chart = new google.charts.Bar(document.getElementById('barchart_material'));

             chart.draw(data, google.charts.Bar.convertOptions(options));
           }

           $(window).resize(function(){
             drawChart();
             drawChart2();
             drawRegionsMap();
           });
