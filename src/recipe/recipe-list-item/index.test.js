import React from 'react';
import { shallow } from 'enzyme';

import RecipeListItem from './';

describe('<RecipeListItem />', () => {
    it('renders a recipe', () => {
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeListItem {...{ recipe }} />);
        expect(wrapper.text()).toEqual(recipeName);
    });
});
