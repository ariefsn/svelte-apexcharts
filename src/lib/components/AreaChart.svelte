<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import Chart from './Chart.svelte';

	let {
		series,
		categories,
		title,
		id,
		class: className = '',
		node = $bindable<HTMLDivElement | undefined>(undefined),
		options: extraOptions = {}
	}: {
		series: ApexOptions['series'];
		categories: string[];
		title?: string;
		id?: string;
		class?: string;
		node?: HTMLDivElement;
		options?: Partial<ApexOptions>;
	} = $props();

	const options = $derived<ApexOptions>({
		chart: {
			type: 'area',
			toolbar: { show: true }
		},
		series,
		xaxis: { categories },
		title: { text: title },
		stroke: { curve: 'smooth' },
		fill: { type: 'gradient' },
		...extraOptions
	});
</script>

<Chart {id} {options} class={className} bind:node />
