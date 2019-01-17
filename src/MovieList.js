import React, { Component } from 'react';
import SingleListItem from './SingleListItem';
import "./movieList.css";

class MovieList extends Component {
    state = {
        listItems: [
            { contentString: "Star Wars Episode IV - A New Hope", disableEdit: false },
            { contentString: "Star Wars Episode V – The Empire Strikes Back", disableEdit: false },
            { contentString: "Star Wars Episode VI – Return of the Jedi", disableEdit: false },
            { contentString: "Star Wars Episode I – The Phantom Menace", disableEdit: false },
            { contentString: "Star Wars Episode II – Attack of the Clones", disableEdit: false },
            { contentString: "Star Wars Episode III – Revenge of the Sith", disableEdit: false },
            { contentString: "Star Wars Episode VII – The Force Awakens", disableEdit: false },
            { contentString: "Star Wars Episode IX", disableEdit: true }
        ]
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
            <React.Fragment>
                <h1 className = "header-text">Star Wars Checklist</h1>
                <ul className = "movie-list">
                    {this.displayListItems()}
                </ul>   
            </React.Fragment>    
        )
    }
}

export default MovieList;
