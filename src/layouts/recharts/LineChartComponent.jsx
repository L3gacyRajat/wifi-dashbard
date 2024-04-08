import Plot from 'react-plotly.js';

const LineChartComponent = () => {

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
  const revenue = salesData.map(data => data.revenue);
  const profit = salesData.map(data => data.profit);


  // Calculate dynamic axis ranges
  const minY = Math.min(...salesData.map(data => Math.min(data.revenue, data.profit)));
  const maxY = Math.max(...salesData.map(data => Math.max(data.revenue, data.profit)));

  
  const traceRevenue = {
    x: months,
    y: salesData.map(data => data.revenue),
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: '#3b82f6' },
    name: 'Revenue',
    line: { // Adding animation settings for the line
      dash: 'solid',
      width: 2,
      color: '#3b82f6',
      animate: true,
      duration: 5000, // Animation duration in milliseconds
      easing: 'linear' // Animation easing function
    }
  };
  
  const traceProfit = {
    x: months,
    y: salesData.map(data => data.profit),
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: '#8b5cf6' },
    name: 'Profit',
    line: { // Adding animation settings for the line
      dash: 'solid',
      width: 2,
      color: '#8b5cf6',
      animate: true,
      duration: 5000, // Animation duration in milliseconds
      easing: 'linear' // Animation easing function
    }
  };
  

  const layout = {
    paper_bgcolor: '#0b1739',
    plot_bgcolor: '#0b1739',
    margin: {
      l: 70,
      r: 50,
      t: 50,
      b: 50,
      pad: 10,
    },
    title: 'Throughput Vs Time',
    font:{
      color: 'white'
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
      x:'0.7',
      y:'1.3'
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
    animation: {
      duration: 1000,
      easing: 'cubic-in-out',
      redraw: true,
    },
    // responsive: true // Added responsive property
  };
  const config = {
    responsive:true
  };

  return (
    <div className="rounded-md myDiv" style={{ width: '100%', height:'100%' }}>
      <Plot
        data={[traceRevenue, traceProfit]}
        layout={layout}
        config={config}
        style={{ width: '-webkit-fill-available', height:'100%', margin:'auto' }}
      />
    </div>
  );
};

export default LineChartComponent;