import { text } from 'hyperapp';
import { div, ul, li, a } from '@hyperapp/html';

import { PickCity } from '../actions';

export default function SearchResultDropdown({ cities }) {
  return div(
    {
      'data-id': 'SearchResultDropdown',
      class: 'w-full absolute px-4 left-0 top-12 z-10 -mt-1',
    },
    [
      ul(
        {
          class:
            'w-full h-64 bg-white rounded-md shadow rounded-t-none overscroll-y-auto',
        },
        cities.map((city) =>
          li({}, [
            a(
              {
                onclick: (state, event) => PickCity(state, event, city.name),
              },
              text(city.name),
            ),
          ]),
        ),
      ),
    ],
  );
}
