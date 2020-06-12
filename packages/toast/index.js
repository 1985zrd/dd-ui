import Vue from 'vue';
import Toast from './src/toast'


const toastConstructor =  Vue.extend(Toast);
let instance;

let toast = function(options = {}) {
  if(!instance) {
    instance = new toastConstructor({
      el: document.createElement('div')
    });
  }

  if(instance.show === true) return;

  instance.message = options.message;
  instance.show = true;
  document.body.appendChild(instance.$el)

  let timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
  }, options.duration || 2000);
}

export default toast
