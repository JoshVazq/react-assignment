import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchRecipe } from '../service';
import AreaIcon from '../../icons/area.svg';
import CategoryIcon from '../../icons/category.svg';

class RecipeDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            recipe: null,
        };
    }
    componentDidMount() {
        fetchRecipe(this.props.recipe.idMeal).then((recipe) => {
            this.setState({ loading: false, recipe });
        });
    }

    render() {
        const recipe = this.state.loading ? this.props.recipe : this.state.recipe;
        return (
            <div className="absolute absolute--fill flex flex-column bg-white">
                <div
                    className="h5 w5-l cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
                />
                <div className="pa3 flex flex-column flex-row-l">
                    <span className="f3 dark-gray b">{recipe.strMeal}</span>

                    {this.state.loading ? (
                        ''
                    ) : (
                        <React.Fragment>
                            <div className="mt2 db flex">
                                <div className="h2 flex items-center mr3">
                                    <CategoryIcon className="w2 mr2" />
                                    <span className="f5 silver">{recipe.strCategory}</span>
                                </div>
                                <div className="h2 flex items-center">
                                    <AreaIcon className="w2 mr2" />
                                    <span className="f5 silver">{recipe.strArea}</span>
                                </div>
                            </div>
                            <span className="f4 mt4 pb2 bb db dark-gray b--light-gray">Directions</span>
                            <div className=" dark-gray overflow-auto">
                                {recipe.strInstructions.split('\n').map(step => (
                                    <p key={step.substring(6)}>{step}</p>
                                ))}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    }
}
RecipeDetail.propTypes = {
    recipe: PropTypes.shape({
        idMeal: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired,
        strMeal: PropTypes.string.isRequired,
    }).isRequired,
};
export default RecipeDetail;
