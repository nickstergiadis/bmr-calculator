import ReactDOM from 'react-dom/client';
import { Widget } from './Widget';
import widgetStyles from './widget.css?inline';

function mountWidget(host: HTMLElement) {
  if (host.dataset.bmrMounted === 'true') return;
  host.dataset.bmrMounted = 'true';

  const shadow = host.shadowRoot ?? host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = widgetStyles;

  const root = document.createElement('div');
  root.className = 'bmr-widget-root';

  shadow.append(style, root);
  ReactDOM.createRoot(root).render(<Widget />);
}

function mountAllWidgets() {
  document.querySelectorAll<HTMLElement>('[data-bmr-calculator]').forEach(mountWidget);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAllWidgets, { once: true });
} else {
  mountAllWidgets();
}
