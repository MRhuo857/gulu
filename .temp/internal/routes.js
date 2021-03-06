/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\mr.huo\\Desktop\\gulu\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-6a317ff4",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a317ff4").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-535973f4",
    path: "/components/button.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-535973f4").then(next)
    },
  },
  {
    name: "v-0e404ed8",
    path: "/components/collapse.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0e404ed8").then(next)
    },
  },
  {
    name: "v-156da8f4",
    path: "/components/layout.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-156da8f4").then(next)
    },
  },
  {
    name: "v-22945344",
    path: "/components/input.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22945344").then(next)
    },
  },
  {
    name: "v-5f08e398",
    path: "/components/grid.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5f08e398").then(next)
    },
  },
  {
    name: "v-376cc934",
    path: "/components/tabs.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-376cc934").then(next)
    },
  },
  {
    name: "v-17865330",
    path: "/components/popover.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-17865330").then(next)
    },
  },
  {
    name: "v-23fdbe64",
    path: "/components/toast.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-23fdbe64").then(next)
    },
  },
  {
    name: "v-6d0c05c9",
    path: "/install/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6d0c05c9").then(next)
    },
  },
  {
    path: "/install/index.html",
    redirect: "/install/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]