<script>
	import { projects } from '../config.js'
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const transition = (delay) => ({ y: -10, duration: 700, delay, easing: quintOut });

	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import carouselClassNames from 'embla-carousel-class-names'

	let plugins = [carouselClassNames()]

	let { emblaAPI = $bindable() } = $props();
	let currentlySelected = $state(0);
	let options = { loop: true, watchSlides: false };
	function initAPI(event) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }

	const onSlideMoved = () => 
		currentlySelected = emblaAPI.selectedScrollSnap();

	// Animate on load by forcing reaction
	let pageAnimation = $state(false);
	setTimeout(() => (pageAnimation = true), 1);
</script>

<svelte:head>
	<title>DerpyDoggo</title>
	<link rel="stylesheet" href="/css/vars.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/reset.css"/>
	<link rel="stylesheet" href="/css/main.css"/>
	<link rel="stylesheet" href="/css/carousel.css"/>
</svelte:head>

	<main>
		{#if pageAnimation}
			<div id="profile" in:fly|local={transition(500)}>
				<img src="/media/derpydoggo.jpeg" alt="DerpyDoggo's Profile"/>
				<h1>DerpyDoggo</h1>
				<h2>Awesome dev who makes games and other stuff</h2>
			</div>

			<div id="links" in:fly|local={transition(600)}>
				<a href="http://discordapp.com/users/587320323762946069" target="_blank" rel="noopener noreferrer"><img src="/media/icons/discord.svg" alt="Discord"/></a>
				<a href="https://github.com/DerpyDoggo11" target="_blank" rel="noopener noreferrer"><img src="/media/icons/github.svg" alt="GitHub"/></a>
				<a href="https://www.youtube.com/@derpydoggo11" target="_blank" rel="noopener noreferrer"><img src="/media/icons/youtube.svg" alt="YouTube"/></a>
			</div>

			<!-- Projects list -->
			<div style="position: relative;" in:fly|local={transition(900)}>
				<section class="embla" use:emblaCarouselSvelte={{ options, plugins }} onemblaInit={initAPI}>
					<div class="embla__container">
						{#each projects as { title, image }}
							<div class="embla__slide">
								<img src="/media/projects/{image}" alt="Image of {title}">
							</div>
						{/each}
					</div>
				</section>
				<button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>
				<button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
			</div>
			<section class="projectInfo" in:fly|local={transition(1100)}>
				{#if projects[currentlySelected].url}
					<a href={projects[currentlySelected].url} target="_blank" rel="noopener noreferrer"><h2>{projects[currentlySelected].title}</h2></a>
				{:else}
					<h2>{projects[currentlySelected].title}</h2>
				{/if}
				<p>{@html projects[currentlySelected].description}</p>
			</section>
		{/if}
	</main>

<footer>
	<p>Copyright (c) {new Date().getFullYear()} DerpyDoggo • All Rights Reserved <a href="https://github.com/DerpyDoggo11/derpydoggo" target="_blank" rel="noopener noreferrer">(Source)</a></p>
	<a href="https://amazinaxel.com" class="linkArrow" target="_blank" rel="noopener noreferrer">Website made by AmazinAxel (big bro)</a>
</footer>
