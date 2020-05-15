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
          ['CA-ON', ontario],
          ['CA-PE', pe],
          ['CA-NL', newfoundland],
          ['CA-NS', nova],
          ['CA-NB', newbuns],
          ['CA-QC', quebec],
          ['CA-MB', manatoba],
          ['CA-SK', saka],
          ['CA-AB', alberta],
          ['CA-BC', bc],
          ['CA-YT', yukon],
          ['CA-NT', nt],
          ['CA-NU	', nu]

        ]);

        var options = {
        sizeAxis: { minValue: 0, maxValue: 100000 },
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
         slices: {
             0: { color: '#DB4437' },
             1: { color: '#0F9D58' },
             2: { color: '#4285F4' },
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

           $(window).resize(function(){
             drawChart();
             drawChart2();
             drawRegionsMap();
           });
