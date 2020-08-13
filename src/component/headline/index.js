import React, {Component} from "react"
import PropTypes from 'prop-types'

class Headline extends Component {
    constructor(props){
        super(props)
    }
    render (){
        const { header, desc} = this.props
        if(!header) {
            return null
        }
        return (
            <div data-test='headlineCompo'>
                <h1 data-test='headlineHeader'>{header}</h1>
                <p data-test='headlineDesc'>{desc}</p>
            </div>
        )
    }
}

Headline.propTypes =  {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.bool
    }))
}

export default Headline