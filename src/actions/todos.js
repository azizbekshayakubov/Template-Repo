const addTodo = (todoItem) => {
  return {
    type: "ADD",
    payload: { ...todoItem },
  };
};

export default addTodo;
