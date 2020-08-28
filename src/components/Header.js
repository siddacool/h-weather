import { text } from 'hyperapp';
import { header } from '@hyperapp/html';

export default function Header({ title }) {
  return header(
    {
      class: 'px-4 text-center text-3xl font-bold text-gray-700 pt-20 pb-10',
    },
    text(title),
  );
}
