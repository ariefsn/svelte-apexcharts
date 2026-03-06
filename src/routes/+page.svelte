<script lang="ts">
	import {
		AreaChart,
		BarChart,
		Chart,
		DonutChart,
		LineChart,
		PieChart,
		type ApexOptions
	} from '$lib/index.js';

	let darkMode = $state(false);

	const lineOptions = $derived<ApexOptions>({
		chart: { type: 'line', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [
			{ name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
			{ name: 'Revenue', data: [20, 29, 37, 36, 44, 45, 50, 68, 91] }
		],
		xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] },
		title: { text: 'Line Chart' }
	});

	const barOptions = $derived<ApexOptions>({
		chart: { type: 'bar', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [{ name: 'Units', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }],
		xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'] },
		title: { text: 'Bar Chart' }
	});

	const areaOptions = $derived<ApexOptions>({
		chart: { type: 'area', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [{ name: 'Active Users', data: [31, 40, 28, 51, 42, 109, 100] }],
		xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
		title: { text: 'Area Chart' },
		fill: { type: 'gradient' }
	});

	const donutOptions = $derived<ApexOptions>({
		chart: { type: 'donut', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [44, 55, 41, 17, 15],
		labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
		title: { text: 'Donut Chart' }
	});

	const radarOptions = $derived<ApexOptions>({
		chart: { type: 'radar', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [
			{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
			{ name: 'Series 2', data: [20, 30, 40, 80, 20, 80] }
		],
		xaxis: { categories: ['Speed', 'Reliability', 'Safety', 'Efficiency', 'Accuracy', 'Cost'] },
		title: { text: 'Radar Chart' }
	});

	const heatmapOptions = $derived<ApexOptions>({
		chart: { type: 'heatmap', height: 300, background: 'transparent' },
		theme: { mode: darkMode ? 'dark' : 'light' },
		series: [
			{
				name: 'Sun',
				data: [
					{ x: 'Jan', y: 22 },
					{ x: 'Feb', y: 35 },
					{ x: 'Mar', y: 41 },
					{ x: 'Apr', y: 31 }
				]
			},
			{
				name: 'Mon',
				data: [
					{ x: 'Jan', y: 13 },
					{ x: 'Feb', y: 23 },
					{ x: 'Mar', y: 20 },
					{ x: 'Apr', y: 8 }
				]
			},
			{
				name: 'Tue',
				data: [
					{ x: 'Jan', y: 40 },
					{ x: 'Feb', y: 28 },
					{ x: 'Mar', y: 35 },
					{ x: 'Apr', y: 44 }
				]
			}
		],
		title: { text: 'Heatmap Chart' }
	});

	// Preset component demo data
	const presetTheme = $derived<ApexOptions['theme']>({ mode: darkMode ? 'dark' : 'light' });

	const lineSeries: ApexOptions['series'] = [
		{ name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
		{ name: 'Revenue', data: [20, 29, 37, 36, 44, 45, 50, 68, 91] }
	];
	const lineCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

	const barSeries: ApexOptions['series'] = [
		{ name: 'Units', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }
	];
	const barCategories = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9'];

	const areaSeries: ApexOptions['series'] = [
		{ name: 'Active Users', data: [31, 40, 28, 51, 42, 109, 100] }
	];
	const areaCategories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	const pieData = [
		{ label: 'Product A', value: 44, color: '#008FFB' },
		{ label: 'Product B', value: 55, color: '#00E396' },
		{ label: 'Product C', value: 41, color: '#FEB019' },
		{ label: 'Product D', value: 17, color: '#FF4560' },
		{ label: 'Product E', value: 15, color: '#775DD0' }
	];

	const donutData = [
		{ label: 'Series A', value: 44 },
		{ label: 'Series B', value: 55 },
		{ label: 'Series C', value: 41 },
		{ label: 'Series D', value: 17 }
	];
</script>

<div class="page" class:dark={darkMode}>
	<header class="header">
		<div class="header-top">
			<img src="/logo.svg" alt="svelte-apexcharts logo" class="logo" />
			<div class="header-text">
				<h1>@ariefsn/svelte-apexcharts</h1>
				<p>A lightweight Svelte 5 wrapper for ApexCharts with reactive options support.</p>
				<div class="header-actions">
					<a
						class="gh-link"
						href="https://github.com/ariefsn/svelte-apexcharts"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							class="gh-icon"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							width="18"
							height="18"
						>
							<path
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							/>
						</svg>
						GitHub
					</a>
					<a
						class="gh-link"
						href="https://www.npmjs.com/package/@ariefsn/svelte-apexcharts"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
							<path
								d="M0 0v24h24V0H0zm19.2 19.2H4.8V4.8h14.4v14.4zM7.2 7.2v9.6h4.8v-7.2h2.4v7.2h2.4V7.2H7.2z"
							/>
						</svg>
						npm
					</a>
					<button onclick={() => (darkMode = !darkMode)}>
						{darkMode ? 'Light Mode' : 'Dark Mode'}
					</button>
				</div>
			</div>
		</div>
	</header>

	<main class="container">
		<section>
			<h2>Installation</h2>
			<pre><code>npm install @ariefsn/svelte-apexcharts apexcharts</code></pre>
		</section>

		<section>
			<h2>Basic Usage</h2>
			<pre><code
					>{`<script lang="ts">
  import { Chart } from '@ariefsn/svelte-apexcharts';
  import type { ApexOptions } from 'apexcharts';

  const options: ApexOptions = {
    chart: { type: 'line' },
    series: [{ name: 'Sales', data: [30, 40, 35, 50, 49, 60] }],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
  };
<\/script>

<Chart {options} />`}</code
				></pre>
		</section>

		<section>
			<h2>Props</h2>
			<div class="table-wrap">
				<table>
					<thead>
						<tr>
							<th>Prop</th>
							<th>Type</th>
							<th>Required</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>options</code></td>
							<td><code>ApexOptions</code></td>
							<td>Yes</td>
							<td>ApexCharts configuration object</td>
						</tr>
						<tr>
							<td><code>id</code></td>
							<td><code>string</code></td>
							<td>No</td>
							<td>HTML id for the chart container</td>
						</tr>
						<tr>
							<td><code>class</code></td>
							<td><code>string</code></td>
							<td>No</td>
							<td>CSS class(es) for the chart container</td>
						</tr>
						<tr>
							<td><code>node</code></td>
							<td><code>HTMLDivElement</code> (bindable)</td>
							<td>No</td>
							<td>Bindable reference to the chart div</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<h2>Preset Components</h2>
			<p class="hint">
				Pre-configured chart components with sensible defaults. Pass <code>options</code> to override
				any ApexCharts setting.
			</p>

			<div class="preset-section">
				<h3>LineChart</h3>
				<pre><code
						>{`<script lang="ts">
  import { LineChart } from '@ariefsn/svelte-apexcharts';

  const series = [
    { name: 'Sales', data: [30, 40, 35, 50, 49, 60] },
    { name: 'Revenue', data: [20, 29, 37, 36, 44, 45] }
  ];
  const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
<\\/script>

<LineChart {series} {categories} title="Monthly Sales" />`}</code
					></pre>
				<div class="table-wrap" style="margin-top: 1rem;">
					<table>
						<thead>
							<tr
								><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr
							>
						</thead>
						<tbody>
							<tr
								><td><code>series</code></td><td><code>ApexOptions['series']</code></td><td>Yes</td
								><td>—</td><td>Chart series data</td></tr
							>
							<tr
								><td><code>categories</code></td><td><code>string[]</code></td><td>Yes</td><td>—</td
								><td>X-axis categories</td></tr
							>
							<tr
								><td><code>title</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>Chart title</td
								></tr
							>
							<tr
								><td><code>options</code></td><td><code>Partial&lt;ApexOptions&gt;</code></td><td
									>No</td
								><td><code>{JSON.stringify({})}</code></td><td>Override any ApexCharts option</td
								></tr
							>
							<tr
								><td><code>id</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>HTML id for chart container</td
								></tr
							>
							<tr
								><td><code>class</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>CSS class(es)</td
								></tr
							>
							<tr
								><td><code>node</code></td><td><code>HTMLDivElement</code> (bindable)</td><td>No</td
								><td>—</td><td>Bindable div reference</td></tr
							>
						</tbody>
					</table>
				</div>
				<div class="chart-card" style="margin-top: 1rem;">
					<LineChart
						series={lineSeries}
						categories={lineCategories}
						title="Line Chart"
						options={presetTheme ? { theme: presetTheme } : {}}
					/>
				</div>
			</div>

			<div class="preset-section">
				<h3>BarChart</h3>
				<pre><code
						>{`<script lang="ts">
  import { BarChart } from '@ariefsn/svelte-apexcharts';

  const series = [{ name: 'Units', data: [44, 55, 57, 56, 61, 58] }];
  const categories = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
<\\/script>

<BarChart {series} {categories} title="Quarterly Units" />
<BarChart {series} {categories} title="Horizontal" horizontal />`}</code
					></pre>
				<div class="table-wrap" style="margin-top: 1rem;">
					<table>
						<thead>
							<tr
								><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr
							>
						</thead>
						<tbody>
							<tr
								><td><code>series</code></td><td><code>ApexOptions['series']</code></td><td>Yes</td
								><td>—</td><td>Chart series data</td></tr
							>
							<tr
								><td><code>categories</code></td><td><code>string[]</code></td><td>Yes</td><td>—</td
								><td>X-axis categories</td></tr
							>
							<tr
								><td><code>title</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>Chart title</td
								></tr
							>
							<tr
								><td><code>horizontal</code></td><td><code>boolean</code></td><td>No</td><td
									><code>false</code></td
								><td>Render bars horizontally</td></tr
							>
							<tr
								><td><code>options</code></td><td><code>Partial&lt;ApexOptions&gt;</code></td><td
									>No</td
								><td><code>{JSON.stringify({})}</code></td><td>Override any ApexCharts option</td
								></tr
							>
							<tr
								><td><code>id</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>HTML id for chart container</td
								></tr
							>
							<tr
								><td><code>class</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>CSS class(es)</td
								></tr
							>
							<tr
								><td><code>node</code></td><td><code>HTMLDivElement</code> (bindable)</td><td>No</td
								><td>—</td><td>Bindable div reference</td></tr
							>
						</tbody>
					</table>
				</div>
				<div class="charts-grid" style="margin-top: 1rem;">
					<div class="chart-card">
						<BarChart
							series={barSeries}
							categories={barCategories}
							title="Bar Chart"
							options={presetTheme ? { theme: presetTheme } : {}}
						/>
					</div>
					<div class="chart-card">
						<BarChart
							series={barSeries}
							categories={barCategories}
							title="Horizontal Bar Chart"
							horizontal
							options={presetTheme ? { theme: presetTheme } : {}}
						/>
					</div>
				</div>
			</div>

			<div class="preset-section">
				<h3>AreaChart</h3>
				<pre><code
						>{`<script lang="ts">
  import { AreaChart } from '@ariefsn/svelte-apexcharts';

  const series = [{ name: 'Active Users', data: [31, 40, 28, 51, 42, 109, 100] }];
  const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
<\\/script>

<AreaChart {series} {categories} title="Weekly Active Users" />`}</code
					></pre>
				<div class="table-wrap" style="margin-top: 1rem;">
					<table>
						<thead>
							<tr
								><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr
							>
						</thead>
						<tbody>
							<tr
								><td><code>series</code></td><td><code>ApexOptions['series']</code></td><td>Yes</td
								><td>—</td><td>Chart series data</td></tr
							>
							<tr
								><td><code>categories</code></td><td><code>string[]</code></td><td>Yes</td><td>—</td
								><td>X-axis categories</td></tr
							>
							<tr
								><td><code>title</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>Chart title</td
								></tr
							>
							<tr
								><td><code>options</code></td><td><code>Partial&lt;ApexOptions&gt;</code></td><td
									>No</td
								><td><code>{JSON.stringify({})}</code></td><td>Override any ApexCharts option</td
								></tr
							>
							<tr
								><td><code>id</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>HTML id for chart container</td
								></tr
							>
							<tr
								><td><code>class</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>CSS class(es)</td
								></tr
							>
							<tr
								><td><code>node</code></td><td><code>HTMLDivElement</code> (bindable)</td><td>No</td
								><td>—</td><td>Bindable div reference</td></tr
							>
						</tbody>
					</table>
				</div>
				<div class="chart-card" style="margin-top: 1rem;">
					<AreaChart
						series={areaSeries}
						categories={areaCategories}
						title="Area Chart"
						options={presetTheme ? { theme: presetTheme } : {}}
					/>
				</div>
			</div>

			<div class="preset-section">
				<h3>PieChart</h3>
				<pre><code
						>{`<script lang="ts">
  import { PieChart } from '@ariefsn/svelte-apexcharts';

  const data = [
    { label: 'Product A', value: 44, color: '#008FFB' },
    { label: 'Product B', value: 55, color: '#00E396' },
    { label: 'Product C', value: 41 }
  ];
<\\/script>

<PieChart {data} title="Product Distribution" />`}</code
					></pre>
				<div class="table-wrap" style="margin-top: 1rem;">
					<table>
						<thead>
							<tr
								><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr
							>
						</thead>
						<tbody>
							<tr
								><td><code>data</code></td><td
									><code>{`{ label: string; value: number; color?: string }[]`}</code></td
								><td>Yes</td><td>—</td><td>Slice data with optional per-slice colors</td></tr
							>
							<tr
								><td><code>title</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>Chart title</td
								></tr
							>
							<tr
								><td><code>options</code></td><td><code>Partial&lt;ApexOptions&gt;</code></td><td
									>No</td
								><td><code>{JSON.stringify({})}</code></td><td>Override any ApexCharts option</td
								></tr
							>
							<tr
								><td><code>id</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>HTML id for chart container</td
								></tr
							>
							<tr
								><td><code>class</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>CSS class(es)</td
								></tr
							>
							<tr
								><td><code>node</code></td><td><code>HTMLDivElement</code> (bindable)</td><td>No</td
								><td>—</td><td>Bindable div reference</td></tr
							>
						</tbody>
					</table>
				</div>
				<div class="chart-card" style="margin-top: 1rem;">
					<PieChart
						data={pieData}
						title="Pie Chart"
						options={presetTheme ? { theme: presetTheme } : {}}
					/>
				</div>
			</div>

			<div class="preset-section">
				<h3>DonutChart</h3>
				<pre><code
						>{`<script lang="ts">
  import { DonutChart } from '@ariefsn/svelte-apexcharts';

  const data = [
    { label: 'Series A', value: 44 },
    { label: 'Series B', value: 55 },
    { label: 'Series C', value: 41 }
  ];
<\\/script>

<DonutChart {data} title="Distribution" />`}</code
					></pre>
				<div class="table-wrap" style="margin-top: 1rem;">
					<table>
						<thead>
							<tr
								><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr
							>
						</thead>
						<tbody>
							<tr
								><td><code>data</code></td><td
									><code>{`{ label: string; value: number; color?: string }[]`}</code></td
								><td>Yes</td><td>—</td><td>Slice data with optional per-slice colors</td></tr
							>
							<tr
								><td><code>title</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>Chart title</td
								></tr
							>
							<tr
								><td><code>options</code></td><td><code>Partial&lt;ApexOptions&gt;</code></td><td
									>No</td
								><td><code>{JSON.stringify({})}</code></td><td>Override any ApexCharts option</td
								></tr
							>
							<tr
								><td><code>id</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>HTML id for chart container</td
								></tr
							>
							<tr
								><td><code>class</code></td><td><code>string</code></td><td>No</td><td>—</td><td
									>CSS class(es)</td
								></tr
							>
							<tr
								><td><code>node</code></td><td><code>HTMLDivElement</code> (bindable)</td><td>No</td
								><td>—</td><td>Bindable div reference</td></tr
							>
						</tbody>
					</table>
				</div>
				<div class="chart-card" style="margin-top: 1rem;">
					<DonutChart
						data={donutData}
						title="Donut Chart"
						options={presetTheme ? { theme: presetTheme } : {}}
					/>
				</div>
			</div>
		</section>

		<section>
			<h2>Live Examples</h2>
			<p class="hint">Toggle dark mode above to see reactive updates across all charts.</p>

			<div class="charts-grid">
				<div class="chart-card">
					<Chart options={lineOptions} />
				</div>
				<div class="chart-card">
					<Chart options={barOptions} />
				</div>
				<div class="chart-card">
					<Chart options={areaOptions} />
				</div>
				<div class="chart-card">
					<Chart options={donutOptions} />
				</div>
				<div class="chart-card">
					<Chart options={radarOptions} />
				</div>
				<div class="chart-card">
					<Chart options={heatmapOptions} />
				</div>
			</div>
		</section>
	</main>

	<footer class="footer">
		<p>
			MIT License &mdash; &copy; 2026
			<a href="https://github.com/ariefsn" target="_blank" rel="noopener noreferrer"
				>Arief Setiyo Nugroho</a
			>
			&mdash;
			<a
				href="https://github.com/ariefsn/svelte-apexcharts"
				target="_blank"
				rel="noopener noreferrer">GitHub</a
			>
		</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.page {
		background: #fff;
		color: #111;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.page.dark {
		background: #1a1a2e;
		color: #e0e0e0;
	}

	/* ---- Header ---- */
	.header {
		padding: 2rem 2rem 1.5rem;
		border-bottom: 1px solid #e8e8e8;
	}

	.page.dark .header {
		border-color: #333;
	}

	.header-top {
		display: flex;
		align-items: flex-start;
		gap: 1.25rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.logo {
		width: 72px;
		height: 72px;
		flex-shrink: 0;
		border-radius: 14px;
	}

	.header-text {
		flex: 1;
		min-width: 0;
	}

	.header-text h1 {
		font-size: clamp(1.25rem, 4vw, 1.9rem);
		margin: 0 0 0.3rem;
		word-break: break-word;
	}

	.header-text p {
		margin: 0 0 0.75rem;
		color: #555;
		font-size: 0.95rem;
	}

	.page.dark .header-text p {
		color: #aaa;
	}

	.header-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.gh-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.4rem 1rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		background: #f8f8f8;
		color: #111;
		text-decoration: none;
		font-size: 0.875rem;
		cursor: pointer;
	}

	.page.dark .gh-link {
		background: #2a2a4a;
		color: #e0e0e0;
		border-color: #555;
	}

	.gh-link:hover {
		background: #eee;
	}

	.page.dark .gh-link:hover {
		background: #383860;
	}

	button {
		padding: 0.4rem 1rem;
		border-radius: 6px;
		border: 1px solid #ccc;
		background: #fff;
		cursor: pointer;
		font-size: 0.875rem;
		color: inherit;
	}

	.page.dark button {
		background: #2a2a4a;
		color: #e0e0e0;
		border-color: #555;
	}

	/* ---- Main ---- */
	.container {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
		box-sizing: border-box;
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: 1.3rem;
		margin: 0 0 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #e0e0e0;
	}

	.page.dark h2 {
		border-color: #444;
	}

	.hint {
		color: #666;
		margin: 0 0 1.25rem;
		font-size: 0.9rem;
	}

	.page.dark .hint {
		color: #aaa;
	}

	pre {
		background: #f4f4f4;
		border-radius: 6px;
		padding: 1rem 1.25rem;
		overflow-x: auto;
		font-size: 0.875rem;
		line-height: 1.6;
		margin: 0;
	}

	.page.dark pre {
		background: #0d0d1a;
	}

	code {
		font-family: 'Fira Code', 'Cascadia Code', monospace;
	}

	/* ---- Table ---- */
	.table-wrap {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	table {
		width: 100%;
		min-width: 480px;
		border-collapse: collapse;
		font-size: 0.875rem;
	}

	th,
	td {
		text-align: left;
		padding: 0.6rem 0.75rem;
		border: 1px solid #ddd;
		white-space: nowrap;
	}

	td:last-child {
		white-space: normal;
	}

	.page.dark th,
	.page.dark td {
		border-color: #444;
	}

	th {
		background: #f0f0f0;
		font-weight: 600;
	}

	.page.dark th {
		background: #2a2a4a;
	}

	/* ---- Preset sections ---- */
	.preset-section {
		margin-bottom: 2.5rem;
	}

	h3 {
		font-size: 1.05rem;
		margin: 0 0 0.75rem;
		color: #333;
	}

	.page.dark h3 {
		color: #ccc;
	}

	/* ---- Charts grid ---- */
	.charts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr));
		gap: 1.25rem;
	}

	.chart-card {
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 0.75rem;
		overflow: hidden;
		min-width: 0;
	}

	.page.dark .chart-card {
		border-color: #444;
		background: #16213e;
	}

	/* ---- Footer ---- */
	.footer {
		text-align: center;
		padding: 1.25rem 2rem;
		font-size: 0.85rem;
		color: #888;
		border-top: 1px solid #e8e8e8;
	}

	.page.dark .footer {
		border-color: #333;
		color: #666;
	}

	.footer a {
		color: inherit;
		text-decoration: underline;
	}

	/* ---- Mobile ---- */
	@media (max-width: 600px) {
		.header {
			padding: 1.25rem 1rem 1rem;
		}

		.logo {
			width: 52px;
			height: 52px;
		}

		.container {
			padding: 1.25rem 1rem;
		}

		pre {
			font-size: 0.78rem;
			padding: 0.75rem 0.875rem;
		}
	}
</style>
