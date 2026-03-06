<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Chart from '$lib/components/Chart.svelte';

  const { Story } = defineMeta({
    title: 'Charts/Chart',
    component: Chart,
    tags: ['autodocs'],
    argTypes: {
      options: {
        control: 'object',
        description: 'Full ApexCharts options object — edit any property here'
      },
      id: { control: 'text', description: 'HTML id attribute for the chart container' },
      class: { control: 'text', description: 'CSS class(es) applied to the chart container' }
    }
  });
</script>

<!-- Line Chart -->
<Story
  name="Line"
  args={{
    options: {
      chart: { type: 'line', height: 350, toolbar: { show: true } },
      series: [
        { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
        { name: 'Revenue', data: [23, 42, 51, 30, 52, 48, 71, 80, 99] }
      ],
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      title: { text: 'Monthly Sales vs Revenue' },
      stroke: { curve: 'smooth', width: 2 }
    }
  }}
/>

<!-- Bar Chart -->
<Story
  name="Bar"
  args={{
    options: {
      chart: { type: 'bar', height: 350, toolbar: { show: true } },
      series: [
        { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
        { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }
      ],
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      title: { text: 'Monthly Performance' },
      plotOptions: { bar: { horizontal: false, columnWidth: '55%' } },
      dataLabels: { enabled: false }
    }
  }}
/>

<!-- Area Chart -->
<Story
  name="Area"
  args={{
    options: {
      chart: { type: 'area', height: 350, toolbar: { show: true } },
      series: [
        { name: 'New Users', data: [31, 40, 28, 51, 42, 109, 100] },
        { name: 'Returning', data: [11, 32, 45, 32, 34, 52, 41] }
      ],
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      title: { text: 'Daily Active Users' },
      stroke: { curve: 'smooth' },
      fill: { type: 'gradient' }
    }
  }}
/>

<!-- Pie Chart -->
<Story
  name="Pie"
  args={{
    options: {
      chart: { type: 'pie', height: 350 },
      series: [44, 55, 13, 43, 22],
      labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Other'],
      title: { text: 'Sales by Category' },
      legend: { position: 'bottom' }
    }
  }}
/>

<!-- Donut Chart -->
<Story
  name="Donut"
  args={{
    options: {
      chart: { type: 'donut', height: 350 },
      series: [44, 55, 41, 17],
      labels: ['Series A', 'Series B', 'Series C', 'Series D'],
      title: { text: 'Donut Chart' },
      plotOptions: { pie: { donut: { size: '60%', labels: { show: true } } } },
      legend: { position: 'bottom' }
    }
  }}
/>

<!-- Radar Chart -->
<Story
  name="Radar"
  args={{
    options: {
      chart: { type: 'radar', height: 350 },
      series: [
        { name: 'Product A', data: [80, 50, 30, 40, 100, 20] },
        { name: 'Product B', data: [20, 30, 40, 80, 20, 80] }
      ],
      xaxis: { categories: ['Speed', 'Reliability', 'Safety', 'Efficiency', 'Accuracy', 'Cost'] },
      title: { text: 'Product Comparison' }
    }
  }}
/>

<!-- Scatter Chart -->
<Story
  name="Scatter"
  args={{
    options: {
      chart: { type: 'scatter', height: 350, toolbar: { show: true }, zoom: { enabled: true } },
      series: [
        { name: 'Group A', data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2]] },
        { name: 'Group B', data: [[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2]] }
      ],
      xaxis: { tickAmount: 10, type: 'numeric' },
      yaxis: { tickAmount: 7 },
      title: { text: 'Scatter Plot' }
    }
  }}
/>

<!-- Heatmap Chart -->
<Story
  name="Heatmap"
  args={{
    options: {
      chart: { type: 'heatmap', height: 350, toolbar: { show: true } },
      series: [
        { name: 'Mon', data: [{ x: 'Jan', y: 22 }, { x: 'Feb', y: 35 }, { x: 'Mar', y: 41 }, { x: 'Apr', y: 28 }] },
        { name: 'Tue', data: [{ x: 'Jan', y: 13 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 20 }, { x: 'Apr', y: 8 }] },
        { name: 'Wed', data: [{ x: 'Jan', y: 40 }, { x: 'Feb', y: 28 }, { x: 'Mar', y: 35 }, { x: 'Apr', y: 44 }] },
        { name: 'Thu', data: [{ x: 'Jan', y: 18 }, { x: 'Feb', y: 32 }, { x: 'Mar', y: 15 }, { x: 'Apr', y: 37 }] }
      ],
      title: { text: 'Weekly Activity Heatmap' }
    }
  }}
/>

<!-- Dark Theme -->
<Story
  name="Dark Theme"
  args={{
    options: {
      chart: { type: 'line', height: 350, background: '#1e1e2e', toolbar: { show: true } },
      theme: { mode: 'dark' },
      series: [{ name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
      xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
      title: { text: 'Dark Theme Line Chart' },
      stroke: { curve: 'smooth' }
    }
  }}
/>
