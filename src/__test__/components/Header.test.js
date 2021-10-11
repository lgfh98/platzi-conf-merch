import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../../components/Header';
import ProviderMock from '../__mocks__/ProviderMock';

describe('<Header />', () => {
  test('Render de componente Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('PlatziConf Merch');
  });
});
