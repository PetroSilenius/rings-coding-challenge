import { render, fireEvent, mockedRouter } from 'test/test-utils';

import DeckSearch from 'components/DeckSearch';

describe('DeckSearch', () => {
  it('should render a search input', () => {
    const { getByPlaceholderText } = render(<DeckSearch />);
    expect(getByPlaceholderText('Type in the deck ID'));
  });

  it('should call the onChange handler when the input value changes', () => {
    const { getByPlaceholderText } = render(<DeckSearch />);

    const input = getByPlaceholderText('Type in the deck ID');
    fireEvent.change(input, { target: { value: 'test' } });

    const form = input.closest('form') as HTMLFormElement;
    fireEvent.submit(form);

    expect(mockedRouter.push).toHaveBeenCalledWith('/test');
  });
});
