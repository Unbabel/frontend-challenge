import React from 'react';
import { render } from '@testing-library/react';

import Li from '../Wrapper';

describe('<Wrapper />', () => {
  it('should render an <li> tag', () => {
    const { container } = render(<Li />);
    const element = container.querySelector('li');
    expect(element).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<Li />);
    const element = container.querySelector('li');
    expect(element.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Li id={id} />);
    const element = container.querySelector('li');
    expect(element.hasAttribute('id')).toBe(true);
    expect(element.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Li attribute="test" />);
    const element = container.querySelector('li');
    expect(element.hasAttribute('attribute')).toBe(false);
  });
});
