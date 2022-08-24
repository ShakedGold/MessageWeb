<template>
	<ProfileChat :username="username"/>
	<div class="flex flex-col w-screen">
		<footer class="fixed bottom-5 w-full">
			<input :style="rtl" v-model="message" type="text" name="message" maxlength="4096" class="bg-slate-200 h-12 w-5/6 rounded-lg" v-on:input="checkLang">
			<Button class="ml-5 bg-slate-800 text-white h-12 w-1/12 hover:bg-gray-100 hover:text-black active:scale-95 text-xl font-mono rounded-lg">Send</Button>
		</footer>
	</div>
</template>

<script>
import ProfileChat from "../components/ProfileChat.vue";
import router from '../router'
export default {
	name: "Chat-Page",
	props: {
		didLogin: Boolean,
		username: String,
	},
	components: { ProfileChat },
	beforeMount() {
		if (!this.didLogin)
			router.push('/notfound');
	},
	data() {
		return {
			message: "",
			rtl: "",
		}
	},
	methods: {
		checkLang() {
			if(this.message.length != 1) return;
			const language = require("language-identifier");
			const lang = language.identify(this.message).split(' | ')[0]
			this.rtl = lang === 'Hebrew' || lang === 'Arabic' ? "direction: rtl;" : "direction: ltr;";
		}
	}
}
</script>

<style scoped>
.flex > *{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>