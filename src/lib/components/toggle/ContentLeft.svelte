<script lang="ts">
	import { TOGGLE_CONTEXT_ID } from './Toggle.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	useContext({
		context_id: TOGGLE_CONTEXT_ID,
		parent: 'Toggle',
		component: 'Toggle.ContentLeft'
	});

	const { name, toggleOff }: { name: string; toggleOff: () => void } =
		getContext(TOGGLE_CONTEXT_ID);

	const defaultClass = 'mr-3';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style} id="{name}-label-left" on:click={toggleOff}>
	<slot name="label" />
	<slot name="description" />
</span>
