import Vue from "vue"
import VueRouter from "vue-router"
import About from "../views/About.vue"
import Music from "../views/Music.vue"
import Resume from "../views/Resume.vue"
import PrivacyPolicy from "../views/PrivacyPolicy.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: PrivacyPolicy,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
