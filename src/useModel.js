/**
* @overview react form hook for model binding
* @author shiwei.lv
*/

import React, { useState } from 'react';

/**
 * 表单数据绑定模型
 * @param {object} initvalue 初始化赋值
 */
export default function (initvalue = {}) {
  const [model, setModel] = useState(initvalue);

  const setModelWrapper = function() {
    // setModel(key, value)
    // set field individual
    if (typeof arguments[0] === 'string') {
      const name = arguments[0];
      const value = arguments[1];
      const tm = {...model};
      tm[name] = value;
      setModel(tm);
      return;
    }

    // setModel({...obj})
    // set entire model object
    if (typeof arguments[0] === 'object') {
      setModel({...model, ...arguments[0]});
      return;
    }
  };

  return [model, setModelWrapper];
}
