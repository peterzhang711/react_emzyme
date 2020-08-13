import React, {Component} from "react"

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

export default Headline