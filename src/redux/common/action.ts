// 如下代码为一个action创建函数的结构，作用就是返回action对象
import Type from '../actionTypes';

/**
 * @func
 * @desc 更新用户信息
 * @param data 
 */
export function template(data: String) {
  return {
    type: Type.TEMPLATE,
    data
  };
};