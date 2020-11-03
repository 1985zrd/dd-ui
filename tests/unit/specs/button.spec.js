import { createWrapper } from '../util'
import Button from '@/button'

describe('Button', () => {
  let wrapper
  afterEach(() => {
    wrapper.destroy()
  })

  it('create', () => {
    wrapper = createWrapper(Button)
    expect(wrapper.classes()).toContain('d-button')
    expect(wrapper.classes()).toContain('d-button--primary')
  })
  it('slots', () => {
    const wrapper = createWrapper(Button, {
      slots: {
        default: '按钮'// 自定义slots内容
      }
    })
    const button = wrapper.find('button')
    expect(button.text()).toBe('按钮')
  
    wrapper.destroy()
  })
  it('click', async () => {
    const stub = jest.fn()
    wrapper.vm.$on('click', stub)
    // wrapper.setMethods({ // setMethods是即将移除的方法，不建议使用
    //   handleClick: stub
    // })
    // const wrapper = createWrapper(Button, { // methods覆盖会报警告
    //   methods: {
    //     handleClick: stub
    //   }
    // })
    wrapper.trigger('click')
    // await wrapper.vm.$nextTick()
    expect(stub).toBeCalled()
    expect(stub).toHaveBeenCalledTimes(1) // 只触发一次

    wrapper.trigger('click')
    expect(stub).toBeCalled()
    expect(stub).toHaveBeenCalledTimes(2) // 只触发一次
  })
})
