import React from 'react';
import renderer from 'react-test-renderer';
import header from './Header';

describe('Header', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
