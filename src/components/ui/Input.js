import { h } from 'hyperapp';

export default function Input({ value, onInput }) {
  return h('input', {
    class: 'border border-solid border-gray-500',
    type: 'text',
    oninput: onInput,
    value,
  });
}
