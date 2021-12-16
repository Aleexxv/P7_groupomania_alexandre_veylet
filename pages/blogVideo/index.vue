<template>
	<div>
		<div class="inscription">
			<h1>Fonctionnalité en cours de création inscrivez-vous pour être tenu informé de son lancement 😀</h1>
			<form action="inscription">
				<input type="email" placeholder="Votre email">
				<button class="button"> Inscrivez-moi !</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>

div{
	width: 100vw;
	height: 100vh;
	background: var(--bg);
}

.inscription{
	position: absolute;
	left: 50%;
	top: 90%;
	transform: translate(-50%, -50%);
	color: var(--color);
	text-align: center;
	width: 70%;
}

	.button{
		position: relative;
		left: 0%;
		transform: translate(0);
	}

</style>