<script lang="ts" context="module">
	export let AUTOCOMPLETE_LIST_CONTEXT_ID = 'autocomplete-list-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { useContext } from '../../utils/useContext';
	import { AUTOCOMPLETE_CONTEXT_ID } from './Autocomplete.svelte';

	useContext({
		context_id: AUTOCOMPLETE_CONTEXT_ID,
		parent: 'Autocomplete',
		component: 'Autocomplete.List'
	});

	setContext(AUTOCOMPLETE_LIST_CONTEXT_ID, {
		list: true
	});

	const defaultclass =
		'origin-top-right absolute mt-1 z-10 border light-border dark:dark-border left-0 right-0 w-full p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface transition transform duration-150';
	const finalClass = twMerge(defaultclass, $$props.class);
</script>

<ul
	class={finalClass}
	style={$$props.style}
	in:scale={{ start: 0.9, duration: 150 }}
	out:scale={{ start: 0.95, duration: 150 }}
	role="listbox"
>
	<slot />
</ul>
