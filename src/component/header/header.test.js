import React from 'react'
import { shallow, configure } from 'enzyme'
import Header from './index'
import { findByTestAtrr } from '../../Util'
import Adapter from 'enzyme-adapter-react-16';


const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component
}

configure({adapter: new Adapter()});
describe ('header compo', () => {

    let component
    beforeEach (() => {
        component = setUp()
    });

    test('should render with no error', () => {
        const wrapper = findByTestAtrr(component,'headerComponent')
        expect (wrapper.length).toBe(1)
            })

    
})




