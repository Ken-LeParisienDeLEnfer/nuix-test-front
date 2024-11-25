import React from 'react';
import { render, screen } from '@testing-library/react';
import { useItemGetAllQuery } from 'services/itemsApi';
import { useImageGetByIdQuery } from 'services/imageApi'; // Import the hooks

import { ListItems } from './ListItems';

jest.mock('services/itemsApi', () => ({
  useItemGetAllQuery: jest.fn(),
}));

jest.mock('services/imageApi', () => ({
    useImageGetByIdQuery: jest.fn(),
  }));

describe('ListItems Component', () => {
  it('renders text Loading when fetching the items from API', () => {
    (useItemGetAllQuery as jest.Mock).mockReturnValue({ data: undefined, isFetching: true });
    (useImageGetByIdQuery as jest.Mock).mockReturnValue({ data: undefined });

    render(<ListItems />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('renders guid from first element and image from API', () => {
    const mockItems = [{ guid: 'guid1' }, { guid: 'guid2' }];
    const mockImage = 'https://example.com/image.jpg';

    (useItemGetAllQuery as jest.Mock).mockReturnValue({ data: mockItems, isFetching: false });
    (useImageGetByIdQuery as jest.Mock).mockReturnValue({ data: mockImage });

    render(<ListItems />);

    expect(screen.getByText('guid1')).toBeInTheDocument();
    expect(screen.getByAltText('image guid1')).toHaveAttribute('src', mockImage);
  });

  it('renders nothing if items and image are undefined from API', () => {
    (useItemGetAllQuery as jest.Mock).mockReturnValue({ data: undefined, isFetching: false });
    (useImageGetByIdQuery as jest.Mock).mockReturnValue({ data: undefined });

    render(<ListItems />);

    expect(screen.queryByText('guid1')).not.toBeInTheDocument();
    expect(screen.queryByAltText('image guid1')).not.toBeInTheDocument();
  });
});
