export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'groupomania',
		htmlAttrs: {
			lang: 'fr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap' },
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/main.scss'
	],

	loading: {
		color: '#FFF78C',
		height: '100px'
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

	buildModules : [ 
		'nuxt-gsap-module',
		'@nuxtjs/color-mode',
	// '@nuxtjs/eslint-module'
	],

	gsap : { 
		extraPlugins : { 
			scrollTo : true , 
			scrollTrigger : true,
			cssRules : true
		} , 
		extraEases : { 
			expoScaleEase : true 
		} 
	},
	
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/auth-next'
	],

	router: {
		middleware: ['auth']
	},

	axios: { baseURL: "http://process.env.HOST:process.env.DB_PORT/" },


	serverMiddleware: [
		{ path: '/serverMiddleware',
		path: 'api',
		handler: '~/serverMiddleware/api'
		},
	],
	

	fontawesome: {
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

}
