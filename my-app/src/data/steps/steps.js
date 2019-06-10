export var steps = [
  {id: 1, description: `The very first step is to create an HTML file. 
  You can write it on the editor or click the below button to add HTML sample in the editor <p></p>
  <code id="add-HTML">Add HTML content</code>`},
  {id: 2, description: `Include the FusionCharts JavaScript files from CDN. Refer the sample below<p></p>
  <a href="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js">
  https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js</a>
  Add the script in your HTML file to get FusionCharts in your webpage <p></p>
  <code><script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script></code><p</p>
  Or you can click below to load the correct sample<p></p>
  <code id="add-scripts">Add Script</code>`},
  {id: 3, description: `FusionCharts accepts data in JSON format. 
  Following code is the JSON representation of the above table with the required attributes to render the above chart.<p></p>
  <pre>{
    // Chart Configuration
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "fusion"
    },
    // Chart Data
    "data": [
      {
        "label": "Venezuela",
        "value": "290"
      },
      {
        "label": "Saudi",
        "value": "260"
      },
      {
        "label": "Canada",
        "value": "180"
      },
      {
        "label": "Iran",
        "value": "140"
      },
      {
        "label": "Russia",
        "value": "115"
      },
      {
        "label": "UAE",
        "value": "100"
      },
      {
        "label": "US",
        "value": "30"
      },
      {
        "label": "China",
        "value": "30"
      }
    ]
  }</pre style="align:left"><p></p>
  Or you can click below to get the working sample<p></p>
  <code id="add-sample-data">Add Sample data</code>`},
  {id: 4, description: `Call the render function to render the chart <p></p>
    <code> fusioncharts.render();</code>
    Or you can add the working sample
    <code id-"add-render-func">Call render function</code>`},
];