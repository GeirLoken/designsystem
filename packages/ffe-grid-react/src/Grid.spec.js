import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from '.';

const defaultProps = {
    children: <p>blah</p>,
};

const renderShallow = (props = {}) =>
    shallow(<Grid {...defaultProps} {...props} />);

describe('Grid', () => {
    it('renders with default class and element', () => {
        const el = renderShallow();

        expect(el.prop('className')).toBe('ffe-grid');
        expect(el.type()).toBe('div');
    });

    it('renders with custom class', () => {
        const el = renderShallow({ className: 'custom-class' });
        expect(el.hasClass('custom-class')).toBe(true);
    });

    it('renders provided children node', () => {
        const el = renderShallow();

        expect(el.containsMatchingElement(<p>blah</p>)).toBe(true);
    });

    it('defaults to not setting the "--no-top-padding" modifier', () => {
        const el = renderShallow();

        expect(el.hasClass('ffe-grid--no-top-padding')).toBe(false);
    });

    it('sets the "--no-top-padding" modifier if "topPadding" prop is false', () => {
        const el = renderShallow({ topPadding: false });
        expect(el.hasClass('ffe-grid--no-top-padding')).toBe(true);
    });

    it('sets the condensed modifier', () => {
        const el = renderShallow({ condensed: true });

        expect(el.hasClass('ffe-grid')).toBe(true);
        expect(el.hasClass('ffe-grid--condensed')).toBe(true);
    });

    it('preserves other attributes that are passed to it', () => {
        const handler = jest.fn();
        const el = renderShallow({ onClick: handler });

        el.simulate('click');

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('can render a custom root element', () => {
        const el = renderShallow({ element: 'section' });

        expect(el.type()).toBe('section');
    });
});
