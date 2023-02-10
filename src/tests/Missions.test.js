import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import MissionPage from '../pages/Missions';
import store from '../redux/configureStore';

describe('Missions Page Component', () => {
  test('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
