import React, { Component } from 'react';
import { fetchRecipes } from '../service';
import RecipeListItem from '../recipe-list-item';
import RecipeDetail from '../recipe-detail';
import Loader from '../../loader';
import Overlay from '../../overlay';

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
                <div className="h-100 w-100 flex flex-wrap justify-start overflow-auto">
                    {this.state.recipes.map(recipe => (
                        <RecipeListItem
                            recipe={recipe}
                            key={`list-item-${recipe.idMeal}`}
                            onSelected={() => this.setState({ current: recipe })}
                        />
                    ))}
                </div>

                {this.state.current ? (
                    <Overlay onClose={() => this.setState({ current: null })}>
                        <RecipeDetail recipe={this.state.current} />
                    </Overlay>
                ) : null}
            </React.Fragment>
        );
    }
    render() {
        return this.state.loading ? <Loader /> : this.renderList();
    }
}

export default RecipeList;
