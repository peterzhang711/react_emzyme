import React, { Component } from 'react'
import Header from './component/header'
import Headline from './component/headline'
import ShareButton from './component/button'
import ListItem from './component/listItem'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './App.scss'
import { render } from 'enzyme';

const tempArr = [{
  fName: 'joe',
  lName: 'Peter',
  email: true
}]

class App extends Component{

  constructor(props){
    super(props)
    this.fetch = this.fetch.bind(this)
  }

  fetch(){
    this.props.fetchPosts()
  }

  render(){
    const {posts} = this.props
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test='appCompo'>
        <Header />
        <Headline header='Posts' desc='click button to render posts' tempArr={tempArr} />
        <ShareButton {...configButton} />  
        {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const {title, body} = post
              const configListItem = {
                title,
                desc: body
              }
              return (
                <ListItem key={index} {...configListItem}/>
              )
            })}
          </div>        
        }   
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
