import React, { Component } from 'react';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //            recipes: [],
            loading: true,
        };
    }

    render() {
        return this.state.loading ? <span>Loading...</span> : null;
    }
}

export default RecipeList;
