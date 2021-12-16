import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17e7ed58 = () => interopDefault(import('..\\pages\\blogText\\index.vue' /* webpackChunkName: "pages/blogText/index" */))
const _732fe534 = () => interopDefault(import('..\\pages\\blogVideo\\index.vue' /* webpackChunkName: "pages/blogVideo/index" */))
const _9cf9f978 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _5b3b7faa = () => interopDefault(import('..\\pages\\profil\\index.vue' /* webpackChunkName: "pages/profil/index" */))
const _318c8221 = () => interopDefault(import('..\\pages\\login\\admin\\index.vue' /* webpackChunkName: "pages/login/admin/index" */))
const _204df79c = () => interopDefault(import('..\\pages\\profil\\updateProfil.vue' /* webpackChunkName: "pages/profil/updateProfil" */))
const _5a05e467 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogText",
    component: _17e7ed58,
    name: "blogText"
  }, {
    path: "/blogVideo",
    component: _732fe534,
    name: "blogVideo"
  }, {
    path: "/login",
    component: _9cf9f978,
    name: "login"
  }, {
    path: "/profil",
    component: _5b3b7faa,
    name: "profil"
  }, {
    path: "/login/admin",
    component: _318c8221,
    name: "login-admin"
  }, {
    path: "/profil/updateProfil",
    component: _204df79c,
    name: "profil-updateProfil"
  }, {
    path: "/",
    component: _5a05e467,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
