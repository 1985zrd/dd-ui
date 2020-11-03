import { createLocalVue, mount } from '@vue/test-utils'

import ddUi from '../../src/index.js'

const localVue = createLocalVue()

localVue.use(ddUi);

/**
 * 创建一个 wrapper
 * @param {Object} Comp 组件对象
 * @param {Object} propsData props 数据
 * @return {Object} wrapper
 */
export const createWrapper = function (Comp, propsData = {}) {
  const wrapper = mount(Comp, { // 有element-ui，必须用mount，不能用shallowMount，不然找不到element-ui元素
    localVue,
    ...propsData
  })

  return wrapper
}
