<template>
	<div>
		<div class="content">
			<div class="reelContent">
				<figcaption v-for="article in articles" :key="article.id">
					<!-- <button class="button supp">x</button> -->
					<h2> {{ article.title }} </h2>
					<p> {{ article.desc }} </p>
					
					<div class="flex action">
						<span> {{ article.author }} </span>
						<!-- <button class="button like">like</button>
						<p class="ctlike">1</p> -->
					</div>
				</figcaption>
			</div>
		</div>
	</div>
</template>

<script>

export default {

	data: () => ({
		title: '',
			desc: '',
			articles: []
		}),

	async fetch() {
		this.articles = await this.$axios.$get('http://localhost:3000/api/articles')
	},

}



</script>

<style lang="scss" scoped>

.content{

	justify-content: center;
	position: relative;
	background: var(--bg);
	color: var(--color);;
	margin-top: 5rem;
}

figcaption{
	margin-top: 6rem;
}

.fullStars {
	width: 20%;
	border : 1px solid var(--color-primary);
}
</style>