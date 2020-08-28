export const SetSearchOpen = (state) => ({
  ...state,
  searchResultDropDownOpen: true,
});

export const SetSearchClose = (state, event) => {
  const { parentNode } = event.target;

  // Check if click outside of searchbox and search result
  if (
    parentNode.classList.contains('home-container') ||
    parentNode.classList.contains('home')
  ) {
    return {
      ...state,
      searchResultDropDownOpen: false,
    };
  }

  return state;
};

export const UpdateSearchValue = (state, event) => ({
  ...state,
  searchResultDropDownOpen: true,
  searchValue: event.target.value,
});

export const PickCity = (state, event, val) => ({
  ...state,
  searchResultDropDownOpen: false,
  searchValue: '',
  city: val,
});
