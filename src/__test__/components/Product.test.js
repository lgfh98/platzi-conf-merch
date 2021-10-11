import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductMock from '../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const handleAddToCart = jest.fn();
    const product = shallow(
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
