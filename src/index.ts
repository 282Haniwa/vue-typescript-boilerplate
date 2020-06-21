import Vue from 'vue';
import Hello from './components/Hello';

const vue = new Vue({
  el: '#app',
  components: { Hello },
  data: {
    name: 'World',
  },
  template: `
    <div>
      <hello :name="name"/>
      Name: <input v-model="name" type="text">
    </div>`,
});
