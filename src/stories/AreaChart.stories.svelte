<script module>
	import AreaChart from '$lib/components/AreaChart.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Charts/AreaChart',
		component: AreaChart,
		tags: ['autodocs'],
		argTypes: {
			title: { control: 'text', description: 'Chart title' },
			id: { control: 'text', description: 'HTML id attribute' },
			strokeCurve: {
				control: 'select',
				options: ['smooth', 'straight', 'stepline', 'monotoneCubic'],
				description: 'Stroke interpolation style',
				table: { category: 'Visual' }
			},
			fillType: {
				control: 'select',
				options: ['gradient', 'solid', 'pattern'],
				description: 'Fill style under the area',
				table: { category: 'Visual' }
			},
			fillOpacity: {
				control: { type: 'range', min: 0, max: 1, step: 0.05 },
				description: 'Area fill opacity (for solid fill)',
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
			}
		}
	});
</script>

<!-- Default -->
<Story
	name="Default"
	args={{
		series: [{ name: 'Users', data: [31, 40, 28, 51, 42, 109, 100] }],
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		title: 'Daily Active Users'
	}}
/>

<!-- Multi Series -->
<Story
	name="Multi Series"
	args={{
		series: [
			{ name: 'New Users', data: [31, 40, 28, 51, 42, 109, 100] },
			{ name: 'Returning Users', data: [11, 32, 45, 32, 34, 52, 41] }
		],
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		title: 'User Breakdown'
	}}
/>

<!-- Solid Fill -->
<Story
	name="Solid Fill"
	args={{
		series: [{ name: 'Revenue', data: [4000, 6000, 5500, 8000, 7000, 9500, 11000] }],
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		title: 'Monthly Revenue',
		options: { fill: { type: 'solid', opacity: 0.4 } }
	}}
/>

<!-- Stepped Area -->
<Story
	name="Stepped"
	args={{
		series: [{ name: 'Stock Level', data: [100, 100, 80, 80, 60, 60, 40, 40, 20, 20] }],
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		title: 'Inventory Levels',
		options: { stroke: { curve: 'stepline' } }
	}}
/>

<!-- Dark Theme -->
<Story
	name="Dark Theme"
	args={{
		series: [
			{ name: 'Sessions', data: [45, 52, 38, 61, 70, 48, 91] },
			{ name: 'Page Views', data: [120, 130, 90, 140, 180, 110, 200] }
		],
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		title: 'Web Analytics (Dark)',
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
			{ name: 'New Users', data: [31, 40, 28, 51, 42, 109, 100] },
			{ name: 'Returning Users', data: [11, 32, 45, 32, 34, 52, 41] }
		],
		categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		title: 'Interactive Area Chart',
		strokeCurve: 'smooth',
		fillType: 'gradient',
		fillOpacity: 0.4,
		themeMode: 'light',
		showToolbar: true,
		showDataLabels: false
	}}
>
	{#snippet children({ args })}
		<AreaChart
			series={args.series}
			categories={args.categories}
			title={args.title}
			options={{
				chart: {
					background: args.themeMode === 'dark' ? '#1e1e2e' : 'transparent',
					toolbar: { show: args.showToolbar }
				},
				theme: { mode: args.themeMode },
				stroke: { curve: args.strokeCurve },
				fill: { type: args.fillType, opacity: args.fillOpacity },
				dataLabels: { enabled: args.showDataLabels }
			}}
		/>
	{/snippet}
</Story>
