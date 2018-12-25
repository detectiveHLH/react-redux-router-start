import { combineReducers } from 'redux';
import Wechat from './wechat';
import Base from './base';

export default combineReducers({
  wechat: Wechat,
  base: Base
});