<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';
	import { ACCORDION_CONTEXT_ID } from './Accordion.svelte';
	import { ACCORDION_ITEM_CONTEXT_ID } from './Item.svelte';
	import { useContext } from '../../utils/useContext';
	import type { Writable } from 'svelte/store';
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: ACCORDION_CONTEXT_ID,
		parent: 'Accordion',
		component: 'Accordion.Item.Title'
	});

	useContext({
		context_id: ACCORDION_ITEM_CONTEXT_ID,
		parent: 'Accordion.Item',
		component: 'Accordion.Item.Title'
	});

	const { open }: { open: Writable<boolean> } = getContext(ACCORDION_ITEM_CONTEXT_ID);

	const defaultClass =
		'relative flex items-center w-full py-4 px-5 text-base text-light-content dark:text-dark-content hover:text-primary dark:hover:text-primary text-left bg-light-surface dark:bg-dark-surface border-0 rounded-none justify-between  outline-none focus:outline-none';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<button
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
	class={finalClass}
	style={$$props.style}
	type="button"
>
	<slot />
	<span class="material-icons transition-transform duration-300" class:-rotate-180={$open}
		>expand_more</span
	>
</button>
