import React from 'react';
import { shallow } from 'enzyme';

import RecipeDetail from './';

describe('<RecipeDetail />', () => {
    it('renders a recipe', () => {
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeDetail {...{ recipe }} />);
        expect(wrapper.text()).toEqual(recipeName);
    });
});
