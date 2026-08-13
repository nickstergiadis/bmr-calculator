import ReactDOM from 'react-dom/client';
import { Widget } from './Widget';
import styles from './index.css?inline';

function mount(host: HTMLElement) {
  if (host.dataset.bmrMounted === 'true') return;
  host.dataset.bmrMounted = 'true';

  const shadow = host.shadowRoot ?? host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = styles;

  const root = document.createElement('div');
  shadow.append(style, root);
  ReactDOM.createRoot(root).render(<Widget />);
}

function init() {
  document.querySelectorAll<HTMLElement>('[data-bmr-calculator]').forEach(mount);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
