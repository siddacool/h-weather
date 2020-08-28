import { text, app } from 'hyperapp';
import { div, button, ul, li } from '@hyperapp/html';

import Header from './components/Header';
import SearchControl from './components/SearchControl';
import City from './components/City';
import Input from './components/ui/Input';

// actions
import { SetSearchClose } from './actions';

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
    init: {
      title: 'Hey Weather!',
      todos: [],
      value: 'Tha Value',
      searchResultDropDownOpen: false,
    },
    view: ({ title, todos, value, searchResultDropDownOpen }) =>
      div(
        {
          class: 'home',
          onclick: SetSearchClose,
        },
        [
          div(
            {
              class: 'home-container bg-gray-300 h-screen',
            },
            [
              Header({ title }),
              SearchControl({ searchResultDropDownOpen }),
              City(),
            ],
          ),
        ],
      ),
    node: rootNode,
  });
}
