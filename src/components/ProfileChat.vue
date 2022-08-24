<template>
	<div class="flex flex-row bg-slate-800 w-1/12 h-10 rounded-xl justify-between shadow-2xl">
		<img src="https://source.unsplash.com/random/?pattern" alt="" class="object-fit w-8 h-8 rounded-full self-center">
		<h3 class="relative self-center right-2 text-white">{{username}}</h3>
	</div>
</template>

<script>
	export default {
		name: 'Profile-Chat',
		props: {
			username: String,
		}
	}
</script>

<style scoped>

.flex > * {
	margin: 8px;
}

</style>