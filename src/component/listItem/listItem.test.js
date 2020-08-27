import React from 'react'
import { shallow, configure } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../Util'
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './index'


configure({adapter: new Adapter()});

describe('ListItem Compo', () => {

    describe('Checking PropTypes', () => {
        test('should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Example Desc'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Component Renders', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Example desc'
            };
            wrapper = shallow(<ListItem {...props} />)
        })
        test('Should renders with NO error', () => {
            const Component = findByTestAtrr(wrapper, 'listItemComponent')
            expect(Component.length). toBe(1)
        })

        test('should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle')
            expect(title.length). toBe(1)
        })

        test('should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc')
            expect(desc.length). toBe(1)
        })
    })

    describe('should NOT render', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'Example desc'
            };
            wrapper = shallow(<ListItem {...props} />)
        })
        test('component is NOT rendered', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent')
            expect(component.length). toBe(0)
        })
    })

})