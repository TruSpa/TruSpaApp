import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/servicesView.vue'
import aboutUsView from '../views/aboutUsView.vue'
import ContactUsView from '../views/contactUsView.vue'
import TherapistsView from '../views/therapistsView.vue'
import pageNotFoundView from '../views/pageNotFoundView.vue'
import commonUtils from '@/utils/common.js'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
      beforeEnter: () => {
        if (commonUtils.comData().data.display_page_rule.display_services_page === 'false') {
          return '/404'
        } else {
          return true
        }
      }
    },
    {
      path: '/therapists',
      name: 'therapists',
      component: TherapistsView,
      beforeEnter: () => {
        if (commonUtils.comData().data.display_page_rule.display_therapists_page === 'false') {
          return '/404'
        } else {
          return true
        }
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUsView,
      beforeEnter: () => {
        if (commonUtils.comData().data.display_aboutUs_page === 'false') {
          return '/404'
        } else {
          return true
        }
      }
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUsView
    },    {
      path: "/404",
      name: "404",
      component: pageNotFoundView
    },
    {
      path: "/:catchAll(.*)*",
      redirect: "/404"
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router
