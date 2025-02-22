import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'solid' | 'ghost'",
		default: 'ghost'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Breadcrumbs.Crumb />'
	}
];

export const crumbProps: Prop[] = [
	{
		id: '1',
		prop: 'href',
		type: 'string',
		default: ''
	}
];

export const crumbSlots: Slot[] = [
	{
		id: '1',
		slot: 'divider',
		component: '<Breadcrumbs.Crumb.Divider slot="divider" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Breadcrumbs.Crumb.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'label',
		component: '<Breadcrumbs.Crumb.Label slot="label" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const exampleDefault = `
<script lang="ts">
	import { Breadcrumbs } from 'stwui';
   
   interface Crumb {
		icon?: MaterialIcon;
		label?: string;
		href: string;
	}

   const crumbs: Crumb[] = [
		{ icon: 'home', href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs>
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;

export const exampleSolid = `
<script lang="ts">
	import { Breadcrumbs } from 'stwui';
   
   interface Crumb {
		icon?: MaterialIcon;
		label?: string;
		href: string;
	}

   const crumbs: Crumb[] = [
		{ icon: 'home', href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs type="solid">
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;

export const exampleDivider = `
<script lang="ts">
	import { Breadcrumbs } from 'stwui';
   
   interface Crumb {
		icon?: MaterialIcon;
		label?: string;
		href: string;
	}

   const crumbs: Crumb[] = [
		{ icon: 'home', href: '/' },
		{ label: 'Projects', href: '/projecs' },
		{ label: 'Project Hero', href: '/projects/project-hero' }
	];
</script>

<Breadcrumbs type="solid" class="h-12">
	{#each crumbs as crumb}
		{#if crumb.icon && crumb.label}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{:else if crumb.icon}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Icon slot="icon" icon={crumb.icon} />
			</Breadcrumbs.Crumb>
		{:else}
			<Breadcrumbs.Crumb href={crumb.href}>
				<div slot="divider" class="divider">|</div>
				<Breadcrumbs.Crumb.Label slot="label">{crumb.label}</Breadcrumbs.Crumb.Label>
			</Breadcrumbs.Crumb>
		{/if}
	{/each}
</Breadcrumbs>`;
