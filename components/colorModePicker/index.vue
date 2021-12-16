<template>
	<div class="light">
		<ul>
			<li
				v-for="color of colors"
				:key="color"
				@click="$colorMode.preference = color"
			> {{ color }}
			</li>
			
		</ul>
	</div>
	
</template>

<script>

export default {
	data() {
		return {
		colors: ['🌞', '🌙']
		}
	}
}

</script>

<style lang="scss" scoped>

	.light{
		display: inline-block;
	}

	ul {
		padding: 0;
		display: flex;
		display: inline-block;
		li{
			display: inline-block;
			list-style: none;
			margin: 0 10px;
			cursor: pointer;
		}
	}

</style>