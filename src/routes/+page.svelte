<script>
	import Icon from '$lib/Icon.svelte';
	import Social from '$lib/Social.svelte';
</script>

<main>
	<div id="hi">
		<h1>Hi. We’re <green>Valera</green></h1>
		<Icon />
		<h1 class="wmpt-desktop">. We make payment tech.</h1>
		<h1 class="wmpt-mobile">.</h1>
	</div>
	<h1 class="wmpt-mobile">We make payment tech.</h1>
	<h1>
		From daily coffees ☕ to corporate treasuries 💼, we help people <grey
			><strike-through>trust</strike-through></grey
		>
		<green>verify</green> their money.
	</h1>
	<h1>We support the <green>1.7 billion</green> that banks rejected.</h1>
	<h1>
		And we help the <green>8 billion</green> protect themselves against cancerous inflation.
	</h1>

	<Social />
</main>

<style>
	main {
		margin: 24px 16px;
		/* Auto layout */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;
		/* Inside auto layout */
		flex: none;
			order: 0;
			flex-grow: 0;
	}
	@media screen and (min-width: 1280px) {
		main {
			gap: 16px;
			width: 1024px;
		}

		#hi {
			gap: 10px;
		}

		h1 {
			font-size: 48px;
			letter-spacing: -0.02em;
		}

		.wmpt-mobile {
			display: none;
		}

		strike-through {
			text-decoration-line: line-through;
			text-decoration-thickness: 3px;
		}
	}

	@media screen and (max-width: 1280px) {
		main {
			/* Auto layout */
			gap: 24px;
			/* Inside auto layout */
			align-self: stretch;

			max-width: 512px;
		}

		#hi {
			gap: 5px;
		}

		h1 {
			font-size: 32px;
			letter-spacing: -0.01em;
		}

		.wmpt-desktop {
			display: none;
		}

		strike-through {
			text-decoration-line: line-through;
			text-decoration-thickness: 1.5px;
		}
	}

	#hi {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px;

		/* Inside auto layout */
		flex: none;
		order: 0;
		flex-grow: 0;
		margin: 0px 0px;
	}

	h1 {
		font-family: 'GT Planar';
		font-style: normal;
		font-weight: 300;
		line-height: 125%;

		color: #ffffff;

		/* Inside auto layout */
		flex: none;
		order: 0;
		flex-grow: 0;

		margin: 0px 0px;

		user-select: none;
	}

	green {
		color: #48d597;
		color: color(display-p3 0.2824 0.8353 0.5922/1);
	}

	grey {
		color: #888888;
	}
</style>
