import { useContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import axios from 'axios';
import { TaskContext } from '../context/TaskContext';
import { Form, Button, Header, Grid, Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function TaskForm() {
  const token=localStorage.getItem('token');

  const navigate=useNavigate();
  
  const [title, setTitle] = useState('');
  const [disc, setdisc] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('todo');
  const [prirority, setprirority] = useState('low');

  const taskId=uuidv4();

  console.log(token)

  const {addTask}= useContext(TaskContext)
  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const task={ taskId,title, disc, dueDate, status, prirority,category };

    setTitle('');
    setdisc('');
    setDueDate('');
    setStatus('todo');
    setprirority('low');
    setCategory('')

    try{
      const response = await axios.post('http://localhost:3000/tasks', 
        { task }, 
        {
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json', 
          }
        }
      );
    
      addTask(task)
      navigate('/');
  
    }catch(err){
      const errmss=err.responsedata.message;
      return alert(errmss);
    }
  };

  return (

<Grid centered verticalAlign="middle" style={{ height: '90vh' }}>
  <Grid.Column style={{ maxWidth: 600 }}>
    <Segment raised>
      <Header as="h2" textAlign="center" className="text-lg font-bold mb-4">Add Task</Header>
      
      <Form onSubmit={handleSubmit} >
        <Form.Field>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter task title"
            className="ui input"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="disc">Description</label>
          <input
            id="disc"
            value={disc}
            onChange={(e) => setdisc(e.target.value)}
            required
            placeholder="Enter task description"
            className="ui input"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="Enter task category"
            className="ui input"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="ui input"
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="ui dropdown"
          >
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="todo">To Do</option>
          </select>
        </Form.Field>

        <Form.Field>
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={prirority}
            onChange={(e) => setprirority(e.target.value)}
            className="ui dropdown"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </Form.Field>

        <Button type="submit" primary fluid>Add Task</Button>
      </Form>
    </Segment>
  </Grid.Column>
</Grid>
    

  );
}

export default TaskForm;
