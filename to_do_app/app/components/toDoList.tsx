"use client";

import React from 'react';
import { ListGroup } from 'react-bootstrap';

// defining Task item
type Task = {
    id: number;
    description: string;
    completed: boolean;
};

// static tasks array
const initialTasks: Task[] = [
    { id: 1, description: "Study for database midterm", completed: false }, 
    { id: 2, description: "Do laundry", completed: true },
    { id: 3, description: "Finish linear algebra homework", completed: false }
];

const TodoList: React.FC = () => {
    return (
        <div>
            <h2>
                To-Do List
            </h2>
            <ListGroup>
                {initialTasks.map(task => (
                    <ListGroup.Item key={task.id} variant={task.completed ? "success" : ""}>
                        <input type="checkbox" checked={task.completed} readOnly />
                        {task.description}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TodoList;