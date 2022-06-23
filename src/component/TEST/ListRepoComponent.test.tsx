import React from 'react';
import ListRepoComponent from 'component/list-repo/list-repo';
import configureStore from 'redux-mock-store';
import { mount,shallow } from 'enzyme'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'; 
import {Button} from '@mui/material'
import { wrap } from 'module';

describe('<ListRepoComponent />', () => {
  const mockStore = configureStore();
    const store = mockStore({
      repo: {
        repo: []
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ListRepoComponent />
        </BrowserRouter>
      </Provider>
    );
    const mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      useSelector: jest.fn(),
      useDispatch: () => mockDispatch
    }));
  it('has add button', () => {
    expect(wrapper.find('a').text()).toEqual('ADD ')
  });
  it('has update button', () => {
    const buttonUpdate = wrapper.find('#update')
    expect(buttonUpdate.text()).toEqual('Update')
  })
});
