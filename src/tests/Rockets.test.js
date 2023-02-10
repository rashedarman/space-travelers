import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import RocketsPage from '../pages/Rockets';
import store from '../redux/configureStore';

describe('Rockets Page Component', () => {
  it('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
