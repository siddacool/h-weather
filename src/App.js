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
      cities: [
        {
          id: '1',
          name: 'New York',
        },
        {
          id: '2',
          name: 'Mumbai',
        },
        {
          id: '3',
          name: 'Goa',
        },
      ],
      searchValue: '',
      city: '',
      searchResultDropDownOpen: false,
    },
    view: ({ title, searchValue, searchResultDropDownOpen, cities, city }) =>
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
              SearchControl({ searchValue, searchResultDropDownOpen, cities }),
              City({ city }),
            ],
          ),
        ],
      ),
    node: rootNode,
  });
}
