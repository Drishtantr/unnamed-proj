import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

/* below function to DISPLAY floating window on screen when Or YouTube Video button pressed */
// function openWindow() {
//   const x = document.getElementById('floatwindow');
//   y = x.style.display = 'block';
//   return y;
// }

// /* below function to HIDE floating window on screen when cross button is pressed */
// function closeWindow() {
//   const x = document.getElementById('floatwindow');
//   y = x.style.display = 'none';
//   return y;
// }

// function videoclick(obj) {
//   document.getElementById('mycontainer').style.display = 'inline';
//   const myvideo = document.getElementById('match');
//   const reader = new FileReader();
//   reader.addEventListener('load', () => {
//     myvideo.play();
//   });
//   reader.readAsDataURL(obj.files[0]);
// }

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
