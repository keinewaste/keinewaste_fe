import App from './react/containers/App';
import configureStore from './react/store/configure-store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
export { App, configureStore };