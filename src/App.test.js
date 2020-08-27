import App from './App'
import React from 'react'
import { shallow, configure } from 'enzyme'
import { findByTestAtrr, testStore } from './Util'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const setUp = (initialState) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    console.log(wrapper.debug())
    return wrapper
}

describe('App Compo', () => {
    let wrapper
    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: 'Example title 1',
                    body: 'Some text 1'
                },
                {
                    title: 'Example title 2',
                    body: 'Some text 2'
                }
            ]
        }
        wrapper = setUp(initialState)
    });

    it('should render with NO error', () => {
        const component = findByTestAtrr(wrapper, 'appCompo')
        expect(component.length).toBe(1)
    })

})
