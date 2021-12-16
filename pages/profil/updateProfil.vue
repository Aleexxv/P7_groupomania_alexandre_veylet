<template>
		<div class="content">
			<form class="form">
				<input v-model="firstName" type="text" placeholder="Nom">
				<input v-model="lastName" type="text" placeholder="Prénom">
				<input v-model="email" type="email" placeholder="Email">
				<input v-model="password" type="text" placeholder="Mot de passe">
				<input v-model="repeatPassword" type="text" placeholder="Répetez votre mot de passe">
				<button class="button" :class="{ 'buttonDisabled' : !updateProfil() }">Modifier mon profil</button>
			</form>
		</div>
</template>

<script>
export default {


	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			repeatPassword: ''
		}	
	},
	methods: {
		updateProfil() {
			const regEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g')
			const regPass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}')
			
			if(this.fisrtName && this.lastName && this.email && this.password && this.repeatPassword != '' && regEmail.test(this.email) && regPass.test(this.password) && (regPass.test(this.password) && this.password === this.repeatPassword)){
				return true;
			}
		}
	}
}

</script>

<style lang="scss" scoped>

	form{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}



</style>


