import { createApp } from 'vue';
import './styles/reset.css';
import App from './App.vue';
// import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App);

// app.component('HelloWorld', HelloWorld); //регистрация на глобално ниво - Glob...

app.mount('#app');
