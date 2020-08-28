import { div } from '@hyperapp/html';

import SearchBox from './SearchBox';
import SearchResultDropdown from './SearchResultDropdown';

export default function SearchControl() {
  return div(
    {
      'data-id': 'SearchControl',
      class:
        'w-screen flex flex-col px-4 max-w-screen-sm mx-auto pb-10 relative',
    },
    [SearchBox(), SearchResultDropdown()],
  );
}
