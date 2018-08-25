import React from 'react';
import { shallow } from 'enzyme';

import RecipeList from './recipe-list';

describe('<RecipeList />', () => {
    it('renders Loading', () => {
        const wrapper = shallow(<RecipeList />);
        expect(wrapper.text()).toEqual('Loading...');
    });
    it('does not render Loading', () => {
        const wrapper = shallow(<RecipeList />);
        wrapper.setState({ loading: false });
        expect(wrapper.text()).toEqual('');
    });
});
