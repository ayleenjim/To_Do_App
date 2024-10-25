import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, Form, Button } from 'react-bootstrap';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from the Django API
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;  // Prevent adding empty tasks

    try {
      const response = await axios.post('http://localhost:8000/api/tasks/', {
        title: newTask,
        completed: false
      });
      setTasks([...tasks, response.data]);
      setNewTask('');  // Clear input field
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <Container>
      <h1>To-Do List</h1>

      {/* Add Task Form */}
      <Form onSubmit={addTask}>
        <Form.Group className="mb-3" controlId="newTask">
          <Form.Label>Add a Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Add Task</Button>
      </Form>

      {/* Display Tasks */}
      <ListGroup className="mt-4">
        {tasks.map((task) => (
          <ListGroup.Item key={task.id}>
            {task.title}
            <Button
              variant="danger"
              className="float-end"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
