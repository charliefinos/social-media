import React from 'react'
import { shallow } from 'enzyme'
import Profile from './../Profile'

const setUp = (props = {}) => {
    const component = shallow(<Profile {...props} />);
    return component;
}

describe('Profile Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('It should render', () => {
        const wrapper = component.find(`[data-test='d-flex']`);
        expect(wrapper.length).toBe(1)
    })
})