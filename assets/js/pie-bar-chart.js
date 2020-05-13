var deaths = 5298;
var confirmed = 72362;
var recovered = 34042;
var active = 33022;




      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawCharts);
      function drawCharts() {

        // BEGIN BAR CHART

        // create zero data so the bars will 'grow'
        var barZeroData = google.visualization.arrayToDataTable([
          ['Day', 'Page Views', 'Unique Views'],
          ['Sun',  0,      0],
          ['Mon',  0,      0],
          ['Tue',  0,      0],
          ['Wed',  0,      0],
          ['Thu',  0,      0],
          ['Fri',  0,      0],
          ['Sat',  0,      0]
        ]);

        // actual bar chart data
        var barData = google.visualization.arrayToDataTable([
          ['Month', 'Infected', 'Deaths', 'Recovered'],
          ['Feb',  20,      0,      0],
          ['Mar',  8592,      101,      1242],
          ['Apr',  45782,       3202,      20181],
          ['May',  16813,      2013,      10673]
        ]);
        // set bar chart options
        var barOptions = {
          focusTarget: 'category',
          backgroundColor: 'transparent',
          colors: ['cornflowerblue', '#DB4437', '#0F9D58'],
          fontName: 'Open Sans',
          chartArea: {
            left: 70,
            top: 10,
            width: '55%',
            height: '55%'
          },
          bar: {
            groupWidth: '50%'
          },
          hAxis: {
            textStyle: {
              fontSize: 11
            }
          },

          vAxis: {
            minValue: 0,
            maxValue: 1500,
            baselineColor: '#DDD',
            gridlines: {
              color: '#DDD',
              count: 4
            },
            textStyle: {
              fontSize: 11
            }
          },
          legend: {
            position: 'bottom',
            textStyle: {
              fontSize: 8
            }
          },
          animation: {
            duration: 1200,
            easing: 'out',
            startup: true
          }
        };
        // draw bar chart twice so it animates
        var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
        //barChart.draw(barZeroData, barOptions);
        barChart.draw(barData, barOptions);



    // BEGIN PIE CHART

        // pie chart data
        var pieData = google.visualization.arrayToDataTable([
          ['Title', 'Stats'],
          ['Deaths',      deaths],
          ['Recovered',   recovered],
          ['Infected',   confirmed],
          ['Active',   active]
         ]);
        // pie chart options
        var pieOptions = {
          backgroundColor: 'transparent',
          pieHole: 0.2,
          colors: [ "tomato",
                    "olivedrab",
                    "orange",
                    "navy",
                    "forestgreen",
                    "purple",
                    "turquoise",
                    "forestgreen",
                    "navy",
                    "gray"],
          pieSliceText: 'value',
          tooltip: {
            text: 'percentage'
          },
          fontName: 'Open Sans',
          chartArea: {
            width: '100px',
            height: '50px'
          },
          legend: {
            textStyle: {
              fontSize: 12

            }
          }
        };
        // draw pie chart
        var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
        pieChart.draw(pieData, pieOptions);
      }
