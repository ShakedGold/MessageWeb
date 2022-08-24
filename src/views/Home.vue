<template>
	<div class="flex flex-col text-center absolute top-32 w-full h-full">
		<div>
			<h1 class="text-center text-slate-700 font-mono text-3xl relative">Home Page</h1>
		</div>
		<div>
			<h2 class="text-2xl font-mono">The Best Chat Web App to Ever Exist <i class="fa-solid fa-comment-dots animate-pulse"></i> </h2>
		</div>
		<div>
			<router-link to="/login"><Button class="bg-slate-800 text-white h-14 w-1/12 hover:bg-gray-100 hover:text-black active:scale-95 text-xl font-mono rounded-lg">Login</Button></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home-Page',
	}
</script>

<style>
	.flex > div {
		margin: 30px;
	}
</style>