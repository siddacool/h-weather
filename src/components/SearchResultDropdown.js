import { div } from '@hyperapp/html';

export default function SearchResultDropdown() {
  return div(
    {
      'data-id': 'SearchResultDropdown',
      class: 'w-full absolute px-4 left-0 top-12 z-10 -mt-1',
    },
    [
      div({
        class:
          'w-full h-64 bg-white rounded-md shadow rounded-t-none overscroll-y-auto',
      }),
    ],
  );
}
