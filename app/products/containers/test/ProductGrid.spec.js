import React from 'react';
import renderer from 'react-test-renderer';
import ProductGrid from '../ProductGrid';
import Products from '../../components/test/sampleProducts';

test('ProductGrid', () => {
  expect(renderer.create(
    <ProductGrid products={products} />,
  )).toMatchSnapshot();
});