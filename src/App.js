import { text, app } from 'hyperapp';
import { div, button, ul, li } from '@hyperapp/html';

import Header from './components/Header';
import SearchControl from './components/SearchControl';
import City from './components/City';
import Input from './components/ui/Input';

export default function App({ rootNode }) {
  const AddTodo = (state) => ({
    ...state,
    todos: state.todos.concat(state.value),
  });

  const NewValue = (state, event) => ({
    ...state,
    value: event.target.value,
  });

  app({
    init: { title: 'Hey Weather!', todos: [], value: 'Tha Value' },
    view: ({ title, todos, value }) =>
      div(
        {
          class: 'home',
        },
        [
          div(
            {
              class: 'bg-gray-300 h-screen',
            },
            [Header({ title }), SearchControl(), City()],
          ),
        ],
      ),
    node: rootNode,
  });
}
