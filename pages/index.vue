<template>
	<div>
		<div class="blog">
			<div>
				<NuxtLink to="/blogVideo">
					<video autoplay relaod muted class="img">
						<source src="~assets/img/blogVideo.mp4" type="video/mp4">
					</video>
				</NuxtLink>
			</div>
			<div>
				<NuxtLink to="/blogText">
					<img class="img" src="~assets/img/blogText.jpg" alt="">
				</NuxtLink>
			</div>
		</div>
	</div>

</template>

<script>

	export default {
		auth: 'guest',

		data() {
			return {
				
			}
		},
	}

</script>

<style lang="scss" scoped>

	.blog{
		display: flex;
		div{
			width: 50%;
			.img{
				width: 50%;
				height: 100%;
				object-fit: cover;
				position: absolute;
				top: 8.4%;
			}
		}
	}


	.gif{
		pointer-events: none
	}

</style>