import React from 'react';
import ListRepoComponent from 'component/list-repo/list-repo';
import UpdateRepoComponent from 'component/list-repo/update-repo/update-repo';
import configureStore from 'redux-mock-store';
import { mount,shallow } from 'enzyme'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'; 
import {Button} from '@mui/material'
import { wrap } from 'module';
import { render } from '@testing-library/react';
import { ConstructionOutlined } from '@mui/icons-material';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('<ListRepoComponent />', () => {
  const mockStore = configureStore();
  let state = {
    repo: {
      repo: [{ id : 12345}]
    }
  };
    const store = mockStore(() => state);
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
    const mockCallBack = jest.fn();
    const button = mount(<Button onClick={mockCallBack}>Update</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
  it('is Show Update Dialog', () => {
    const mockCallBack = jest.fn();
    const isShowDialog = false;
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <UpdateRepoComponent openDialog={isShowDialog} />
        </BrowserRouter>
      </Provider>
    );
    const button = mount(<Button onClick={mockCallBack}>Update</Button>);
    button.find('button').simulate('click');
    expect(isShowDialog).toBeTruthy();
  })
  it('has delete button', () => {
    const mockCallBack = jest.fn();
    const button = mount(<Button onClick={mockCallBack}>Delete</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
  it('test delete', () => {
    const mockCallBack = jest.fn();
    const button = mount(<Button onClick={mockCallBack(state.repo.repo[0].id)}>Delete</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack).toHaveBeenCalledWith(12345);
  })
});
