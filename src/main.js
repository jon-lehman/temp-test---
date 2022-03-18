import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'github pages'
	}
});

export default app;