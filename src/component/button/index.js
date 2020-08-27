import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShareButton extends Component {

    submitEvent(){
        // console.log('onclick works')
        if(this.props.emitEvent){
            // console.log('onclick works')
            this.props.emitEvent()
        }
    }
    render(){
        const { buttonText } = this.props

        return (
            <button onClick={() => this.submitEvent()} data-test='buttonComponent'>
                {buttonText}
            </button>
        )
    }
}

ShareButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default ShareButton