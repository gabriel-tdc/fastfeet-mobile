import { combineReducers } from 'redux';

import auth from './auth/reducer';
import problem from './problem/reducer';

export default combineReducers({
    auth,
    problem,
});
