import React from 'react';
import ListRepoComponent from 'component/list-repo/list-repo';
import configureStore from 'redux-mock-store';
import ReactTestUtils from 'react-dom/test-utils'; 
import { mount } from 'enzyme'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'; 

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('With React Testing Library', () => {
    const initialState = { output: '' };
describe('<ListRepoComponent />', () => {
  it('has a div tag', () => {
    const mockStore = configureStore();
    let store;

    it('has store', () => {
        store = mockStore(initialState);
        expect(store).not.toBeNull();
    const store = mockStore({
      repo: {
        repo: []
      }
    });
})

describe('ListRepoComponent', () => {

    it('passing test', () => {
      expect(true).toBeTruthy();
    })

    it('has a div tag', () => {
        const component:any = ReactTestUtils.renderIntoDocument(<ListRepoComponent/>);
        let div = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'div'
        );
    })

    it('has UpdateRepoComponent', () => {
        const component:any = ReactTestUtils.renderIntoDocument(<ListRepoComponent/>);
        let UpdateRepoComponent = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'UpdateRepoComponent'
        );
    })
  })
  
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ListRepoComponent />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.find('a').text()).toEqual('ADD ')
  });
});

export {}; 