<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'truncate text-sm font-medium text-light-secondary-content dark:text-dark-secondary-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dt class={finalClass} style={$$props.style}>
	<slot />
</dt>
