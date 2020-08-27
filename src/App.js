import { h, text, app } from 'hyperapp';

import Input from './components/Input';

export default function App() {
  const AddTodo = (state) => ({
    ...state,
    todos: state.todos.concat(state.value),
  });

  const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
  });

  app({
    init: { todos: [], value: '' },
    view: ({ todos, value }) =>
      h('main', {}, [
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
      ]),
    node: document.getElementById('root'),
  });
}
