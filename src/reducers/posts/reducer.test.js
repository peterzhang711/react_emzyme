import { types} from './../../actions/types'
import  postsReducer  from './reducer'

// import { shallow, configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// configure({adapter: new Adapter()});


describe ('post reducer', () => {

    test('should return default state', () => {
        const newState = postsReducer(undefined, {});
        // console.log(newState.debug())
        expect(newState).toEqual([]);
    })

    test('should return new state if received type', () => {
        const posts = [{title: 'test 1'}, {title: 'test 2'}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts)
    })
})