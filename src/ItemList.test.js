import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';  

describe('ItemList', () => {
  test('renders the correct number of items based on props', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    // Here am Rendering  the component with the items prop
    render(<ItemList items={items} />);

    // Here am getting all the list items (<li>) rendered by the component
    const listItems = screen.getAllByRole('listitem');

    // Here am Verifying  that the number of <li> elements matches the number of items passed as props
    expect(listItems.length).toBe(items.length);
  });
});
