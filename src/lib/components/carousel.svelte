<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte';

  let { data, emblaAPI = $bindable() } = $props();
  let currentlySelected = $state(0);
  let options = { loop: true, watchSlides: false };
  function initAPI(event) { emblaAPI = event.detail; emblaAPI.on('select', onSlideMoved); }

  const onSlideMoved = () => 
    currentlySelected = emblaAPI.selectedScrollSnap();
</script>


<section class="embla" use:emblaCarouselSvelte={{ options }} onemblaInit={initAPI}>
  <div class="embla__container">
    {#each data as { title, description, image, url, lightBackground }}
      <div class="embla__slide">
        <div class="carouselContent" class:lightBackground={lightBackground}>
          {#if url}
            <div class="name"><a href={url}><h4>{title}</h4></a></div>
          {:else}
          <div class="name"><h4>{title}</h4></div>
          {/if}
          <p>{@html description}</p>
        </div>
        <img src="/media/projects/{image}" alt="Image of {title} - {description}">
      </div>
    {/each}
  </div>
  <button class="embla__prev" onclick={() => emblaAPI.scrollPrev()}><img class="noImgStyle" src="/media/icons/arrow-left.svg" alt="Left arrow"></button>
  <button class="embla__next" onclick={() => emblaAPI.scrollNext()}><img class="noImgStyle" src="/media/icons/arrow-right.svg" alt="Right arrow"></button>
</section>
