const addOneItem = (state, todoItem) => {
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, todoItem) => {
    todoItem.completed = !todoItem.completed;
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }