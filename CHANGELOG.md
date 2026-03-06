# Changelog

All notable changes to `@ariefsn/svelte-apexcharts` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-06

### Added

- Initial release of `@ariefsn/svelte-apexcharts`
- `Chart` component wrapping ApexCharts for Svelte 5
- Reactive `options` prop using `$effect` for automatic chart updates
- Bindable `node` prop exposing the underlying `HTMLDivElement`
- Support for `id` and `class` props on the chart container
- Dynamic import of ApexCharts for optimal code splitting
- Automatic chart cleanup via `onDestroy`
- `LineChart` preset component with smooth curve and toolbar defaults
- `BarChart` preset component with optional `horizontal` prop
- `AreaChart` preset component with gradient fill and smooth curve defaults
- `PieChart` preset component accepting `data` array with optional per-slice `color`
- `DonutChart` preset component accepting `data` array with optional per-slice `color`
- Docs page: Preset Components section with code examples, props tables, and live demos for all preset components
- Docs page: npm badge/link button in header
- OpenGraph and Twitter Card metadata in `app.html`
- Page `<title>` and `description` meta tag
