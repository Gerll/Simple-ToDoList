import React from "react";
import { ITask } from "../../types/task";
import AddTask from "./AddTask";

interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Name</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
                {tasks.map(task => (
                    <tr key= {task.id}>
                        <td>{task.text}</td>
                        <td>Blue</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default TodoList;
