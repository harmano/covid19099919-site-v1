// .................................................. Infected ................................ //
google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', 'Infected');
    data.addRows([
      [new Date (2020, 0, 27), 1],
      [new Date (2020, 0, 28), 2],
      [new Date (2020, 0, 29), 2],
      [new Date (2020, 0, 30), 2],
      [new Date (2020, 0, 31), 4],
      [new Date (2020, 1, 1), 4],
      [new Date (2020, 1, 2), 4],
      [new Date (2020, 1, 3), 4],
      [new Date (2020, 1, 4), 4],
      [new Date (2020, 1, 5), 5],
      [new Date (2020, 1, 6), 5],
      [new Date (2020, 1, 7), 7],
      [new Date (2020, 1, 8), 7],
      [new Date (2020, 1, 9), 7],
      [new Date (2020, 1, 10), 7],
      [new Date (2020, 1, 11), 7],
      [new Date (2020, 1, 12), 7],
      [new Date (2020, 1, 13), 7],
      [new Date (2020, 1, 14), 7],
      [new Date (2020, 1, 15), 7],
      [new Date (2020, 1, 16), 7],
      [new Date (2020, 1, 17), 8],
      [new Date (2020, 1, 18), 8],
      [new Date (2020, 1, 19), 8],
      [new Date (2020, 1, 20), 8],
      [new Date (2020, 1, 21), 9],
      [new Date (2020, 1, 22), 9],
      [new Date (2020, 1, 23), 9],
      [new Date (2020, 1, 24), 10],
      [new Date (2020, 1, 25), 11],
      [new Date (2020, 1, 26), 11],
      [new Date (2020, 1, 27), 13],
      [new Date (2020, 1, 28), 15],
      [new Date (2020, 1, 29), 20],
      [new Date (2020, 2, 1), 24],
      [new Date (2020, 2, 2), 27],
      [new Date (2020, 2, 3), 29],
      [new Date (2020, 2, 4), 33],
      [new Date (2020, 2, 5), 37],
      [new Date (2020, 2, 6), 49],
      [new Date (2020, 2, 7), 54],
      [new Date (2020, 2, 8), 64],
      [new Date (2020, 2, 9), 109],
      [new Date (2020, 2, 10), 109],
      [new Date (2020, 2, 11), 109],
      [new Date (2020, 2, 12), 117],
      [new Date (2020, 2, 13), 117],
      [new Date (2020, 2, 14), 243],
      [new Date (2020, 2, 15), 301],
      [new Date (2020, 2, 16), 422],
      [new Date (2020, 2, 17), 598],
      [new Date (2020, 2, 18), 727],
      [new Date (2020, 2, 19), 873],
      [new Date (2020, 2, 20), 1077],
      [new Date (2020, 2, 21), 1328],
      [new Date (2020, 2, 22), 1470],
      [new Date (2020, 2, 23), 2091],
      [new Date (2020, 2, 24), 2792],
      [new Date (2020, 2, 25), 3409],
      [new Date (2020, 2, 26), 4043],
      [new Date (2020, 2, 27), 4757],
      [new Date (2020, 2, 28), 5655],
      [new Date (2020, 2, 29), 6280],
      [new Date (2020, 2, 30), 7448],
      [new Date (2020, 2, 31), 8612],
      [new Date (2020, 3, 1), 9731],
      [new Date (2020, 3, 2), 11283],
      [new Date (2020, 3, 3), 12416],
      [new Date (2020, 3, 4), 13912],
      [new Date (2020, 3, 5), 15733],
      [new Date (2020, 3, 6), 16667],
      [new Date (2020, 3, 7), 17897],
      [new Date (2020, 3, 8), 19438],
      [new Date (2020, 3, 9), 20765],
      [new Date (2020, 3, 10), 22148],
      [new Date (2020, 3, 11), 23318],
      [new Date (2020, 3, 12), 24383],
      [new Date (2020, 3, 13), 25680],
      [new Date (2020, 3, 14), 26897],
      [new Date (2020, 3, 15), 28379],
      [new Date (2020, 3, 16), 30757],
      [new Date (2020, 3, 17), 32762],
      [new Date (2020, 3, 18), 34303],
      [new Date (2020, 3, 19), 35056],
      [new Date (2020, 3, 20), 37603],
      [new Date (2020, 3, 21), 39347],
      [new Date (2020, 3, 22), 41608],
      [new Date (2020, 3, 23), 43212],
      [new Date (2020, 3, 24), 44484],
      [new Date (2020, 3, 25), 46298],
      [new Date (2020, 3, 26), 47101],
      [new Date (2020, 3, 27), 49501],
      [new Date (2020, 3, 28), 51090],
      [new Date (2020, 3, 29), 52775],
      [new Date (2020, 3, 30), 54373],
      [new Date (2020, 4, 1), 56282],
      [new Date (2020, 4, 2), 57869],
      [new Date (2020, 4, 3), 60446],
      [new Date (2020, 4, 4), 61897],
      [new Date (2020, 4, 5), 63150],
      [new Date (2020, 4, 6), 64363],
      [new Date (2020, 4, 7), 66111],
      [new Date (2020, 4, 8), 67569],
      [new Date (2020, 4, 9), 68861],
      [new Date (2020, 4, 10), 70034],
      [new Date (2020, 4, 11), 71207],
      [new Date (2020, 4, 12), 72363],
      [new Date (2020, 4, 13), 73506],
      [new Date (2020, 4, 14), 74055],
      [new Date (2020, 4, 15), 75035]
    ]);

    var tickMarks = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
      tickMarks.push(data.getValue(i, 0));
    }

    var options = {
      chart: {
        title: 'Infection History',
      },
      legend: { position:'none' },
      width: '100%',
      pointSize: 10,
      explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
      hAxis: {
        format: 'MM/dd/yyyy',
        ticks: tickMarks
      },
      curveType: 'function',
      colors:['#4285F4']
    };


        var chart = new google.charts.Line(document.getElementById('linechart_material'));
        chart.draw(data, google.charts.Line.convertOptions(options));

  },
  packages: ['corechart', 'line']
});

// .................................................. Recovered ................................ //
google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', 'Recovered');
    data.addRows([
      [new Date (2020, 0, 27), 0],
      [new Date (2020, 0, 28), 0],
      [new Date (2020, 0, 29), 0],
      [new Date (2020, 0, 30), 0],
      [new Date (2020, 0, 31), 0],
      [new Date (2020, 1, 1), 0],
      [new Date (2020, 1, 2), 0],
      [new Date (2020, 1, 3), 0],
      [new Date (2020, 1, 4), 0],
      [new Date (2020, 1, 5), 0],
      [new Date (2020, 1, 6), 0],
      [new Date (2020, 1, 7), 0],
      [new Date (2020, 1, 8), 0],
      [new Date (2020, 1, 9), 0],
      [new Date (2020, 1, 10), 0],
      [new Date (2020, 1, 11), 0],
      [new Date (2020, 1, 12), 1],
      [new Date (2020, 1, 13), 1],
      [new Date (2020, 1, 14), 1],
      [new Date (2020, 1, 15), 1],
      [new Date (2020, 1, 16), 1],
      [new Date (2020, 1, 17), 1],
      [new Date (2020, 1, 18), 1],
      [new Date (2020, 1, 19), 1],
      [new Date (2020, 1, 20), 1],
      [new Date (2020, 1, 21), 3],
      [new Date (2020, 1, 22), 3],
      [new Date (2020, 1, 23), 3],
      [new Date (2020, 1, 24), 3],
      [new Date (2020, 1, 25), 3],
      [new Date (2020, 1, 26), 3],
      [new Date (2020, 1, 27), 6],
      [new Date (2020, 1, 28), 6],
      [new Date (2020, 1, 29), 6],
      [new Date (2020, 2, 1), 6],
      [new Date (2020, 2, 2), 6],
      [new Date (2020, 2, 3), 6],
      [new Date (2020, 2, 4), 6],
      [new Date (2020, 2, 5), 6],
      [new Date (2020, 2, 6), 6],
      [new Date (2020, 2, 7), 8],
      [new Date (2020, 2, 8), 8],
      [new Date (2020, 2, 9), 8],
      [new Date (2020, 2, 10), 8],
      [new Date (2020, 2, 11), 8],
      [new Date (2020, 2, 12), 8],
      [new Date (2020, 2, 13), 8],
      [new Date (2020, 2, 14), 8],
      [new Date (2020, 2, 15), 8],
      [new Date (2020, 2, 16), 8],
      [new Date (2020, 2, 17), 11],
      [new Date (2020, 2, 18), 1],
      [new Date (2020, 2, 19), 11],
      [new Date (2020, 2, 20), 14],
      [new Date (2020, 2, 21), 14],
      [new Date (2020, 2, 22), 14],
      [new Date (2020, 2, 23), 112],
      [new Date (2020, 2, 24), 112],
      [new Date (2020, 2, 25), 185],
      [new Date (2020, 2, 26), 228],
      [new Date (2020, 2, 27), 354],
      [new Date (2020, 2, 28), 396],
      [new Date (2020, 2, 29), 573],
      [new Date (2020, 2, 30), 1093],
      [new Date (2020, 2, 31), 1242],
      [new Date (2020, 3, 1), 1736],
      [new Date (2020, 3, 2), 1979],
      [new Date (2020, 3, 3), 2186],
      [new Date (2020, 3, 4), 2595],
      [new Date (2020, 3, 5), 2942],
      [new Date (2020, 3, 6), 3616],
      [new Date (2020, 3, 7), 4028],
      [new Date (2020, 3, 8), 4548],
      [new Date (2020, 3, 9), 5311],
      [new Date (2020, 3, 10), 6013],
      [new Date (2020, 3, 11), 6428],
      [new Date (2020, 3, 12), 7172],
      [new Date (2020, 3, 13), 7756],
      [new Date (2020, 3, 14), 8172],
      [new Date (2020, 3, 15), 8937],
      [new Date (2020, 3, 16), 9674],
      [new Date (2020, 3, 17), 10328],
      [new Date (2020, 3, 18), 11207],
      [new Date (2020, 3, 19), 11843],
      [new Date (2020, 3, 20), 12586],
      [new Date (2020, 3, 21), 13188],
      [new Date (2020, 3, 22), 13986],
      [new Date (2020, 3, 23), 14761],
      [new Date (2020, 3, 24), 15469],
      [new Date (2020, 3, 25), 16425],
      [new Date (2020, 3, 26), 17321],
      [new Date (2020, 3, 27), 18215],
      [new Date (2020, 3, 28), 19190],
      [new Date (2020, 3, 29), 20327],
      [new Date (2020, 3, 30), 21423],
      [new Date (2020, 4, 1), 22751],
      [new Date (2020, 4, 2), 23801],
      [new Date (2020, 4, 3), 24908],
      [new Date (2020, 4, 4), 25422],
      [new Date (2020, 4, 5), 26938],
      [new Date (2020, 4, 6), 27816],
      [new Date (2020, 4, 7), 28972],
      [new Date (2020, 4, 8), 30406],
      [new Date (2020, 4, 9), 31249],
      [new Date (2020, 4, 10), 32096],
      [new Date (2020, 4, 11), 32994],
      [new Date (2020, 4, 12), 34042],
      [new Date (2020, 4, 13), 35164],
      [new Date (2020, 4, 14), 36091],
      [new Date (2020, 4, 15), 36895]
    ]);

    var tickMarks = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
      tickMarks.push(data.getValue(i, 0));
    }

    var options = {
      chart: {
        title: 'Recovery History',
      },
      legend: { position:'none' },
      width: '100%',
      pointSize: 10,
      explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
      hAxis: {
        format: 'MM/dd/yyyy',
        ticks: tickMarks
      },
      curveType: 'function',
      colors:['#0F9D58']
    };

        var chart = new google.charts.Line(document.getElementById('rercovered_line_chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));

  },
  packages: ['corechart', 'line']
});

// .................................................. Deaths ................................ //
google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', 'Deaths');
    data.addRows([
      [new Date (2020, 0, 27), 0],
      [new Date (2020, 0, 28), 0],
      [new Date (2020, 0, 29), 0],
      [new Date (2020, 0, 30), 0],
      [new Date (2020, 0, 31), 0],
      [new Date (2020, 1, 1), 0],
      [new Date (2020, 1, 2), 0],
      [new Date (2020, 1, 3), 0],
      [new Date (2020, 1, 4), 0],
      [new Date (2020, 1, 5), 0],
      [new Date (2020, 1, 6), 0],
      [new Date (2020, 1, 7), 0],
      [new Date (2020, 1, 8), 0],
      [new Date (2020, 1, 9), 0],
      [new Date (2020, 1, 10), 0],
      [new Date (2020, 1, 11), 0],
      [new Date (2020, 1, 12), 0],
      [new Date (2020, 1, 13), 0],
      [new Date (2020, 1, 14), 0],
      [new Date (2020, 1, 15), 0],
      [new Date (2020, 1, 16), 0],
      [new Date (2020, 1, 17), 0],
      [new Date (2020, 1, 18), 0],
      [new Date (2020, 1, 19), 0],
      [new Date (2020, 1, 20), 0],
      [new Date (2020, 1, 21), 0],
      [new Date (2020, 1, 22), 0],
      [new Date (2020, 1, 23), 0],
      [new Date (2020, 1, 24), 0],
      [new Date (2020, 1, 25), 0],
      [new Date (2020, 1, 26), 0],
      [new Date (2020, 1, 27), 0],
      [new Date (2020, 1, 28), 0],
      [new Date (2020, 1, 29), 0],
      [new Date (2020, 2, 1), 0],
      [new Date (2020, 2, 2), 0],
      [new Date (2020, 2, 3), 0],
      [new Date (2020, 2, 4), 0],
      [new Date (2020, 2, 5), 0],
      [new Date (2020, 2, 6), 0],
      [new Date (2020, 2, 7), 0],
      [new Date (2020, 2, 8), 0],
      [new Date (2020, 2, 9), 0],
      [new Date (2020, 2, 10), 0],
      [new Date (2020, 2, 11), 1],
      [new Date (2020, 2, 12), 1],
      [new Date (2020, 2, 13), 1],
      [new Date (2020, 2, 14), 1],
      [new Date (2020, 2, 15), 1],
      [new Date (2020, 2, 16), 4],
      [new Date (2020, 2, 17), 8],
      [new Date (2020, 2, 18), 8],
      [new Date (2020, 2, 19), 12],
      [new Date (2020, 2, 20), 12],
      [new Date (2020, 2, 21), 19],
      [new Date (2020, 2, 22), 21],
      [new Date (2020, 2, 23), 24],
      [new Date (2020, 2, 24), 26],
      [new Date (2020, 2, 25), 36],
      [new Date (2020, 2, 26), 39],
      [new Date (2020, 2, 27), 55],
      [new Date (2020, 2, 28), 60],
      [new Date (2020, 2, 29), 65],
      [new Date (2020, 2, 30), 89],
      [new Date (2020, 2, 31), 101],
      [new Date (2020, 3, 1), 114],
      [new Date (2020, 3, 2), 173],
      [new Date (2020, 3, 3), 208],
      [new Date (2020, 3, 4), 231],
      [new Date (2020, 3, 5), 280],
      [new Date (2020, 3, 6), 338],
      [new Date (2020, 3, 7), 381],
      [new Date (2020, 3, 8), 427],
      [new Date (2020, 3, 9), 509],
      [new Date (2020, 3, 10), 569],
      [new Date (2020, 3, 11), 653],
      [new Date (2020, 3, 12), 717],
      [new Date (2020, 3, 13), 780],
      [new Date (2020, 3, 14), 898],
      [new Date (2020, 3, 15), 1010],
      [new Date (2020, 3, 16), 1258],
      [new Date (2020, 3, 17), 1355],
      [new Date (2020, 3, 18), 1470],
      [new Date (2020, 3, 19), 1587],
      [new Date (2020, 3, 20), 1726],
      [new Date (2020, 3, 21), 1909],
      [new Date (2020, 3, 22), 2077],
      [new Date (2020, 3, 23), 2238],
      [new Date (2020, 3, 24), 2385],
      [new Date (2020, 3, 25), 2562],
      [new Date (2020, 3, 26), 2662],
      [new Date (2020, 3, 27), 2835],
      [new Date (2020, 3, 28), 2980],
      [new Date (2020, 3, 29), 3151],
      [new Date (2020, 3, 30), 3303],
      [new Date (2020, 4, 1), 3536],
      [new Date (2020, 4, 2), 3683],
      [new Date (2020, 4, 3), 3784],
      [new Date (2020, 4, 4), 4002],
      [new Date (2020, 4, 5), 4185],
      [new Date (2020, 4, 6), 4365],
      [new Date (2020, 4, 7), 4538],
      [new Date (2020, 4, 8), 4693],
      [new Date (2020, 4, 9), 4822],
      [new Date (2020, 4, 10), 4990],
      [new Date (2020, 4, 11), 5114],
      [new Date (2020, 4, 12), 5298],
      [new Date (2020, 4, 13), 5424],
      [new Date (2020, 4, 14), 5581],
      [new Date (2020, 4, 15), 5647]
    ]);

    var tickMarks = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
      tickMarks.push(data.getValue(i, 0));
    }

    var options = {
      chart: {
        title: 'Deaths History',
      },
      legend: { position:'none' },
      width: '100%',
      pointSize: 10,
      explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
      hAxis: {
        format: 'MM/dd/yyyy',
        ticks: tickMarks
      },
      curveType: 'function',
      colors:['#DB4437']
    };



        var chart = new google.charts.Line(document.getElementById('deaths_line_chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));


  },
  packages: ['corechart', 'line']
});


// .................................................. Daily Change ................................ //
google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', 'Daily Infection');
    data.addRows([
      [new Date (2020, 0, 27), 1],
      [new Date (2020, 0, 28), 1],
      [new Date (2020, 0, 29), 0],
      [new Date (2020, 0, 30), 0],
      [new Date (2020, 0, 31), 2],
      [new Date (2020, 1, 1), 0],
      [new Date (2020, 1, 2), 0],
      [new Date (2020, 1, 3), 0],
      [new Date (2020, 1, 4), 0],
      [new Date (2020, 1, 5), 1],
      [new Date (2020, 1, 6), 0],
      [new Date (2020, 1, 7), 2],
      [new Date (2020, 1, 8), 0],
      [new Date (2020, 1, 9), 0],
      [new Date (2020, 1, 10), 0],
      [new Date (2020, 1, 11), 0],
      [new Date (2020, 1, 12), 0],
      [new Date (2020, 1, 13), 0],
      [new Date (2020, 1, 14), 0],
      [new Date (2020, 1, 15), 0],
      [new Date (2020, 1, 16), 0],
      [new Date (2020, 1, 17), 1],
      [new Date (2020, 1, 18), 0],
      [new Date (2020, 1, 19), 0],
      [new Date (2020, 1, 20), 0],
      [new Date (2020, 1, 21), 1],
      [new Date (2020, 1, 22), 0],
      [new Date (2020, 1, 23), 0],
      [new Date (2020, 1, 24), 1],
      [new Date (2020, 1, 25), 1],
      [new Date (2020, 1, 26), 0],
      [new Date (2020, 1, 27), 2],
      [new Date (2020, 1, 28), 2],
      [new Date (2020, 1, 29), 5],
      [new Date (2020, 2, 1), 4],
      [new Date (2020, 2, 2), 3],
      [new Date (2020, 2, 3), 2],
      [new Date (2020, 2, 4), 4],
      [new Date (2020, 2, 5), 4],
      [new Date (2020, 2, 6), 12],
      [new Date (2020, 2, 7), 5],
      [new Date (2020, 2, 8), 10],
      [new Date (2020, 2, 9), 45],
      [new Date (2020, 2, 10), 0],
      [new Date (2020, 2, 11), 38],
      [new Date (2020, 2, 12), 9],
      [new Date (2020, 2, 13), 0],
      [new Date (2020, 2, 14), 134],
      [new Date (2020, 2, 15), 58],
      [new Date (2020, 2, 16), 121],
      [new Date (2020, 2, 17), 176],
      [new Date (2020, 2, 18), 129],
      [new Date (2020, 2, 19), 146],
      [new Date (2020, 2, 20), 204],
      [new Date (2020, 2, 21), 251],
      [new Date (2020, 2, 22), 142],
      [new Date (2020, 2, 23), 621],
      [new Date (2020, 2, 24), 701],
      [new Date (2020, 2, 25), 617],
      [new Date (2020, 2, 26), 634],
      [new Date (2020, 2, 27), 714],
      [new Date (2020, 2, 28), 898],
      [new Date (2020, 2, 29), 625],
      [new Date (2020, 2, 30), 1168],
      [new Date (2020, 2, 31), 1164],
      [new Date (2020, 3, 1), 1119],
      [new Date (2020, 3, 2), 1552],
      [new Date (2020, 3, 3), 1133],
      [new Date (2020, 3, 4), 1496],
      [new Date (2020, 3, 5), 1821],
      [new Date (2020, 3, 6), 934],
      [new Date (2020, 3, 7), 1230],
      [new Date (2020, 3, 8), 1541],
      [new Date (2020, 3, 9), 1327],
      [new Date (2020, 3, 10), 1383],
      [new Date (2020, 3, 11), 1170],
      [new Date (2020, 3, 12), 1065],
      [new Date (2020, 3, 13), 1297],
      [new Date (2020, 3, 14), 1217],
      [new Date (2020, 3, 15), 1428],
      [new Date (2020, 3, 16), 2378],
      [new Date (2020, 3, 17), 2005],
      [new Date (2020, 3, 18), 1541],
      [new Date (2020, 3, 19), 753],
      [new Date (2020, 3, 20), 2547],
      [new Date (2020, 3, 21), 1744],
      [new Date (2020, 3, 22), 2261],
      [new Date (2020, 3, 23), 1604],
      [new Date (2020, 3, 24), 1272],
      [new Date (2020, 3, 25), 1814],
      [new Date (2020, 3, 26), 803],
      [new Date (2020, 3, 27), 2400],
      [new Date (2020, 3, 28), 1589],
      [new Date (2020, 3, 29), 1685],
      [new Date (2020, 3, 30), 1599],
      [new Date (2020, 4, 1), 1908],
      [new Date (2020, 4, 2), 1587],
      [new Date (2020, 4, 3), 2577],
      [new Date (2020, 4, 4), 1451],
      [new Date (2020, 4, 5), 1253],
      [new Date (2020, 4, 6), 1486],
      [new Date (2020, 4, 7), 1475],
      [new Date (2020, 4, 8), 1458],
      [new Date (2020, 4, 9), 1292],
      [new Date (2020, 4, 10), 1173],
      [new Date (2020, 4, 11), 1173],
      [new Date (2020, 4, 12), 1155],
      [new Date (2020, 4, 13), 1144],
      [new Date (2020, 4, 14), 548],
      [new Date (2020, 4, 15), 981],
    ]);

    var tickMarks = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
      tickMarks.push(data.getValue(i, 0));
    }

    var options = {
      chart: {
        title: 'Daily Change',
      },
      legend: { position:'none' },
      width: '100%',
      pointSize: 10,
      explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
      hAxis: {
        format: 'MM/dd/yyyy',
        ticks: tickMarks
      },
      curveType: 'function',
      colors:['grey']
    };




      function resize() {
        var chart = new google.charts.Line(document.getElementById('daily_line_chart'));
        chart.draw(data, google.charts.Line.convertOptions(options));
       }
       window.onload = resize();
       window.onresize = resize;
    },
  packages: ['corechart', 'line']
});


// .................................................. Active ................................ //
google.charts.load('current', {
  callback: function () {
    var data = new google.visualization.DataTable();
    data.addColumn('date', '');
    data.addColumn('number', 'Daily Infection');
    data.addRows([
      [new Date (2020, 0, 26), 1],
      [new Date (2020, 0, 27), 1],
      [new Date (2020, 0, 28), 2],
      [new Date (2020, 0, 29), 2],
      [new Date (2020, 0, 30), 2],
      [new Date (2020, 0, 31), 4],
      [new Date (2020, 1, 1), 4],
      [new Date (2020, 1, 2), 4],
      [new Date (2020, 1, 3), 4],
      [new Date (2020, 1, 4), 4],
      [new Date (2020, 1, 5), 5],
      [new Date (2020, 1, 6), 5],
      [new Date (2020, 1, 7), 7],
      [new Date (2020, 1, 8), 7],
      [new Date (2020, 1, 9), 7],
      [new Date (2020, 1, 10), 7],
      [new Date (2020, 1, 11), 7],
      [new Date (2020, 1, 12), 6],
      [new Date (2020, 1, 13), 6],
      [new Date (2020, 1, 14), 6],
      [new Date (2020, 1, 15), 6],
      [new Date (2020, 1, 16), 6],
      [new Date (2020, 1, 17), 7],
      [new Date (2020, 1, 18), 7],
      [new Date (2020, 1, 19), 7],
      [new Date (2020, 1, 20), 7],
      [new Date (2020, 1, 21), 6],
      [new Date (2020, 1, 22), 6],
      [new Date (2020, 1, 23), 6],
      [new Date (2020, 1, 24), 7],
      [new Date (2020, 1, 25), 8],
      [new Date (2020, 1, 26), 8],
      [new Date (2020, 1, 27), 7],
      [new Date (2020, 1, 28), 7],
      [new Date (2020, 1, 29), 14],
      [new Date (2020, 2, 1), 18],
      [new Date (2020, 2, 2), 21],
      [new Date (2020, 2, 3), 23],
      [new Date (2020, 2, 4), 27],
      [new Date (2020, 2, 5), 31],
      [new Date (2020, 2, 6), 43],
      [new Date (2020, 2, 7), 46],
      [new Date (2020, 2, 8), 56],
      [new Date (2020, 2, 9), 96],
      [new Date (2020, 2, 10), 64],
      [new Date (2020, 2, 11), 99],
      [new Date (2020, 2, 12), 108],
      [new Date (2020, 2, 13), 97],
      [new Date (2020, 2, 14), 234],
      [new Date (2020, 2, 15), 292],
      [new Date (2020, 2, 16), 409],
      [new Date (2020, 2, 17), 578],
      [new Date (2020, 2, 18), 706],
      [new Date (2020, 2, 19), 850],
      [new Date (2020, 2, 20), 1051],
      [new Date (2020, 2, 21), 1295],
      [new Date (2020, 2, 22), 1435],
      [new Date (2020, 2, 23), 1747],
      [new Date (2020, 2, 24), 2654],
      [new Date (2020, 2, 25), 3188],
      [new Date (2020, 2, 26), 3776],
      [new Date (2020, 2, 27), 4348],
      [new Date (2020, 2, 28), 5199],
      [new Date (2020, 2, 29), 5642],
      [new Date (2020, 2, 30), 6266],
      [new Date (2020, 2, 31), 7268],
      [new Date (2020, 3, 1), 7881],
      [new Date (2020, 3, 2), 9131],
      [new Date (2020, 3, 3), 10022],
      [new Date (2020, 3, 4), 11086],
      [new Date (2020, 3, 5), 12511],
      [new Date (2020, 3, 6), 12713],
      [new Date (2020, 3, 7), 13488],
      [new Date (2020, 3, 8), 14463],
      [new Date (2020, 3, 9), 14945],
      [new Date (2020, 3, 10), 15566],
      [new Date (2020, 3, 11), 16237],
      [new Date (2020, 3, 12), 16494],
      [new Date (2020, 3, 13), 17144],
      [new Date (2020, 3, 14), 17827],
      [new Date (2020, 3, 15), 18432],
      [new Date (2020, 3, 16), 19825],
      [new Date (2020, 3, 17), 21079],
      [new Date (2020, 3, 18), 21626],
      [new Date (2020, 3, 19), 21626],
      [new Date (2020, 3, 20), 23291],
      [new Date (2020, 3, 21), 24250],
      [new Date (2020, 3, 22), 25545],
      [new Date (2020, 3, 23), 26213],
      [new Date (2020, 3, 24), 26630],
      [new Date (2020, 3, 25), 27311],
      [new Date (2020, 3, 26), 27118],
      [new Date (2020, 3, 27), 28451],
      [new Date (2020, 3, 28), 28920],
      [new Date (2020, 3, 29), 29297],
      [new Date (2020, 3, 30), 29648],
      [new Date (2020, 4, 1), 29995],
      [new Date (2020, 4, 2), 30385],
      [new Date (2020, 4, 3), 31744],
      [new Date (2020, 4, 4), 32473],
      [new Date (2020, 4, 5), 32027],
      [new Date (2020, 4, 6), 32455],
      [new Date (2020, 4, 7), 32601],
      [new Date (2020, 4, 8), 32470],
      [new Date (2020, 4, 9), 32790],
      [new Date (2020, 4, 10), 32948],
      [new Date (2020, 4, 11), 33099],
      [new Date (2020, 4, 12), 33022],
      [new Date (2020, 4, 13), 32918],
      [new Date (2020, 4, 14), 32382],
      [new Date (2020, 4, 15), 32493],
    ]);

    var tickMarks = [];
    for (var i = 0; i < data.getNumberOfRows(); i++) {
      tickMarks.push(data.getValue(i, 0));
    }

    var options = {
      chart: {
        title: 'Active Cases',
      },
      legend: { position:'none' },
      width: '100%',
      pointSize: 10,
      explorer: { actions: ['dragToZoom', 'rightClickToReset'] },
      hAxis: {
        format: 'MM/dd/yyyy',
        ticks: tickMarks
      },
      curveType: 'function',
      colors:['#F4B400']
    };

      var chart = new google.charts.Line(document.getElementById('active_line_chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));

    },
  packages: ['corechart', 'line']
});
