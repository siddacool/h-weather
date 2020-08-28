import { div } from '@hyperapp/html';

import SearchBox from './SearchBox';
import SearchResultDropdown from './SearchResultDropdown';

export default function SearchControl() {
  return div(
    {
      class: '',
    },
    [SearchBox(), SearchResultDropdown()],
  );
}
