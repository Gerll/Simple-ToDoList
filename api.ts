import { ITask } from "./types/task"

const baseURL = 'http://localhost:3001'

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/task`);
    const todos = await res.json();
    return todos;
}