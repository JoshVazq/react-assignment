import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import RecipeList from './recipe/recipe-list';

describe('<App />', () => {
    it('renders A <RecipeList /> component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(RecipeList)).toHaveLength(1);
    });
});
