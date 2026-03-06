<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import Chart from './Chart.svelte';

	let {
		data,
		title,
		id,
		class: className = '',
		node = $bindable<HTMLDivElement | undefined>(undefined),
		options: extraOptions = {}
	}: {
		data: { label: string; value: number; color?: string }[];
		title?: string;
		id?: string;
		class?: string;
		node?: HTMLDivElement;
		options?: Partial<ApexOptions>;
	} = $props();

	const options = $derived<ApexOptions>({
		chart: {
			type: 'donut',
			toolbar: { show: true }
		},
		series: data.map((item) => item.value),
		labels: data.map((item) => item.label),
		colors: data.every((item) => item.color) ? data.map((item) => item.color as string) : undefined,
		title: { text: title },
		...extraOptions
	});
</script>

<Chart {id} {options} class={className} bind:node />
