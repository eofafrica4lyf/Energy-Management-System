// Step 1 - Include react
import React from 'react';

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Include the chart type
import Doughnut2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme);

function Doughnut2d(props) {
  var {background} = props;

  var chartConfigs = {
    type: 'doughnut2d', // The chart type
    width: '450', // Width of the chart
    height: '300', 
    pieRadius: '450', // Width of the chart
    doughnutRadius: '300', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      "chart": {
          "numberPrefix": "$",
          "showLabels": 1,
          "palette": 1,
          "paletteColors": "#F8E63B, #58E3C3",
          "defaultCenterLabel": "Total revenue: $64.08K",
          "centerLabel": "Revenue from $label: $value",
          "baseFontColor": "#ffffff",
          "captionFontColor": "#ffffff",
          "subCaptionFontColor": "#ffffff",
          "loadMessageColor": "#ffffff",
          "baseChartMessageColor": "#ffffff",
          "labelFontColor": "#ffffff",
          "centerLabelColor": "#ffffff",
          "legendItemFontColor": "#ffffff",
          "toolTipColor": "#000000",
          "decimals": "0",
          "theme": "fusion",
          "bgColor": background,
          "showLegend": "1",
          "centerLabelBold": "1",
          "showTooltip": "1",
      },
      "data": [
          {
              "label": "Food",
              "value": "28504"
          },
          {
              "label": "Apparels",
              "value": "14633"
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

export default Doughnut2d
