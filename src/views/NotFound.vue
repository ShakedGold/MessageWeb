<template>
	<div class="flex justify-center align-middle font-mono absolute w-full h-full text-center">
			<footer class="fixed bottom-52">
				<h1 class="text-3xl text-slate-800">404 Not Found</h1>
				<img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves" width="500" height="500" />
				<div class="flex justify-center align-middle">
					<footer class="fixed bottom-5">
						<router-link to="/">
							<Button
								class="bg-slate-800 text-white w-32 h-12 hover:bg-gray-100 hover:text-black active:scale-95 text-2xl font-mono rounded-lg">Home</Button>
						</router-link>
					</footer>
				</div>
			</footer>
		</div>
</template>

<script>
export default {
	name: 'Not-Found',
}
</script>