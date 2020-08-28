import { text } from 'hyperapp';
import { div } from '@hyperapp/html';

export default function City() {
  return div(
    {
      class: 'border border-solid border-gray-500',
    },
    text('City'),
  );
}
