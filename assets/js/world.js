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
          ['CA-ON', 22158],
          ['CA-PE', 0],
          ['CA-NL', 261],
          ['CA-NS', 1020],
          ['CA-NB', 120],
          ['CA-QC', 39235],
          ['CA-MB', 290],
          ['CA-SK', 573],
          ['CA-AB', 6345],
          ['CA-BC', 2360],
          ['CA-YT', 0],
          ['CA-NT', 0],
          ['CA-NU	', 0]
        ]);

        var options = {
        region: 'CA',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['#FFE5E5', 'darkred']}
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
         ['Infected',   confirmed],
         ['Active',   active]
        ]);

       var options = {
         title: '',
         pieHole: 0.4,
       };

       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
       chart.draw(data, options);
     }


     google.charts.load('current', {'packages':['bar']});
           google.charts.setOnLoadCallback(drawChart2);

           function drawChart2() {
             var data = google.visualization.arrayToDataTable([
               ['Month', 'Infected', 'Deaths', 'Recovered'],
               ['Feb',  20,      0,      0],
               ['Mar',  8592,      101,      1242],
               ['Apr',  45782,       3202,      20181],
               ['May',  (confirmed - 54394),      (deaths - 3303),      (recovered - 21423)]
             ]);

             var options = {
               chart: {

               },
               legend: {
              position: 'top', alignment: 'start' },
               bars: 'vertical' // Required for Material Bar Charts.
             };


             var chart = new google.charts.Bar(document.getElementById('barchart_material'));

             chart.draw(data, google.charts.Bar.convertOptions(options));
           }
