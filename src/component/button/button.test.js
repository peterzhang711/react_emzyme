import React from 'react'
import { shallow, configure } from 'enzyme'
import ShareButton from './index'
import { findByTestAtrr, checkProps } from '../../Util'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('ShareButton Component', () => {

    describe('checking PropTypes', () => {

        it('should NOT throw warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: ()=>{}
            }
            const propsError = checkProps(ShareButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('renders', () => {
        let wrapper
        let mockFunc
        beforeEach(() => {
            mockFunc = jest.fn()
            const props ={
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<ShareButton {...props}/>)
        })

        it('Should Render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent')
            expect(button.length).toBe(1)
        })

        it('should emit callback on click event', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent')
            button.simulate('click')
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })

    })

});

