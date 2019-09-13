import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
    it('renders props.msg ketika dilempar', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Home, {
            content: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
