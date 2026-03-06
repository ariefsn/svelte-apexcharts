<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import DonutChart from '$lib/components/DonutChart.svelte';

  const { Story } = defineMeta({
    title: 'Charts/DonutChart',
    component: DonutChart,
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
      donutSize: {
        control: 'select',
        options: ['40%', '55%', '65%', '80%'],
        description: 'Inner hole size of the donut',
        table: { category: 'Visual' }
      },
      showTotal: {
        control: 'boolean',
        description: 'Show total value in the donut center',
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

<!-- Default -->
<Story
  name="Default"
  args={{
    data: [
      { label: 'Series A', value: 44, color: '#008FFB' },
      { label: 'Series B', value: 55, color: '#00E396' },
      { label: 'Series C', value: 13, color: '#FEB019' },
      { label: 'Series D', value: 43, color: '#FF4560' }
    ],
    title: 'Donut Chart'
  }}
/>

<!-- With Total Label -->
<Story
  name="With Total"
  args={{
    data: [
      { label: 'Completed', value: 72, color: '#00E396' },
      { label: 'In Progress', value: 18, color: '#FEB019' },
      { label: 'Pending', value: 10, color: '#FF4560' }
    ],
    title: 'Task Status',
    options: {
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: { show: true, label: 'Total Tasks', formatter: () => '100' }
            }
          }
        }
      }
    }
  }}
/>

<!-- Thin Ring -->
<Story
  name="Thin Ring"
  args={{
    data: [
      { label: 'Q1', value: 30 },
      { label: 'Q2', value: 40 },
      { label: 'Q3', value: 20 },
      { label: 'Q4', value: 10 }
    ],
    title: 'Quarterly Split',
    options: { plotOptions: { pie: { donut: { size: '80%' } } } }
  }}
/>

<!-- Without Colors -->
<Story
  name="Without Colors"
  args={{
    data: [
      { label: 'Frontend', value: 40 },
      { label: 'Backend', value: 35 },
      { label: 'Mobile', value: 25 }
    ],
    title: 'Engineering Split (default colors)'
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
    title: 'Dark Theme Donut',
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
      { label: 'Series A', value: 44, color: '#008FFB' },
      { label: 'Series B', value: 55, color: '#00E396' },
      { label: 'Series C', value: 13, color: '#FEB019' },
      { label: 'Series D', value: 43, color: '#FF4560' }
    ],
    title: 'Interactive Donut',
    themeMode: 'light',
    donutSize: '65%',
    showTotal: false,
    showLegend: true,
    legendPosition: 'bottom',
    showDataLabels: true
  }}
>
  {#snippet children({ args })}
    <DonutChart
      data={args.data}
      title={args.title}
      options={{
        chart: {
          background: args.themeMode === 'dark' ? '#1e1e2e' : 'transparent'
        },
        theme: { mode: args.themeMode },
        plotOptions: {
          pie: {
            donut: {
              size: args.donutSize,
              labels: {
                show: args.showTotal,
                total: { show: args.showTotal, label: 'Total' }
              }
            }
          }
        },
        legend: { show: args.showLegend, position: args.legendPosition },
        dataLabels: { enabled: args.showDataLabels }
      }}
    />
  {/snippet}
</Story>
