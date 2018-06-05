$(document).ready(function() {
        var options = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Temperature'
            },
            xAxis: {
                type: 'category'   
            },
            yAxis: {
                title: {
                text: '°F'
            },
            minorGridLineWidth: 0,
            girdLineWidth: 0,
            plotBands: [{
                from: 60,
                to: 65,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Heating Area',
                    style: {
                        color: '#606060'
                    }
                }
            }, {
                from: 75,
                to: 85,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Cooling Area',
                    style: {
                        color: '#606060'
                    }
                }
            }]
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span> {point.y:.2f}</b> <br/>'
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: false,
                        format: '{point.y:.1f}'
                    }
                }
            },
            xAxis: {
                categories: [
                    '12a',
                    '1a',
                    '2a',
                    '3a',
                    '4a',
                    '5a',
                    '6a',
                    '7a',
                    '8a',
                    '9a',
                    '10a',
                    '11a',
                    '12p',
                    '1p',
                    '2p',
                    '3p',
                    '4p',
                    '5p',
                    '6p',
                    '7p',
                    '8p',
                    '9p',
                    '10p',
                    '11p',
                    '12p'
                ]
            },
            series: []
        }

        $(function() {
          $.ajax({
              url: 'http://localhost:5000/api/hvac/day/1h',
              complete: function(json) {
              data = JSON.parse(json.responseText);
              console.log(data[Object.keys(data)])
              tempData = data[Object.keys(data)[0]]
              console.log(tempData)

            }
          })
        })

    });  

// Highcharts.chart('chart-temperature', {
//         chart: {
//             type: 'spline'
//         },
//         title: {
//             text: 'Temperature'
//         },
//         xAxis: {
//             type: 'category'
//         },
//         yAxis: {
//             title: {
//                 text: '°F'
//             },
//             minorGridLineWidth: 0,
//             girdLineWidth: 0,
//             plotBands: [{
//                 from: 60,
//                 to: 65,
//                 color: 'rgba(68, 170, 213, 0.1)',
//                 label: {
//                     text: 'Heating Area',
//                     style: {
//                         color: '#606060'
//                     }
//                 }
//             }, {
//                 from: 75,
//                 to: 85,
//                 color: 'rgba(68, 170, 213, 0.1)',
//                 label: {
//                     text: 'Cooling Area',
//                     style: {
//                         color: '#606060'
//                     }
//                 }
//             }]
//         },
//         legend: {
//             enabled: true
//         },
//         plotOptions: {
//             series: {
//                 borderWidth: 0,
//                 dataLabels: {
//                     enabled: false,
//                     format: '{point.y:.1f}'
//                 }
//             }
//         },

//         tooltip: {
//             headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//             pointFormat: '<span style="color:{point.color}">{point.name}</span> {point.y:.2f}</b> <br/>'
//         },
//         xAxis: {
//             categories: [
//                 '12a',
//                 '1a',
//                 '2a',
//                 '3a',
//                 '4a',
//                 '5a',
//                 '6a',
//                 '7a',
//                 '8a',
//                 '9a',
//                 '10a',
//                 '11a',
//                 '12p',
//                 '1p',
//                 '2p',
//                 '3p',
//                 '4p',
//                 '5p',
//                 '6p',
//                 '7p',
//                 '8p',
//                 '9p',
//                 '10p',
//                 '11p',
//                 '12p'
//             ]
//         },

//         // series: [{
//         //     name: 'Temperature',
//         //     color: '#ef6c00',
//         //     data: [74, 73, 72, 70, 72, 70, 73, 73, 74, 73, 75, , , , , , , , , , ]
//         // }]
//         series: [{
//             name: 'Zone 1',
//             color: '#ef6c00',
//             colorByPoint: false,
//             data: [{
//                 name: '0a',
//                 y: 74,    
//             }, {
//                 name: '1a',
//                 y: 73,
//             }, {
//                 name: '2a',
//                 y: 71,
//             }, {
//                 name: '3a',
//                 y: 72,
//             }, {
//                 name: '4a',
//                 y: 70,
//             }, {
//                 name: '5a',
//                 y: 72,
//             }, {
//                 name: '6a',
//                 y: 73,
//             }, {
//                 name: '7a',
//                 y: 72,
//             }, {
//                 name: '8a',
//                 y: 74,
//             }, {
//                 name: '9a',
//                 y: 73,
//             }, {
//                 name: '10a',
//                 y: 74,
//             }, {
//                 name: '11a',
//                 //y: 54.65,
//             }, {
//                 name: '12p',
//                 //y: 56.33,    
//             }, {
//                 name: '1p',
//                 //y: 53.08,
//             }, {
//                 name: '2p',
//                 //y: 48.37,
//             }, {
//                 name: '3p',
//                 //y: 34.77,
//             }, {
//                 name: '4p',
//                 //y: 28.91,
//             }, {
//                 name: '5p',
//                 //y: 45.57,
//             }, {
//                 name: '6p',
//                 //y: 49.88,
//             }, {
//                 name: '7p',
//                 //y: 55.42,
//             }, {
//                 name: '8p',
//                 //y: 36.87,
//             }, {
//                 name: '9p',
//                 //y: 40.75,
//             }, {
//                 name: '10p',
//                 // y: 49.74,
//             }, {
//                 name: '11p',
//                 // y: 54.65,
//             }
//             ]
//         }, {
//             name: 'Zone 2',
//             color: '#FF9800',
//             colorByPoint: false,
//             data: [{
//                 name: '0a',
//                 y: 71,    
//             }, {
//                 name: '1a',
//                 y: 71,
//             }, {
//                 name: '2a',
//                 y: 72,
//             }, {
//                 name: '3a',
//                 y: 74,
//             }, {
//                 name: '4a',
//                 y: 76,
//             }, {
//                 name: '5a',
//                 y: 76,
//             }, {
//                 name: '6a',
//                 y: 75,
//             }, {
//                 name: '7a',
//                 y: 72,
//             }, {
//                 name: '8a',
//                 y: 74,
//             }, {
//                 name: '9a',
//                 y: 71,
//             }, {
//                 name: '10a',
//                 y: 76,
//             }, {
//                 name: '11a',
//                 y: 74.65,
//             }, {
//                 name: '12p',
//                 y: 66.33,    
//             }, {
//                 name: '1p',
//                 y: 63.08,
//             }, {
//                 name: '2p',
//                 y: 68.37,
//             }, {
//                 name: '3p',
//                 y: 74.77,
//             }, {
//                 name: '4p',
//                 y: 68.91,
//             }, {
//                 name: '5p',
//                 y: 65.57,
//             }, {
//                 name: '6p',
//                 y: 69.88,
//             }, {
//                 name: '7p',
//                 y: 75.42,
//             }, {
//                 name: '8p',
//                 y: 64.87,
//             }, {
//                 name: '9p',
//                 y: 70.75,
//             }, {
//                 name: '10p',
//                 y: 69.74,
//             }, {
//                 name: '11p',
//                 y: 74.65,
//             }
//             ]
//         }

//         ]
//     });