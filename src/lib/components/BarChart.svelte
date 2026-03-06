<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import Chart from './Chart.svelte';

	let {
		series,
		categories,
		title,
		horizontal = false,
		id,
		class: className = '',
		node = $bindable<HTMLDivElement | undefined>(undefined),
		options: extraOptions = {}
	}: {
		series: ApexOptions['series'];
		categories: string[];
		title?: string;
		horizontal?: boolean;
		id?: string;
		class?: string;
		node?: HTMLDivElement;
		options?: Partial<ApexOptions>;
	} = $props();

	const options = $derived<ApexOptions>({
		chart: {
			type: 'bar',
			toolbar: { show: true }
		},
		plotOptions: {
			bar: { horizontal }
		},
		series,
		xaxis: { categories },
		title: { text: title },
		...extraOptions
	});
</script>

<Chart {id} {options} class={className} bind:node />
