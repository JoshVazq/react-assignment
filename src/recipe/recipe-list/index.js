import React, { Component } from 'react';
import { fetchRecipes } from '../service';
import RecipeListItem from '../recipe-list-item';
import RecipeDetail from '../recipe-detail';

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            current: null,
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
            <React.Fragment>
                <div className="flex flex-wrap justify-start">
                    {this.state.recipes.map(recipe => (
                        <RecipeListItem
                            recipe={recipe}
                            key={`list-item-${recipe.idMeal}`}
                            onSelected={() => this.setState({ current: recipe })}
                        />
                    ))}
                </div>

                {this.state.current ? <RecipeDetail recipe={this.state.current} /> : null}
            </React.Fragment>
        );
    }
    render() {
        return this.state.loading ? <span>Loading...</span> : this.renderList();
    }
}

export default RecipeList;
