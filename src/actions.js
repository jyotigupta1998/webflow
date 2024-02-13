export const AddToAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i == todo);

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [todo , ...todos],
    });
  }

};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i == todo);
  if (!hasTodo && todo !== "") {
    dispatch({
      type: "REMOVE_TODO",
      payload: todos.filter((t) => t!== todo),
    });
  }
};
