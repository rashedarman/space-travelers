import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import ProfilePage from '../pages/Profile';
import store from '../redux/configureStore';

describe('Profile Page Component', () => {
  test('renders the component properly', () => {
    const tree = render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
