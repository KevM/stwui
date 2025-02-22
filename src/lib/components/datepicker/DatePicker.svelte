<script lang="ts">
	import { getCalendarDays } from './date-utils';
	import { getInnerLocale } from './locale';
	import type { Locale } from './locale';
	import dayjs, { Dayjs } from 'dayjs';
	import { fly } from 'svelte/transition';
	import Card from '../card';
	import Button from '../button';

	export let value: Dayjs | null = null;
	export let handleSelect: (d: Dayjs) => void;
	export let min: Dayjs | undefined = undefined;
	export let max: Dayjs | undefined = undefined;
	export let locale: Locale = {};
	export let closeOnSelect = true;

	const defaultDate = dayjs();
	let browseDate = value ? value : defaultDate;
	let transitionDirection: 'forward' | 'reverse' = 'forward';
	let iLocale = getInnerLocale(locale);
	let calendarDays: Dayjs[] = [];

	function setValue(d: Dayjs) {
		if (!dayjs(d).isSame(value, 'day')) {
			browseDate = clamp(d);
			value = browseDate;
		}
	}

	function browse(d: Dayjs) {
		browseDate = clamp(d);
		if (!closeOnSelect && value) {
			setValue(browseDate);
		}
	}

	function clamp(d: Dayjs) {
		if (max && d.isAfter(max)) {
			return max;
		} else if (min && d.isBefore(min)) {
			return min;
		} else {
			return d;
		}
	}

	function setYear(date: Dayjs, operation: 'add' | 'subtract') {
		browseDate = browseDate[operation](1, 'year');
		browse(browseDate);
		if (operation === 'add') {
			transitionDirection = 'forward';
		} else {
			transitionDirection = 'reverse';
		}
		updateCalendarDays();
	}

	function setMonth(date: Dayjs, operation: 'add' | 'subtract') {
		browseDate = browseDate[operation](1, 'month');
		browse(browseDate);
		if (operation === 'add') {
			transitionDirection = 'forward';
		} else {
			transitionDirection = 'reverse';
		}
		updateCalendarDays();
	}

	function updateCalendarDays() {
		calendarDays = getCalendarDays(browseDate, iLocale.weekStartsOn);
	}

	function selectDay(calendarDay: Dayjs) {
		if (dayIsInRange(calendarDay)) {
			const currentMonth = browseDate.month();
			browseDate = calendarDay;
			const newMonth = browseDate.month();
			if (currentMonth !== newMonth) {
				if (currentMonth === 0 && newMonth === 11) {
					transitionDirection = 'reverse';
				} else if (currentMonth === 11 && newMonth === 0) {
					transitionDirection = 'forward';
				} else if (currentMonth < newMonth) {
					transitionDirection = 'forward';
				} else {
					transitionDirection = 'reverse';
				}
				updateCalendarDays();
			}
			setValue(browseDate);
			// dispatch('select');
			handleSelect(browseDate);
		}
	}

	function dayIsInRange(calendarDay: Dayjs) {
		const minDate: Dayjs | undefined = min ? min : undefined;
		const maxDate: Dayjs | undefined = max ? max : undefined;
		if (!minDate && !maxDate) {
			return true;
		}
		if (minDate && maxDate) {
			return calendarDay.isAfter(minDate) && calendarDay.isBefore(maxDate);
		} else if (minDate) {
			return calendarDay.isAfter(minDate);
		} else if (maxDate) {
			return calendarDay.isBefore(maxDate);
		}
		return true;
	}

	function shiftKeydown(e: KeyboardEvent) {
		if (e.shiftKey && e.key === 'ArrowUp') {
			const newBrowseDate = browseDate.subtract(1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, 'subtract');
				transitionDirection = 'reverse';
			}
		} else if (e.shiftKey && e.key === 'ArrowDown') {
			const newBrowseDate = browseDate.add(1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, 'add');
				transitionDirection = 'forward';
			}
		} else if (e.shiftKey && e.key === 'ArrowLeft') {
			const newBrowseDate = browseDate.subtract(1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, 'subtract');
				transitionDirection = 'reverse';
			}
		} else if (e.shiftKey && e.key === 'ArrowRight') {
			const newBrowseDate = browseDate.add(1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, 'add');
				transitionDirection = 'forward';
			}
		} else {
			return false;
		}
		e.preventDefault();
		updateCalendarDays();
		return true;
	}

	function keydown(event: unknown) {
		const e: KeyboardEvent = event as KeyboardEvent;
		let shift = e.shiftKey || e.altKey;
		if ((e.target as HTMLElement)?.tagName === 'SELECT') {
			return;
		}
		const currentMonth = browseDate.month();
		if (shift) {
			shiftKeydown(e);
			return;
		} else if (e.key === 'ArrowUp') {
			const newBrowseDate = browseDate.subtract(7, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = newBrowseDate;
				setValue(browseDate);
				transitionDirection = 'reverse';
			}
		} else if (e.key === 'ArrowDown') {
			const newBrowseDate = browseDate.add(7, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.add(7, 'days');
				transitionDirection = 'forward';
				setValue(browseDate);
			}
		} else if (e.key === 'ArrowLeft') {
			const newBrowseDate = browseDate.subtract(1, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.subtract(1, 'day');
				transitionDirection = 'reverse';
				setValue(browseDate);
			}
		} else if (e.key === 'ArrowRight') {
			const newBrowseDate = browseDate.add(1, 'days');
			if (dayIsInRange(newBrowseDate)) {
				browseDate = browseDate.add(1, 'day');
				transitionDirection = 'forward';
				setValue(browseDate);
			}
		} else if (e.key === 'Enter') {
			browseDate = browseDate;
			setValue(browseDate);
			handleSelect(browseDate);
		} else {
			return;
		}
		if (currentMonth !== browseDate.month()) {
			updateCalendarDays();
		}
		e.preventDefault();
	}

	function handleArrow(unit: 'year' | 'month', operation: 'add' | 'subtract') {
		if (unit === 'year') {
			const newBrowseDate = browseDate[operation](1, 'year');
			if (dayIsInRange(newBrowseDate)) {
				setYear(browseDate, operation);
			}
		} else if (unit === 'month') {
			const newBrowseDate = browseDate[operation](1, 'month');
			if (dayIsInRange(newBrowseDate)) {
				setMonth(browseDate, operation);
			}
		}
	}

	updateCalendarDays();

	// TODO: add month/year picker
	// TODO: add month/year quick pick by clicking title
</script>

<Card class="max-w-[300px] mt-1 w-[300px]" on:focusout tabindex="-1" on:keydown={keydown}>
	<div class="h-14 px-3 py-2 flex items-center">
		<Button
			size="xs"
			shape="circle"
			tabindex="-1"
			class="mr-1 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none"
			on:click={() => handleArrow('year', 'subtract')}
		>
			<Button.Icon slot="icon" icon="keyboard_double_arrow_left" />
		</Button>
		<Button
			size="xs"
			shape="circle"
			tabindex="-1"
			class="bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none"
			on:click={() => handleArrow('month', 'subtract')}
		>
			<Button.Icon slot="icon" icon="chevron_left" />
		</Button>
		<div class="flex-grow px-2 text-center font-medium relative overflow-hidden h-full">
			<!-- {#key calendarDays} -->
			<div
				class="absolute inset-0 flex items-center justify-center text-light-content dark:text-dark-content"
			>
				{iLocale.months[browseDate.month()]}
				{browseDate.year()}
			</div>
			<!-- {/key} -->
		</div>
		<Button
			size="xs"
			shape="circle"
			tabindex="-1"
			class="bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none"
			on:click={() => handleArrow('month', 'add')}
		>
			<Button.Icon slot="icon" icon="chevron_right" />
		</Button>
		<Button
			size="xs"
			shape="circle"
			tabindex="-1"
			class="ml-1 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none"
			on:click={() => handleArrow('year', 'add')}
		>
			<Button.Icon slot="icon" icon="keyboard_double_arrow_right" />
		</Button>
	</div>
	<div class="h-8 grid grid-cols-7 px-3 pt-2">
		{#each Array(7) as _, i}
			{#if i + iLocale.weekStartsOn < 7}
				<div class="w-full text-center text-sm">{iLocale.weekdays[iLocale.weekStartsOn + i]}</div>
			{:else}
				<div class="w-full text-center text-sm">
					{iLocale.weekdays[iLocale.weekStartsOn + i - 7]}
				</div>
			{/if}
		{/each}
	</div>
	<div class="overflow-hidden h-[224px] relative">
		{#key calendarDays}
			<div
				class="absolute inset-0 p-3"
				in:fly|local={{ x: transitionDirection === 'forward' ? -250 : 250, duration: 250 }}
				out:fly|local={{ x: transitionDirection === 'forward' ? 250 : -250, duration: 250 }}
			>
				{#each Array(5) as _, weekIndex}
					<div class="date-container flex items-center justify-evenly">
						{#each calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7) as calendarDay}
							{#if !dayIsInRange(calendarDay)}
								<span
									class="inactive w-full flex items-center justify-center h-10 rounded-none bg-light-icon-background dark:bg-dark-icon-background first-of-type:rounded-l-3xl last-of-type:rounded-r-3xl"
								>
									<span>{calendarDay.date()}</span>
								</span>
							{:else}
								<div
									class="active w-full flex items-center justify-center cursor-pointer h-10 rounded-full"
									on:click={() => selectDay(calendarDay)}
									class:text-primary-content={calendarDay.isSame(value, 'date')}
									class:hover:text-primary-content={calendarDay.isSame(value, 'date')}
									class:text-[rgba(0,0,0,0.35)]={calendarDay.month() !== browseDate.month()}
									class:dark:text-[rgba(255,255,255,0.35)]={calendarDay.month() !==
										browseDate.month()}
									class:text-light-content={calendarDay.month() === browseDate.month()}
									class:hover:bg-light-icon-background-hover={dayIsInRange(calendarDay) &&
										!calendarDay.isSame(value, 'date')}
									class:dark:text-dark-content={calendarDay.month() === browseDate.month()}
									class:dark:hover:bg-dark-icon-background-hover={dayIsInRange(calendarDay) &&
										!calendarDay.isSame(value, 'date')}
									class:border={calendarDay.isSame(defaultDate, 'day') &&
										!calendarDay.isSame(value, 'date')}
									class:border-primary={calendarDay.isSame(defaultDate, 'day') &&
										!calendarDay.isSame(value, 'date')}
									class:bg-primary={calendarDay.isSame(value, 'date')}
								>
									<span>{calendarDay.date()}</span>
								</div>
							{/if}
						{/each}
					</div>
				{/each}
			</div>
		{/key}
	</div>
	<!-- TODO: add timepicker -->
	<!-- <div class="px-3 pb-3 w-full">
		<Button class="w-full">4:00 PM</Button>
	</div> -->
	<!-- TODO: add actions row -->
	<!-- <div class="px-3 pb-3 gap-3 flex items-center justify-evenly w-full">
		<Button class="w-full">Clear</Button>
		<Button type="primary" class="w-full">Apply</Button>
	</div> -->
	<!-- TODO: add clear & apply buttons -->
	<!-- <div class="px-3 pb-3 gap-3 flex items-center justify-evenly w-full">
		<Button class="w-full">Clear</Button>
		<Button type="primary" class="w-full">Apply</Button>
	</div> -->
</Card>

<style lang="postcss">
	.date-container > .inactive + .inactive {
		@apply rounded-none;
	}

	.date-container > .inactive:first-of-type {
		@apply rounded-l-3xl;
	}

	.date-container > .inactive:last-of-type {
		@apply rounded-r-3xl;
	}
</style>
