import React, { Component } from 'react';
import "./singleListItem.css";

class SingleListItem extends Component {
    state = {
        isChecked: false
    }
  
    handleClick = (e) => {
        if(this.props.disableEdit){
            return;
        }
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <li>
                <div className = "list-item">
                    <label className = "checkbox-container">
                    <input type = "checkbox" 
                           onChange = {this.handleClick} 
                           checked = {this.state.isChecked ? 'checked' : ""}
                           />
                    <span className = "checkmark"></span>
                    </label>
                    <p className = {this.state.isChecked ? "grayed-out-text" : ""}>
                        {this.props.content}
                    </p>
                </div>
            </li>
        )
    }
}

export default SingleListItem;
