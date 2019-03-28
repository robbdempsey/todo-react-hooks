
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import Item from './index.js';

it('should NOT render a todo item without props', () => {
  const tree = renderer
    .create(<Item />)
    .toJSON()

  expect(tree).toBeNull()
});

it('should NOT render a todo item without props', () => {
  const component = shallow(<Item />)
  expect(component.find('todo-item__container').length).toEqual(0)
});

it('should render a todo item', () => {
  const component = shallow(
    <Item 
      item={{id: 1, name:'todo-item-1'}}
      onComplete={() => jest.fn()}
      onDelete={() => jest.fn()} />
  )

  expect(component.find('.todo-item__container').length).toEqual(1)
});

it('should render a todo item and complete should be clicked', () => {
  const clickMock = jest.fn()
  const component = shallow(
    <Item 
      item={{id: 1, name:'todo-item-1'}}
      onComplete={clickMock}
      onDelete={() => jest.fn()} />
  )

  expect(component.find('.todo-item__container').length).toEqual(1)

  component.find('.todo-item-complete').simulate('click')
  expect(clickMock.mock.calls[0][0]).toEqual(1)
});

it('should render a todo item and delete should be clicked', () => {
  const clickMock = jest.fn()
  const component = shallow(
    <Item 
      item={{id: 1, name:'todo-item-1'}}
      onComplete={() => jest.fn()}
      onDelete={clickMock} />
  )

  expect(component.find('.todo-item__container').length).toEqual(1)

  component.find('.todo-item-delete').simulate('click')
  expect(clickMock.mock.calls[0][0]).toEqual(1)
});
