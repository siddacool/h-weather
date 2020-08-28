import { div, input } from '@hyperapp/html';

export default function SearchBox() {
  return div(
    {
      class: '',
      'data-id': 'search-box',
    },
    [
      input({
        class: 'border border-solid border-gray-500',
        type: 'text',
        placeholder: 'Search City',
      }),
    ],
  );
}
