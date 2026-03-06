<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import LineChart from '$lib/components/LineChart.svelte';

  const { Story } = defineMeta({
    title: 'Charts/LineChart',
    component: LineChart,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text', description: 'Chart title' },
      id: { control: 'text', description: 'HTML id attribute' },
      // Interactive controls mapped through the `options` extra prop
      strokeCurve: {
        control: 'select',
        options: ['smooth', 'straight', 'stepline', 'monotoneCubic'],
        description: 'Stroke interpolation style',
        table: { category: 'Visual' }
      },
      strokeWidth: {
        control: { type: 'range', min: 1, max: 10, step: 1 },
        description: 'Stroke line thickness',
        table: { category: 'Visual' }
      },
      themeMode: {
        control: 'radio',
        options: ['light', 'dark'],
        description: 'Color theme',
        table: { category: 'Visual' }
      },
      showToolbar: {
        control: 'boolean',
        description: 'Show/hide the toolbar',
        table: { category: 'Visual' }
      },
      showDataLabels: {
        control: 'boolean',
        description: 'Show values on each data point',
        table: { category: 'Visual' }
      },
      showLegend: {
        control: 'boolean',
        description: 'Show/hide the chart legend',
        table: { category: 'Visual' }
      }
    }
  });
</script>

<!-- Single Series -->
<Story
  name="Single Series"
  args={{
    series: [{ name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Monthly Sales Trend'
  }}
/>

<!-- Multi Series -->
<Story
  name="Multi Series"
  args={{
    series: [
      { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
      { name: 'Revenue', data: [23, 42, 51, 30, 52, 48, 71, 80, 99] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Sales vs Revenue'
  }}
/>

<!-- Stepline -->
<Story
  name="Stepline"
  args={{
    series: [{ name: 'Temperature', data: [22, 22, 25, 25, 20, 20, 18, 18, 23, 23] }],
    categories: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    title: 'Hourly Temperature',
    options: { stroke: { curve: 'stepline' } }
  }}
/>

<!-- Straight Stroke -->
<Story
  name="Straight Stroke"
  args={{
    series: [
      { name: 'Target', data: [50, 60, 70, 80, 90, 100, 110, 120, 130] },
      { name: 'Actual', data: [45, 55, 72, 78, 95, 98, 108, 125, 132] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Target vs Actual',
    options: { stroke: { curve: 'straight' } }
  }}
/>

<!-- Dark Theme -->
<Story
  name="Dark Theme"
  args={{
    series: [
      { name: 'Users', data: [31, 40, 28, 51, 42, 109, 100, 80, 90] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Active Users (Dark)',
    options: {
      chart: { background: '#1e1e2e' },
      theme: { mode: 'dark' }
    }
  }}
/>

<!-- With Data Labels -->
<Story
  name="With Data Labels"
  args={{
    series: [{ name: 'Score', data: [72, 85, 68, 91, 77, 88] }],
    categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
    title: 'Quarterly Scores',
    options: {
      dataLabels: { enabled: true },
      stroke: { curve: 'straight' }
    }
  }}
/>

<!-- Interactive (all controls active) -->
<Story
  name="Interactive"
  args={{
    series: [
      { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
      { name: 'Revenue', data: [23, 42, 51, 30, 52, 48, 71, 80, 99] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Interactive Line Chart',
    strokeCurve: 'smooth',
    strokeWidth: 2,
    themeMode: 'light',
    showToolbar: true,
    showDataLabels: false,
    showLegend: true
  }}
>
  {#snippet children({ args })}
    <LineChart
      series={args.series}
      categories={args.categories}
      title={args.title}
      options={{
        chart: {
          background: args.themeMode === 'dark' ? '#1e1e2e' : 'transparent',
          toolbar: { show: args.showToolbar }
        },
        theme: { mode: args.themeMode },
        stroke: { curve: args.strokeCurve, width: args.strokeWidth },
        dataLabels: { enabled: args.showDataLabels },
        legend: { show: args.showLegend }
      }}
    />
  {/snippet}
</Story>
