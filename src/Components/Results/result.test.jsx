import { expect, test, describe } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Results from './index';
import '@testing-library/jest-dom';

describe('Results component', () => {
  const testData = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
  ];

 

  test('renders no data available state', () => {
    const wrapper = render(<Results data={null} />);
    const noDataText = wrapper.getByText('No data available');
    expect(noDataText).toBeTruthy();
  });

  test('renders paginated data', () => {
    const wrapper = render(<Results data={testData} />);
    const preElement = wrapper.container.querySelector('pre');
    const nextPageButton = wrapper.getByText('Next');
    const prevPageButton = wrapper.getByText('Prev');

    expect(preElement).toBeTruthy();
    expect(preElement.textContent).toBe(JSON.stringify(testData.slice(0, 5), undefined, 2));

    // Go to the next page
    fireEvent.click(nextPageButton);
    expect(JSON.parse(preElement.textContent)).toEqual([
      {
        "name": "Item 1",
      },
      {
        "name": "Item 2",
      },
      {
        "name": "Item 3",
      },
      {
        "name": "Item 4",
      },
      {
        "name": "Item 5",
      },
    ]
    );

    // Go back to the previous page
    fireEvent.click(prevPageButton);
    expect(JSON.parse(preElement.textContent)).toEqual(testData.slice(0, 5));
  });
});
