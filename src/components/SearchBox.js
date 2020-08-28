import { div, input } from '@hyperapp/html';

const inputStyles = `
  bg-white
  w-full
  h-12
  px-4
  text-base
  font-semibold
  rounded-md
  shadow
  focus:shadow-lg
  transition-shadow
  duration-200
  outline-none
  placeholder-gray-500
  text-gray-700
  tracking-wide
`;

export default function SearchBox() {
  return div(
    {
      class: '',
      'data-id': 'SearchBox',
    },
    [
      input({
        class: inputStyles,
        type: 'text',
        placeholder: '🔎 Search City',
      }),
    ],
  );
}
