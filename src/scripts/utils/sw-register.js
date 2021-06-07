import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    console.log('Browser support Service Worker');
    return;
  }
  console.log('Service Worker not Support');
};

export default swRegister;
