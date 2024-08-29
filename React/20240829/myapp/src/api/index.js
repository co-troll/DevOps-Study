import axios from 'axios';

export const getTodoList = async () => {
    const { data } = await axios.get("http://localhost:4000/todo");
    return data;
}

export const createTodoList = async (data) => {
    await axios.post("http://localhost:4000/todo", data);
}