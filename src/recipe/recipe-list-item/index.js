import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const RecipeListItem = ({ recipe, onSelected }) => (
    <div
        onClick={onSelected}
        onKeyPress={event => (event.key === 'Enter' ? onSelected() : null)}
        role="button"
        tabIndex="0"
        className="w-100 w-third-m w-25-l h5 pa2 ba b--white bg-green dim cover bg-center pointer relative flex items-center justify-center outline-0"
        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
    >
        <span className="f4 w-100 near-white b tc text-shadow">{recipe.strMeal}</span>
    </div>
);
RecipeListItem.propTypes = {
    recipe: PropTypes.shape({
        idMeal: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired,
        strMeal: PropTypes.string.isRequired,
    }).isRequired,
    onSelected: PropTypes.func.isRequired,
};
export default RecipeListItem;
