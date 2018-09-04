import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/close.svg';

const RecipeDetail = ({ recipe, onClosed }) => (
    <div className="absolute absolute--fill bg-white">
        <div className="h5 cover " style={{ backgroundImage: `url(${recipe.strMealThumb})` }}>
            <CloseIcon
                onClick={onClosed}
                onKeyPress={event => (event.key === 'Enter' ? onClosed() : null)}
                role="button"
                tabIndex="0"
                className="h1 w1 ma2 pa2 fill-white "
            />
        </div>
        <span className="f4 w-100  bold tc">{recipe.strMeal}</span>
    </div>
);
RecipeDetail.propTypes = {
    recipe: PropTypes.shape({
        idMeal: PropTypes.string.isRequired,
        strMealThumb: PropTypes.string.isRequired,
        strMeal: PropTypes.string.isRequired,
    }).isRequired,
    onClosed: PropTypes.func.isRequired,
};
export default RecipeDetail;
