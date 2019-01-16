import React, { Component } from 'react'

class SingleListItem extends Component {
    
  
    render() {
        return (
            <li>
                <div>
                    {this.props.content}
                </div>
            </li>
        )
    }
}

export default SingleListItem;
