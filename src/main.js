import { mount } from 'svelte';
import '@fontsource-variable/fredoka';
import '@fontsource-variable/nunito';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import './app.css';
import App from './App.svelte';

export default mount(App, { target: document.getElementById('app') });
