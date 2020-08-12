import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'


describe ('Header compo', ()=> {

    test('should render with no error', () => {

        const component = shallow(<Header />)
        const wrapper = component.find('.logo')
        expect (wrapper.length).toBe(1)
    })

})