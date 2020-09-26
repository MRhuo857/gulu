import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Sider from './sider'
import Footer from './footer'
import Content from './content'
import Header from './header'
import Toast from './toast'
import plugin from "./plugin";
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollaPseItem from './collapse-item'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-header',Header)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollaPseItem)
Vue.use(plugin)


new Vue({
  el: '#app',
  data: {
    selectedTab:'2',
  },
  created(){

  },
  methods:{
    show1(){
      this.show('top')
    },
    show2(){
      this.show('middle')
    },
    show3(){
      this.show('bottom')
    },
      show(position){
        this.$toast('你好',{
          position,
          enableHtml:false,
          closeButton:{
            text:'知道啦',
            callback(){
              console.log('他说知道了')
            }
          },
          autoClose:3,
        })
      }
  }
});
