<template>
	<Login override="true"/>
	<div class="flex justify-center">
		<footer class="fixed bottom-5">
			<router-link to="/">
				<Button class="bg-slate-800 text-white w-32 h-12 hover:bg-gray-100 hover:text-black active:scale-95 text-2xl font-mono rounded-lg">Back</Button>
			</router-link>
		</footer>
	</div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
	name:'Login-Page',
	components: {
		Login,
	}
}
</script>