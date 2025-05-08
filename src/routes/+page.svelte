<script>
	import Carousel from '$lib/carousel.svelte';
	import { projects } from '$lib/config.js'
	import { fade } from 'svelte/transition';
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

	<!-- Projects list -->
	<Carousel data={projects}></Carousel>

	<div id="links">
		<a href="http://discordapp.com/users/587320323762946069"><img src="/media/icons/discord.svg" alt="Discord"/></a>
		<a href="https://www.youtube.com/@derpydoggo11"><img src="/media/icons/youtube.svg" alt="YouTube"/></a>
		<a href="https://github.com/DerpyDoggo11"><img src="/media/icons/github.svg" alt="GitHub"/></a>
	</div>
</main>

<footer>
	<p>Copyright (c) {new Date().getFullYear()} DerpyDoggo • All Rights Reserved <a href="https://github.com/DerpyDoggo11/derpydoggo">(Source)</a></p>
	<a href="https://amazinaxel.com">Brother's site</a>
</footer>