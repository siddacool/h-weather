import { h, text } from 'hyperapp';
import Input from '../components/ui/Input';

const AddTodo = (state) => ({
  ...state,
  todos: state.todos.concat(state.value),
});

const NewValue = (state, event) => ({
  ...state,
  value: event.target.value,
});

export default function Home({ todos, value }) {
  return h(
    'main',
    {
      class: 'p-3',
    },
    [
      Input({
        value,
        onInput: NewValue,
      }),
      h('button', { onclick: AddTodo }, text('Add')),
      h(
        'ul',
        {},
        todos.map((todo) => h('li', {}, text(todo))),
      ),
    ],
  );
}
