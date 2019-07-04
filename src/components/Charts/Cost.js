// import React from 'react';
// import FusionCharts from 'fusioncharts/core';
// import Column2D from 'fusioncharts/viz/column2d';
// import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
// import ReactFC from 'react-fusioncharts';
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Step 1 - Include react
import React from 'react';

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

function Cost(props) {
  var {background} = props;


  var chartConfigs = {
    type: 'column2d', // The chart type
    width: '450', // Width of the chart
    height: '300', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      "chart": {
          "caption": "Split of Revenue by Product Categories",
          "subCaption": "Last year",
          "numberPrefix": "$",
          "bgColor": background,
          // "baseChartMessageColor": "#ffffff",
          "baseFontColor": "#ffffff",
          "captionFontColor": "#ffffff",
          "subCaptionFontColor": "#ffffff",
          "startingAngle": "310",
          "showLegend": "1",
          "defaultCenterLabel": "Total revenue: $64.08K",
          "centerLabel": "Revenue from $label: $value",
          "centerLabelBold": "1",
          "showTooltip": "0",
          "decimals": "0",
          "theme": "fusion"
      },
      "data": [
          {
              "label": "Food",
              "value": "28504"
          },
          {
              "label": "Apparels",
              "value": "14633"
          },
          {
              "label": "Electronics",
              "value": "10507"
          },
          {
              "label": "Household",
              "value": "4910"
          }
      ]
  }
};


  return (
    <div style={{margin: '1em', flex:"0 0 30%", backgroundColor: background }}>
      <div className='chart' style={{padding: "7px 15px", borderBottom: '1px solid black'}}>
        COST PREDICTED
      </div>
      <div style={{padding: '1em',}}>
        <ReactFC {...chartConfigs} />
      </div>
    </div>
  )
}

export default Cost
