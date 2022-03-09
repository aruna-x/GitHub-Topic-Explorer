// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MockedProvider } from '@apollo/react-testing';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components, Modules, Style
import { QUERY } from "../modules/apolloQuery";
import { mockData } from "./mockData";
import App from '../components/App';


const initialState = {
  topic: "react",
  breadcrumbs: [],
};

const mockStore = configureStore();
let store;

// mock redux source: https://stackoverflow.com/a/70149004

const mockQuery = [
  {
    request: {
      query: QUERY,
      variables: {
        topic: 'react',
      },
    },
    result: mockData,
  },
];
// mock apollo source: https://www.apollographql.com/docs/react/v2/development-testing/testing/

it('renders without crashing', () => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <MockedProvider mocks={mockQuery} addTypename={false}>
        <App />
      </MockedProvider>
    </Provider>
  );
  expect(screen.getByText('GitHub Topic Explorer')).toBeInTheDocument();
});

it('renders submit button correctly', () => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <MockedProvider mocks={mockQuery} addTypename={false}>
        <App />
      </MockedProvider>
    </Provider>
  );
  const button = screen.getByRole('button', {name: "Submit"});
  expect(button).toBeInTheDocument();
});