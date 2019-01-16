import React, { Component } from 'react';
import SingleListItem from './SingleListItem';
import "./movieList.css";

class MovieList extends Component {
    state = {
        listItems: [
            { contentString: "Star Wars Episode IV - A New Hope", canBeClicked: true },
            { contentString: "Star Wars Episode V – The Empire Strikes Back Star Wars Episode VI – Return of the Jedi", canBeClicked: true },
            { contentString: "Star Wars Episode I – The Phantom Menace Star Wars Episode II – Attack of the Clones", canBeClicked: true },
            { contentString: "Star Wars Episode III – Revenge of the Sith Star Wars Episode VII – The Force Awakens", canBeClicked: true },
            { contentString: "Star Wars Episode IX", canBeClicked: false }
        ]
    }

    displayListItems = () => {
        const outputArr = this.state.listItems.map((listItem, index)=>{
            return <SingleListItem 
                    content = {listItem.contentString} 
                    isClickable = {listItem.canBeClicked}
                    key = {listItem.contentString + index} />
        })
        return outputArr;
    }
  
    render() {
        return (
            <ul className = "movie-list">
                {this.displayListItems()}
            </ul>    
        )
    }
}

export default MovieList;
