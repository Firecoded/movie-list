import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SingleListItem from './SingleListItem';
import "./movieList.css";

class MovieList extends Component {
    state = {
        listItems: []
    }

    componentDidMount = () => {
        this.getListData();
    }
    
    getListData = async () => {
        const response = await axios.get('./api/listData.json');
        this.setState({
            listItems: response.data.listItems
        })
    }

    displayListItems = () => {
        const listArray = this.state.listItems.map((listItem, index)=>{
            return <SingleListItem 
                    content = {listItem.contentString} 
                    disableEdit = {listItem.disableEdit}
                    key = {listItem.contentString + index} />
        })
        return listArray;
    }
  
    render() {
        return (
            <Fragment>
                <h1 className = "header-text">Star Wars Checklist</h1>
                <ul className = "movie-list">
                    {this.displayListItems()}
                </ul>   
            </Fragment>       
        )
    }
}

export default MovieList;
