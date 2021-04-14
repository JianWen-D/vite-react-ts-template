import {
  combineReducers
} from 'redux';

import common from './common/reducer'


const index = combineReducers({
  common,
});
export default index