<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PieChart from '$lib/components/PieChart.svelte';

  const { Story } = defineMeta({
    title: 'Charts/PieChart',
    component: PieChart,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text', description: 'Chart title' },
      id: { control: 'text', description: 'HTML id attribute' },
      themeMode: {
        control: 'radio',
        options: ['light', 'dark'],
        description: 'Color theme',
        table: { category: 'Visual' }
      },
      showLegend: {
        control: 'boolean',
        description: 'Show/hide the chart legend',
        table: { category: 'Visual' }
      },
      legendPosition: {
        control: 'select',
        options: ['bottom', 'top', 'left', 'right'],
        description: 'Position of the legend',
        table: { category: 'Visual' }
      },
      showDataLabels: {
        control: 'boolean',
        description: 'Show percentage labels on slices',
        table: { category: 'Visual' }
      }
    }
  });
</script>

<!-- Default (with custom colors) -->
<Story
  name="Default"
  args={{
    data: [
      { label: 'Electronics', value: 44, color: '#008FFB' },
      { label: 'Clothing', value: 55, color: '#00E396' },
      { label: 'Food', value: 13, color: '#FEB019' },
      { label: 'Books', value: 43, color: '#FF4560' },
      { label: 'Other', value: 22, color: '#775DD0' }
    ],
    title: 'Sales by Category'
  }}
/>

<!-- Without Colors (ApexCharts defaults) -->
<Story
  name="Without Colors"
  args={{
    data: [
      { label: 'Electronics', value: 44 },
      { label: 'Clothing', value: 55 },
      { label: 'Food', value: 13 },
      { label: 'Toys', value: 28 }
    ],
    title: 'Sales by Category (default colors)'
  }}
/>

<!-- Many Slices -->
<Story
  name="Many Slices"
  args={{
    data: [
      { label: 'USA', value: 35 },
      { label: 'EU', value: 25 },
      { label: 'Asia', value: 20 },
      { label: 'LatAm', value: 10 },
      { label: 'Africa', value: 5 },
      { label: 'Other', value: 5 }
    ],
    title: 'Revenue by Region'
  }}
/>

<!-- No Data Labels -->
<Story
  name="No Labels"
  args={{
    data: [
      { label: 'Frontend', value: 40, color: '#008FFB' },
      { label: 'Backend', value: 35, color: '#00E396' },
      { label: 'DevOps', value: 25, color: '#FEB019' }
    ],
    title: 'Team Distribution',
    options: { dataLabels: { enabled: false }, legend: { position: 'right' } }
  }}
/>

<!-- Dark Theme -->
<Story
  name="Dark Theme"
  args={{
    data: [
      { label: 'Series A', value: 44 },
      { label: 'Series B', value: 55 },
      { label: 'Series C', value: 13 },
      { label: 'Series D', value: 43 }
    ],
    title: 'Dark Theme Pie',
    options: {
      chart: { background: '#1e1e2e' },
      theme: { mode: 'dark' },
      legend: { position: 'bottom' }
    }
  }}
/>

<!-- Interactive (all controls active) -->
<Story
  name="Interactive"
  args={{
    data: [
      { label: 'Electronics', value: 44, color: '#008FFB' },
      { label: 'Clothing', value: 55, color: '#00E396' },
      { label: 'Food', value: 13, color: '#FEB019' },
      { label: 'Books', value: 43, color: '#FF4560' },
      { label: 'Other', value: 22, color: '#775DD0' }
    ],
    title: 'Interactive Pie Chart',
    themeMode: 'light',
    showLegend: true,
    legendPosition: 'bottom',
    showDataLabels: true
  }}
>
  {#snippet children({ args })}
    <PieChart
      data={args.data}
      title={args.title}
      options={{
        chart: {
          background: args.themeMode === 'dark' ? '#1e1e2e' : 'transparent'
        },
        theme: { mode: args.themeMode },
        legend: { show: args.showLegend, position: args.legendPosition },
        dataLabels: { enabled: args.showDataLabels }
      }}
    />
  {/snippet}
</Story>
