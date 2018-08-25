import React from 'react';
import { shallow } from 'enzyme';
import * as recipeService from './service';

import RecipeList from './recipe-list';
import RecipeListItem from './recipe-list-item';

jest.mock('./service', () => ({
    fetchRecipes: jest.fn(),
}));
describe('<RecipeList />', () => {
    it('renders Loading', async () => {
        recipeService.fetchRecipes.mockImplementation(() =>
            Promise.resolve([
                { idMeal: '1', strMealThumb: '', strMeal: '' },
                { idMeal: '2', strMealThumb: '', strMeal: '' },
            ]));
        const wrapper = shallow(<RecipeList />);
        expect(wrapper.text()).toEqual('Loading...');
        expect(recipeService.fetchRecipes).toBeCalled();
        await recipeService.fetchRecipes();
        expect(wrapper.state().loading).toEqual(false);
        expect(wrapper.find(RecipeListItem)).toHaveLength(2);
    });
    it('does not render Loading', () => {
        const wrapper = shallow(<RecipeList />);
        wrapper.setState({ loading: false });
        expect(wrapper.text()).toEqual('');
    });
});
