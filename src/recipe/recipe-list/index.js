import React, { Component } from 'react';
import { fetchRecipes } from '../service';
import RecipeListItem from '../recipe-list-item';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            loading: true,
        };
    }
    componentDidMount() {
        fetchRecipes().then((recipes) => {
            this.setState({ recipes, loading: false });
        });
    }
    renderList() {
        return (
            <div className="flex flex-wrap justify-start">
                {this.state.recipes.map(recipe => (
                    <RecipeListItem recipe={recipe} key={`list-item-${recipe.idMeal}`} />
                ))}
            </div>
        );
    }
    render() {
        return this.state.loading ? <span>Loading...</span> : this.renderList();
    }
}

export default RecipeList;
