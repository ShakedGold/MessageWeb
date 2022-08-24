<template>
	<div class="text-2xl font-mono flex flex-col text-center top-32 absolute w-full h-full">
		<h1>Login Page</h1>
		<form @submit="onSubmit">
		<div class="flex flex-col">
			<div>
				<h3>Email</h3>
			<input v-model="email" v-on:input="signalChange" type="email" name="email" id="email-form" placeholder="Enter your email..."
				class="w-1/2 text-center border-none outline-none">
			</div>

			<div>
				<h3>Password</h3>
			<input v-model="pass" v-on:input="signalChange" type="password" name="password" id="password-form"
				placeholder="Enter your password..." class="w-1/2 text-center border-none outline-none">
			</div>

			<div>
				<h3 :class="isLoginRight ? 'invisible' : 'visible'" class="text-red-600">Wrong Email or Password</h3>
				<br>
				<input type="submit" class="bg-slate-800 text-white h-14 w-1/12 hover:bg-gray-100 hover:text-black active:scale-95 rounded-lg">
			</div>
		</div>
		</form>
	</div>
</template>

<script>
import router from '../router'
export default {
	name: 'Login-Page',
	props: {
		override: Boolean,
	},
	data() {
		return {
			email: "",
			pass: "",
			isLoginRight: true,
		}
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			let [checkEmail, checkPass] = ["shaked@gmail.com", "shaked"]
			if (this.email === checkEmail && this.pass === checkPass) {
				this.isLoginRight = true;
				router.push({name: 'Chat', params: {didLogin: true, username: this.email.split('@')[0]}});
			}
			else if(this.email !== checkEmail || this.pass !== checkPass) {
				this.isLoginRight = false;
				if(this.override) router.push({name: 'Chat', params: {didLogin: true, username: 'Shaked'}});
			}
		},
		signalChange() {
			this.isLoginRight = true;
		}
	}
}
</script>

<style>
.flex > div {
	margin: 40px;
}
</style>