<template>
	<div class="text-2xl font-mono">
		<h1>Login Page</h1>
		<form @submit="onSubmit">
			<br>
			<h3>Email</h3>
			<input v-model="email" type="email" name="email" id="email-form" placeholder="Enter your email..." class="w-1/2 text-center border-none outline-none">
			<br><br>
			<h3>Password</h3>
			<input v-model="pass" type="password" name="password" id="password-form" placeholder="Enter your password..." class="w-1/2 text-center border-none outline-none">
			<br><br>
			<input type="submit" class="bg-slate-800 text-white h-14 w-1/12 hover:bg-gray-100 hover:text-black active:scale-95">
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Login-Page',
		
		data() {
			return {
				email: "",
				pass: "",
			}
		},
		methods: {
			onSubmit(e) {
				e.preventDefault();
			}
		}
	}
</script>