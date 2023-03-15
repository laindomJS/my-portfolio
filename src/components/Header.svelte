<script>
	import { onMount } from 'svelte';
	const stringDev = '<adr/dev>';

  let navElement;
  let buttonOpen;
  let buttonClose;
  
  onMount(() => {
    function showNavbar() {
      if (navElement.classList.contains('-translate-y-full')) {
        navElement.classList.replace('-translate-y-full', 'translate-y-0');
      }
    }

    function closeNavbar() {
      if (navElement.classList.contains('translate-y-0')) {
        navElement.classList.replace('translate-y-0', '-translate-y-full');
      }
    }

    buttonOpen.onclick = showNavbar;
    buttonClose.onclick = closeNavbar;
  })

</script>

<header class="w-full relative py-6 px-8 md:px-12 flex items-center justify-between md:border-2 border-white">
	<h1 class="font-bold font-merriweather text-xl text-yellow-400 w-fit">
		<a href="/">{stringDev}</a>
	</h1>

	<nav bind:this={navElement}
		class="transition-transform absolute top-0 left-0 md:relative flex flex-col items-center justify-center md:flex-row space-y-6 md:space-y-0 md:space-x-6 text-center w-full h-screen md:h-fit md:w-fit bg-white md:bg-transparent bg-opacity-10 backdrop-blur-lg -translate-y-full md:translate-y-0">
		<button bind:this={buttonClose} class="font-bold text-white top-10 right-10 absolute md:hidden">
      close
    </button>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="link" href="#">Projects</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="link" href="#">Contact</a>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="link" href="#">Download CV</a>
	</nav>

	<button bind:this={buttonOpen} class="font-bold text-white md:hidden">open</button>
</header>
