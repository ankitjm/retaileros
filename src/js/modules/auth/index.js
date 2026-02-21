import { state } from '../../state.js';
import { renderLogin } from './login.js';
import { renderRegister } from './register.js';

export { renderLogin } from './login.js';
export { renderRegister } from './register.js';

export function renderAuth() {
    if (state.authMode === 'register') {
        return renderRegister('mobile');
    }
    return renderLogin('mobile');
}
