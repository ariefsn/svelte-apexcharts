import { render } from 'vitest-browser-svelte';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Chart from './Chart.svelte';
import PieChart from './PieChart.svelte';
import BarChart from './BarChart.svelte';
import LineChart from './LineChart.svelte';
import AreaChart from './AreaChart.svelte';
import DonutChart from './DonutChart.svelte';

// Mock apexcharts to avoid rendering issues in test environment
const mockRender = vi.fn().mockResolvedValue(undefined);
const mockUpdateOptions = vi.fn().mockResolvedValue(undefined);
const mockDestroy = vi.fn();
const MockApexCharts = vi.fn().mockImplementation(() => ({
	render: mockRender,
	updateOptions: mockUpdateOptions,
	destroy: mockDestroy
}));

vi.mock('apexcharts', () => ({
	default: MockApexCharts
}));

beforeEach(() => {
	vi.clearAllMocks();
});

// ─── Chart (base component) ───────────────────────────────────────────────────

describe('Chart', () => {
	it('renders a div container', async () => {
		const { container } = render(Chart, {
			props: { options: { chart: { type: 'line' }, series: [] } }
		});
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('applies id prop to the div', async () => {
		const { container } = render(Chart, {
			props: { options: { series: [] }, id: 'my-chart' }
		});
		expect(container.querySelector('#my-chart')).toBeTruthy();
	});

	it('applies class prop to the div', async () => {
		const { container } = render(Chart, {
			props: { options: { series: [] }, class: 'custom-class' }
		});
		expect(container.querySelector('.custom-class')).toBeTruthy();
	});

	it('instantiates ApexCharts with the provided options on mount', async () => {
		const options = {
			chart: { type: 'line' as const },
			series: [{ name: 'Test', data: [1, 2, 3] }]
		};
		render(Chart, { props: { options } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: { type: 'line' } })
		);
		expect(mockRender).toHaveBeenCalledTimes(1);
	});

	it('calls chart.render() after instantiation', async () => {
		render(Chart, {
			props: { options: { series: [{ name: 'S', data: [10, 20] }] } }
		});

		await vi.waitFor(() => expect(mockRender).toHaveBeenCalledTimes(1));
	});

	it('calls updateOptions when the options prop changes', async () => {
		const initialOptions = { chart: { type: 'line' as const }, series: [] };
		const { rerender } = render(Chart, { props: { options: initialOptions } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));

		const newOptions = { chart: { type: 'bar' as const }, series: [] };
		await rerender({ options: newOptions });

		await vi.waitFor(() =>
			expect(mockUpdateOptions).toHaveBeenCalledWith(
				expect.objectContaining({ chart: { type: 'bar' } })
			)
		);
	});

	it('calls destroy on unmount', async () => {
		const { unmount } = render(Chart, {
			props: { options: { series: [] } }
		});

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		unmount();
		expect(mockDestroy).toHaveBeenCalledTimes(1);
	});

	it('does not throw when unmounted before ApexCharts initialises', () => {
		const { unmount } = render(Chart, {
			props: { options: { series: [] } }
		});
		expect(() => unmount()).not.toThrow();
	});
});

// ─── LineChart ────────────────────────────────────────────────────────────────

describe('LineChart', () => {
	const series = [{ name: 'Revenue', data: [100, 200, 150] }];
	const categories = ['Q1', 'Q2', 'Q3'];

	it('renders a div container', async () => {
		const { container } = render(LineChart, { props: { series, categories } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('derives chart type "line"', async () => {
		render(LineChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: expect.objectContaining({ type: 'line' }) })
		);
	});

	it('applies smooth stroke curve by default', async () => {
		render(LineChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ stroke: { curve: 'smooth' } })
		);
	});

	it('passes title to derived options', async () => {
		render(LineChart, { props: { series, categories, title: 'My Line Chart' } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ title: { text: 'My Line Chart' } })
		);
	});

	it('passes xaxis categories to derived options', async () => {
		render(LineChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ xaxis: { categories } })
		);
	});

	it('applies id prop', async () => {
		const { container } = render(LineChart, { props: { series, categories, id: 'line-chart' } });
		expect(container.querySelector('#line-chart')).toBeTruthy();
	});

	it('extraOptions override defaults via spread', async () => {
		render(LineChart, {
			props: {
				series,
				categories,
				options: { stroke: { curve: 'straight', width: 4 } }
			}
		});

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ stroke: { curve: 'straight', width: 4 } })
		);
	});
});

// ─── BarChart ─────────────────────────────────────────────────────────────────

describe('BarChart', () => {
	const series = [{ name: 'Sales', data: [10, 20, 30] }];
	const categories = ['Jan', 'Feb', 'Mar'];

	it('renders a div container', async () => {
		const { container } = render(BarChart, { props: { series, categories } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('derives chart type "bar"', async () => {
		render(BarChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: expect.objectContaining({ type: 'bar' }) })
		);
	});

	it('sets horizontal: false by default', async () => {
		render(BarChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ plotOptions: { bar: { horizontal: false } } })
		);
	});

	it('applies horizontal prop to plotOptions', async () => {
		render(BarChart, { props: { series, categories, horizontal: true } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ plotOptions: { bar: { horizontal: true } } })
		);
	});

	it('applies id prop', async () => {
		const { container } = render(BarChart, { props: { series, categories, id: 'bar-chart' } });
		expect(container.querySelector('#bar-chart')).toBeTruthy();
	});

	it('passes title to derived options', async () => {
		render(BarChart, { props: { series, categories, title: 'My Bar' } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ title: { text: 'My Bar' } })
		);
	});
});

// ─── AreaChart ────────────────────────────────────────────────────────────────

describe('AreaChart', () => {
	const series = [{ name: 'Users', data: [500, 700, 900] }];
	const categories = ['Jan', 'Feb', 'Mar'];

	it('renders a div container', async () => {
		const { container } = render(AreaChart, { props: { series, categories } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('derives chart type "area"', async () => {
		render(AreaChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: expect.objectContaining({ type: 'area' }) })
		);
	});

	it('uses gradient fill by default', async () => {
		render(AreaChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ fill: { type: 'gradient' } })
		);
	});

	it('applies smooth stroke curve by default', async () => {
		render(AreaChart, { props: { series, categories } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ stroke: { curve: 'smooth' } })
		);
	});
});

// ─── PieChart ─────────────────────────────────────────────────────────────────

describe('PieChart', () => {
	const data = [
		{ label: 'A', value: 10, color: '#ff0000' },
		{ label: 'B', value: 20, color: '#00ff00' },
		{ label: 'C', value: 30, color: '#0000ff' }
	];

	it('renders a div container', async () => {
		const { container } = render(PieChart, { props: { data } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('derives chart type "pie"', async () => {
		render(PieChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: expect.objectContaining({ type: 'pie' }) })
		);
	});

	it('maps data values to series', async () => {
		render(PieChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ series: [10, 20, 30] })
		);
	});

	it('maps data labels to labels array', async () => {
		render(PieChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ labels: ['A', 'B', 'C'] })
		);
	});

	it('includes colors when all items have a color', async () => {
		render(PieChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ colors: ['#ff0000', '#00ff00', '#0000ff'] })
		);
	});

	it('omits colors when not all items have a color', async () => {
		const mixedData = [
			{ label: 'A', value: 10, color: '#ff0000' },
			{ label: 'B', value: 20 }
		];
		render(PieChart, { props: { data: mixedData } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		const passedOptions = MockApexCharts.mock.calls[0][1];
		expect(passedOptions.colors).toBeUndefined();
	});

	it('renders without colors when none are provided', async () => {
		const noColorData = [
			{ label: 'A', value: 10 },
			{ label: 'B', value: 20 }
		];
		const { container } = render(PieChart, { props: { data: noColorData } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('applies id prop', async () => {
		const { container } = render(PieChart, { props: { data, id: 'pie-chart' } });
		expect(container.querySelector('#pie-chart')).toBeTruthy();
	});

	it('passes title to derived options', async () => {
		render(PieChart, { props: { data, title: 'My Pie' } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ title: { text: 'My Pie' } })
		);
	});
});

// ─── DonutChart ───────────────────────────────────────────────────────────────

describe('DonutChart', () => {
	const data = [
		{ label: 'X', value: 50, color: '#aabbcc' },
		{ label: 'Y', value: 50, color: '#ddeeff' }
	];

	it('renders a div container', async () => {
		const { container } = render(DonutChart, { props: { data } });
		expect(container.querySelector('div')).toBeTruthy();
	});

	it('derives chart type "donut"', async () => {
		render(DonutChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ chart: expect.objectContaining({ type: 'donut' }) })
		);
	});

	it('maps data values to series', async () => {
		render(DonutChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ series: [50, 50] })
		);
	});

	it('includes colors when all items have a color', async () => {
		render(DonutChart, { props: { data } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		expect(MockApexCharts).toHaveBeenCalledWith(
			expect.any(HTMLElement),
			expect.objectContaining({ colors: ['#aabbcc', '#ddeeff'] })
		);
	});

	it('omits colors when not all items have a color', async () => {
		const mixedData = [
			{ label: 'X', value: 50 },
			{ label: 'Y', value: 50, color: '#aabbcc' }
		];
		render(DonutChart, { props: { data: mixedData } });

		await vi.waitFor(() => expect(MockApexCharts).toHaveBeenCalledTimes(1));
		const passedOptions = MockApexCharts.mock.calls[0][1];
		expect(passedOptions.colors).toBeUndefined();
	});
});
