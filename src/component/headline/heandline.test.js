import React from 'react'
import { shallow, configure } from 'enzyme'
import Headline from './index'
import { findByTestAtrr, checkProps } from '../../Util'

import Adapter from 'enzyme-adapter-react-16';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>)
    return component
}
configure({adapter: new Adapter()});

describe('Headline Compo', () => {

    describe('checking propTypes', () => {
        test('should not throw a warning', () => {

            const expectedProps = {
                hearder: 'lalala',
                desc: 'i love you',
                tempArr: [{
                    fName: 'j',
                    lName: 'P',
                    email: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined()
        })

    })

    describe('have props', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                header: 'test header',
                desc: 'test desc'
            }
            wrapper = setUp(props)
        })
        test('should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headlineCompo')
            expect (component.length).toBe(1)
        })

        test('should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'headlineHeader')
            expect (h1.length).toBe(1)
        })

    })

    describe('have NO props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })

        test('should not render', () => {
            const component = findByTestAtrr(wrapper, 'headlineCompo')
            expect (component.length).toBe(0)
            })

    })

})

