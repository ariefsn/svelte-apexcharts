<p align="center">
  <img src="./static/logo.svg" alt="@ariefsn/svelte-apexcharts" width="120" height="120"/>
</p>

<h1 align="center">@ariefsn/svelte-apexcharts</h1>

<p align="center">
  A lightweight Svelte 5 wrapper for <a href="https://apexcharts.com/">ApexCharts</a> with reactive options support.
</p>

<p align="center">
  <a href="https://github.com/ariefsn/svelte-apexcharts"><img src="https://img.shields.io/github/stars/ariefsn/svelte-apexcharts?style=flat-square" alt="GitHub Stars"/></a>
  <a href="https://www.npmjs.com/package/@ariefsn/svelte-apexcharts"><img src="https://img.shields.io/npm/v/@ariefsn/svelte-apexcharts?style=flat-square" alt="npm version"/></a>
  <a href="https://github.com/ariefsn/svelte-apexcharts/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ariefsn/svelte-apexcharts?style=flat-square" alt="License MIT"/></a>
</p>

---

## Installation

```sh
npm install @ariefsn/svelte-apexcharts apexcharts
# or
bun add @ariefsn/svelte-apexcharts apexcharts
```

## Usage

```svelte
<script lang="ts">
  import { Chart } from '@ariefsn/svelte-apexcharts';
  import type { ApexOptions } from 'apexcharts';

  const options: ApexOptions = {
    chart: { type: 'line' },
    series: [{ name: 'Sales', data: [30, 40, 35, 50, 49, 60] }],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
  };
</script>

<Chart {options} />
```

## Props

| Prop      | Type                        | Required | Default     | Description                          |
|-----------|-----------------------------|----------|-------------|--------------------------------------|
| `options` | `ApexOptions`               | Yes      | —           | ApexCharts configuration object      |
| `id`      | `string`                    | No       | —           | HTML id attribute for the chart div  |
| `class`   | `string`                    | No       | `''`        | CSS class(es) for the chart div      |
| `node`    | `HTMLDivElement` (bindable) | No       | `undefined` | Bindable reference to the chart div  |

## Reactive Options

Options changes are automatically reflected in the chart:

```svelte
<script lang="ts">
  import { Chart } from '@ariefsn/svelte-apexcharts';
  import type { ApexOptions } from 'apexcharts';

  let darkMode = $state(false);

  const options = $derived<ApexOptions>({
    chart: { type: 'bar', background: darkMode ? '#1a1a2e' : '#fff' },
    series: [{ name: 'Revenue', data: [44, 55, 57, 56, 61, 58] }],
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'] },
    theme: { mode: darkMode ? 'dark' : 'light' }
  });
</script>

<button onclick={() => (darkMode = !darkMode)}>Toggle Theme</button>
<Chart {options} />
```

## Accessing the Node

Bind to `node` to get the underlying DOM element:

```svelte
<script lang="ts">
  import { Chart } from '@ariefsn/svelte-apexcharts';

  let chartNode = $state<HTMLDivElement | undefined>(undefined);
</script>

<Chart options={...} bind:node={chartNode} />
```

## Chart Types

Supports all ApexCharts chart types: Line, Area, Bar, Column, Pie, Donut, RadialBar, Scatter, Bubble, Heatmap, Candlestick, BoxPlot, Treemap, Radar, PolarArea, RangeBar, RangeArea.

## Links

- [GitHub](https://github.com/ariefsn/svelte-apexcharts)
- [npm](https://www.npmjs.com/package/@ariefsn/svelte-apexcharts)
- [ApexCharts Docs](https://apexcharts.com/docs/options/)
- [Changelog](./CHANGELOG.md)

## License

MIT License — Copyright (c) 2026 [Arief Setiyo Nugroho](https://github.com/ariefsn)
