import { text } from 'hyperapp';
import { header } from '@hyperapp/html';

export default function Header({ title }) {
  return header(
    {
      class: 'border border-solid border-gray-500',
    },
    text(title),
  );
}
