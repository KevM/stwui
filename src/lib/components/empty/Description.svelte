<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'mt-1 text-sm text-light-secondary-content dark:text-dark-secondary-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass}>
	<slot />
</p>
