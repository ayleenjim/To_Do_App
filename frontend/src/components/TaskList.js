import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []); 

  return (
    <Container>
      <h1>Task List</h1>
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item key={task.id}>
            {task.title} - {task.description} - {task.completed ? "Completed" : "Pending"}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default TaskList;
