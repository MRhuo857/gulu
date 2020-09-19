import Toast from "./toast";


let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      console.log(currentToast);
      currentToast = createToast({Vue, propsData: toastOptions, message})
    }
  }
}

function createToast({Vue, propsData, message}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}