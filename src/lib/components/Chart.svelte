<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
	import { onDestroy, onMount, untrack } from 'svelte';

	let {
		options,
		id,
		class: className = '',
		node = $bindable<HTMLDivElement | undefined>(undefined)
	}: {
		options: ApexOptions;
		id?: string;
		class?: string;
		node?: HTMLDivElement;
	} = $props();

	let chart = $state<ApexCharts | null>(null);

	const render = async () => {
		if (!node || !document.contains(node)) return;
		const mod = await import('apexcharts');
		const ApexCharts = mod.default;

		if (!document.contains(node)) return;

		try {
			chart = new ApexCharts(node, options);
			await chart.render();
		} catch {
			// ignore render errors in detached/test environments
		}
	};

	$effect(() => {
		if (options) {
			untrack(() => {
				chart?.updateOptions(options);
			});
		}
	});

	onMount(async () => {
		await render();
	});

	onDestroy(() => {
		chart?.destroy();
	});
</script>

<div {id} class={className} bind:this={node}></div>
