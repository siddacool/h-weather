import { text, app } from 'hyperapp';
import { main, button, ul, li } from '@hyperapp/html';

import Input from './components/ui/Input';

export default function App(storeState) {
  const AddTodo = (state) => ({
    ...state,
    todos: state.todos.concat(state.value),
  });

  const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
  });

  app({
    init: storeState(),
    view: ({ todos, value }) =>
      main({}, [
        Input({
          value,
          onInput: NewValue,
        }),
        button({ onclick: AddTodo }, text('Add')),
        ul(
          {},
          todos.map((todo) => li({}, text(todo))),
        ),
      ]),
    node: document.getElementById('root'),
  });
}
