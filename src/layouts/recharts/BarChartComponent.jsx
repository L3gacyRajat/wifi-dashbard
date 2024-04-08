import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Search from '../../pages/searchcomponent/Search';

const BarChartComponent = () => {
  const [value, setValue] = useState("");

  const salesData = [
    { name: 'Jan', revenue: 3000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 5000, profit: 2000 },
    { name: 'Apr', revenue: 3908, profit: 2780 },
    { name: 'May', revenue: 4800, profit: 1890 },
    { name: 'Jun', revenue: 3800, profit: 2390 },
    { name: 'july', revenue: 3600, profit: 3450 },
    { name: 'august', revenue: 4800, profit: 2490 },
  ];

  const months = salesData.map(data => data.name);

  const traceRevenue = {
    x: months,
    y: salesData.map(data => data.revenue),
    type: 'bar',
    name: 'Revenue',
    marker: { color: '#3b82f6' },
    animate: true,
    duration: 5000,
  };
  
  const traceProfit = {
    x: months,
    y: salesData.map(data => data.profit),
    type: 'bar',
    name: 'Profit',
    marker: { color: '#8b5cf6' },
  };

  const animation = {
    duration: 2000,
    easing: 'ease-in',
    fromcurrent: true,
    redraw: true
  };
  
  const layout = {
    paper_bgcolor: '#0b1739',
    plot_bgcolor: '#0b1739',
    margin: {
      l: 70,
      r: 50,
      t: 50,
      b: 50,
      pad: 5,
    },
    xaxis: {
      title: 'Month',
      color: '#ffffff',
      showgrid: true,
      gridcolor: 'rgba(255, 255, 255, 0.2)',
      dtick: 1,
      tickfont: {
        color: '#858585' // Change tick label color here for x-axis
      }
    },
    yaxis: {
      title: 'Value',
      color: '#ffffff',
      tickvals: [0, 2500, 5000],
      rangemode: 'tozero',
      tickfont: {
        color: '#858585' // Change tick label color here for x-axis
      }
    },
    showlegend: true,
    legend: {
      font: {
        color: '#ffffff',
      },
      orientation: 'h',
      x: 0.5,
      y: 1.3
    },
    displayModeBar: {
      displaylogo: false,
      orientation: 'h',
    },
    autosize: true,
    hovermode: 'x',
    transition: {
      duration: 500,
    },
    animation: animation,
    // Add responsive layout options
    responsive: true,
  };
  const config = {
    responsive: true
  };

  

  return (
    <div className="rounded-md myDiv w-fit" style={{ width: '100%', height: '80%' }}>
      <div style={{ width: '180px' }}>
        <Search
          value={value}
          
          options={['Range VS rate', 'Range VS rate']}
        />
      </div>

      <Plot
        data={[traceRevenue, traceProfit]}
        layout={layout}
        config={config}
        style={{ width: '-webkit-fill-available', height:'100%', margin:'auto' }}
      />
    </div>
  );
};

export default BarChartComponent;
