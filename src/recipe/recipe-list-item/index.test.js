import React from 'react';
import { shallow } from 'enzyme';

import RecipeListItem from './';

describe('<RecipeListItem />', () => {
    it('renders a recipe', () => {
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeListItem {...{ recipe, onSelected: () => null }} />);
        expect(wrapper.text()).toEqual(recipeName);
    });
    it('calls onSelected when the user clicks a recipe', () => {
        const onSelected = jest.fn();
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeListItem {...{ recipe, onSelected }} />);
        wrapper.find('div').simulate('click');
        expect(onSelected).toHaveBeenCalled();
    });
    it('calls onSelected when the user press Enter with a recipe focused', () => {
        const onSelected = jest.fn();
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeListItem {...{ recipe, onSelected }} />);
        const element = wrapper.find('div');
        element.simulate('focus');
        element.simulate('keyPress', { key: 'Enter' });

        expect(onSelected).toHaveBeenCalled();
    });
    it('does not call onSelected when the user press a key diferent to Enter', () => {
        const onSelected = jest.fn();
        const recipeName = 'Recipe name',
            recipe = { idMeal: '1', strMealThumb: '', strMeal: recipeName },
            wrapper = shallow(<RecipeListItem {...{ recipe, onSelected }} />);
        const element = wrapper.find('div');
        element.simulate('focus');
        element.simulate('keyPress', { key: 'Space' });

        expect(onSelected).not.toHaveBeenCalled();
    });
});
