export const addTodo = (todoItem) => {
  return {
    type: "ADD",
    payload: { ...todoItem },
  };
};
