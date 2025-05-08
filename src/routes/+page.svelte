<script>
	import { projects } from '../config.js'
	import { fade } from 'svelte/transition';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import carouselClassNames from 'embla-carousel-class-names'

	let plugins = [carouselClassNames()]

	let { emblaAPI = $bindable() } = $props();
	let currentlySelected = $state(0);
	let options = { loop: true, watchSlides: false };
	function initAPI(event) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }

	const onSlideMoved = () => 
		currentlySelected = emblaAPI.selectedScrollSnap();
</script>

<svelte:head>
	<title>DerpyDoggo</title>
	<link rel="stylesheet" href="/css/vars.css"/>
	<link rel="stylesheet" href="/css/typography.css"/>
	<link rel="stylesheet" href="/css/reset.css"/>
	<link rel="stylesheet" href="/css/main.css"/>
	<link rel="stylesheet" href="/css/carousel.css"/>
</svelte:head>

<main in:fade|local={{ duration: 150 }}>
	<div id="profile">
		<img src="/media/derpydoggo.jpeg" alt="DerpyDoggo's Profile"/>
		<h1>DerpyDoggo</h1>
		<h2>Awesome dev who makes games and other stuff</h2>
	</div>

	<div id="links">
		<a href="http://discordapp.com/users/587320323762946069"><img src="/media/icons/discord.svg" alt="Discord"/></a>
		<a href="https://www.youtube.com/@derpydoggo11"><img src="/media/icons/youtube.svg" alt="YouTube"/></a>
		<a href="https://github.com/DerpyDoggo11"><img src="/media/icons/github.svg" alt="GitHub"/></a>
	</div>

	<!-- Projects list -->
	<div style="position: relative;">
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
	<section class="projectInfo">
		{#if projects[currentlySelected].url}
			<a href={projects[currentlySelected].url}><h2>{projects[currentlySelected].title}</h2></a>
		{:else}
			<h2>{projects[currentlySelected].title}</h2>
		{/if}
		<p>{@html projects[currentlySelected].description}</p>
	</section>
</main>

<footer>
	<p>Copyright (c) {new Date().getFullYear()} DerpyDoggo • All Rights Reserved <a href="https://github.com/DerpyDoggo11/derpydoggo">(Source)</a></p>
	<a href="https://amazinaxel.com" class="linkArrow">Brother's site</a>
</footer>