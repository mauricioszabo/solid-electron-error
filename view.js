const {createSignal, onCleanup } = require('solid-js');
const { render } = require('solid-js/web/dist/web.cjs');
const h = require('solid-js/h');
const patchedH = require('./patched-h');

function AppUnpatched() {
    const [c, setC] = createSignal(0);
    const i = setInterval(
        () => { setC(c => c + 1); },
        1000
    );
    onCleanup(() => clearInterval(i));
    return h('div', 'contador: ', c)
}

try {
  render(AppUnpatched, document.getElementById('app'));
} catch (e) {
  document.getElementById('errors').innerText = e.message
}


function AppPatched() {
    const [c, setC] = createSignal(0);
    const i = setInterval(
        () => { setC(c => c + 1); },
        1000
    );
    onCleanup(() => clearInterval(i));
    return patchedH('div', 'contador: ', c)
}

render(AppPatched, document.getElementById('app'));
