import React from 'react';
import { shallow } from 'enzyme';
import * as recipeService from '../service';

import RecipeList from './';
import RecipeListItem from '../recipe-list-item';
import Loader from '../../loader';

jest.mock('../service', () => ({
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
        expect(wrapper.find(Loader)).toHaveLength(1);
        expect(recipeService.fetchRecipes).toBeCalled();
        await recipeService.fetchRecipes();
        expect(wrapper.state().loading).toEqual(false);
        expect(wrapper.find(RecipeListItem)).toHaveLength(2);
    });
    it('does not render Loading', () => {
        const wrapper = shallow(<RecipeList />);
        wrapper.setState({ loading: false });
        expect(wrapper.find(Loader)).toHaveLength(0);
    });
});
