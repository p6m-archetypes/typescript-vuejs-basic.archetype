import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YborWelcome from '../YborWelcome.vue'

describe('YborWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(YborWelcome, { props: {} })
    expect(wrapper.text()).toContain('GET STARTED')
  })
})
