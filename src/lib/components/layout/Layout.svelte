<script lang="ts" context="module">
	export const LAYOUT_CONTEXT_ID = 'layout-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	let sideBarWidth = writable('212');

	function toggleSidebarWidth() {
		if ($sideBarWidth === '212') {
			$sideBarWidth = '72';
		} else {
			$sideBarWidth = '212';
		}
	}

	setContext(LAYOUT_CONTEXT_ID, {
		layout: true,
		sideBarWidth,
		toggleSidebarWidth
	});

	const defaultClass = 'w-full h-full flex flex-col';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
