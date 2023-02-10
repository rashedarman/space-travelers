import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import RocketItem from '../components/RocketItem';
import store from '../redux/configureStore';

const mockData = {
  id: 123,
  name: 'name',
  description: 'description',
  flickrImage: 'url',
  type: 'type',
  reserved: false,
};

describe('Rocket Item Component', () => {
  test('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketItem rocket={mockData} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
