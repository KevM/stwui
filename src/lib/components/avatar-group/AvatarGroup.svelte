<script lang="ts" context="module">
	export const AVATAR_GROUP_CONTEXT_ID = 'avatar-group-context-id';
</script>

<script lang="ts">
	import { setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';

	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	setContext(AVATAR_GROUP_CONTEXT_ID, {
		avatarGroup: true,
		shape,
		size
	});

	let defaultClass = '';
	if (size === 'xs') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-1';
	} else if (size === 'sm' || size === 'md') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-2';
	} else if (size === 'lg' || size === 'xl') {
		defaultClass = 'flex overflow-hidden p-0.5 -space-x-3';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
