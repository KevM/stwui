<script lang="ts" context="module">
	export const POST_ACTIONS_CONTEXT_ID = 'post-actions-context-id';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { setContext } from 'svelte';
	import { POST_CONTEXT_ID } from './Post.svelte';
	import { useContext } from '../../utils/useContext';

	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	useContext({
		context_id: POST_CONTEXT_ID,
		parent: 'Post',
		component: 'Post.Actions'
	});

	setContext(POST_ACTIONS_CONTEXT_ID, {
		actions: true
	});

	const defaultClass =
		'flex flex-row h-14 justify-evenly divide-x divide-light-icon-background dark:divide-dark-icon-background first:rounded-t-md last:rounded-b-md';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	<slot />
</div>
