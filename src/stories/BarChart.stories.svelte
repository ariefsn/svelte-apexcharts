<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BarChart from '$lib/components/BarChart.svelte';

  const { Story } = defineMeta({
    title: 'Charts/BarChart',
    component: BarChart,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text', description: 'Chart title' },
      horizontal: { control: 'boolean', description: 'Render bars horizontally' },
      id: { control: 'text', description: 'HTML id attribute' },
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
        description: 'Show values inside/above bars',
        table: { category: 'Visual' }
      },
      stacked: {
        control: 'boolean',
        description: 'Stack multiple series',
        table: { category: 'Visual' }
      },
      columnWidth: {
        control: { type: 'range', min: 20, max: 100, step: 5 },
        description: 'Column width as a percentage',
        table: { category: 'Visual' }
      }
    }
  });
</script>

<!-- Vertical -->
<Story
  name="Vertical"
  args={{
    series: [
      { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
      { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Monthly Performance'
  }}
/>

<!-- Horizontal -->
<Story
  name="Horizontal"
  args={{
    series: [{ name: 'Sales', data: [44, 55, 41, 37, 22, 43, 21] }],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    horizontal: true,
    title: 'Weekly Sales'
  }}
/>

<!-- Stacked -->
<Story
  name="Stacked"
  args={{
    series: [
      { name: 'Q1', data: [44, 55, 41, 37, 22] },
      { name: 'Q2', data: [53, 32, 33, 52, 13] },
      { name: 'Q3', data: [12, 17, 11, 9, 15] },
      { name: 'Q4', data: [9, 7, 5, 8, 6] }
    ],
    categories: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    title: 'Quarterly Sales by Product',
    options: { chart: { stacked: true } }
  }}
/>

<!-- With Data Labels -->
<Story
  name="With Data Labels"
  args={{
    series: [{ name: 'Units Sold', data: [120, 98, 140, 105, 132, 88, 156] }],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    title: 'Daily Units Sold',
    options: { dataLabels: { enabled: true } }
  }}
/>

<!-- Dark Theme -->
<Story
  name="Dark Theme"
  args={{
    series: [
      { name: 'Actual', data: [44, 55, 57, 56, 61, 58, 63] },
      { name: 'Target', data: [50, 60, 65, 60, 70, 65, 70] }
    ],
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    title: 'Performance (Dark)',
    options: {
      chart: { background: '#1e1e2e' },
      theme: { mode: 'dark' }
    }
  }}
/>

<!-- Interactive (all controls active) -->
<Story
  name="Interactive"
  args={{
    series: [
      { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
      { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }
    ],
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    title: 'Interactive Bar Chart',
    horizontal: false,
    themeMode: 'light',
    showToolbar: true,
    showDataLabels: false,
    stacked: false,
    columnWidth: 55
  }}
>
  {#snippet children({ args })}
    <BarChart
      series={args.series}
      categories={args.categories}
      title={args.title}
      horizontal={args.horizontal}
      options={{
        chart: {
          background: args.themeMode === 'dark' ? '#1e1e2e' : 'transparent',
          toolbar: { show: args.showToolbar },
          stacked: args.stacked
        },
        theme: { mode: args.themeMode },
        dataLabels: { enabled: args.showDataLabels },
        plotOptions: { bar: { horizontal: args.horizontal, columnWidth: `${args.columnWidth}%` } }
      }}
    />
  {/snippet}
</Story>
