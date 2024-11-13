import { useContext, useState } from 'react';
import axios from 'axios';
import { TaskContext } from '../context/TaskContext';
import { Form, Button, Header, Grid, Segment } from 'semantic-ui-react';
import { useNavigate ,useLocation} from 'react-router-dom';

function UpdateForm() {

  const {updateTask}=useContext(TaskContext)
  const location =useLocation()
  const task=location.state.task
  const navigate=useNavigate();
  
  const [title, setTitle] = useState(task.title);
  const [disc, setdisc] = useState(task.disc);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [category, setCategory] = useState(task.category);
  const [status, setStatus] = useState(task.status);
  const [prirority, setprirority] = useState(task.prirority);

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const newTask={taskId:task.taskId,title, disc, dueDate, status, prirority,category };

    setTitle('');
    setdisc('');
    setDueDate('');
    setStatus('todo');
    setprirority('low');
    setCategory('')

    try{
      const response = await axios.put(`http://localhost:3000/tasks/${task.taskId}`, 
        { newTask }, 
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json', 
          }
        }
      );
    
      updateTask(task.taskId,newTask)
      navigate('/');
  
    }catch(err){
      const errmss=err.response.data.message;
      return alert(errmss);
    }
  };

  return (

<Grid centered verticalAlign="middle" style={{ height: '90vh' }}>
  <Grid.Column style={{ maxWidth: 600 }}>
    <Segment raised>
      <Header as="h2" textAlign="center" className="text-lg font-bold mb-4">Update Task</Header>
      
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" primary fluid>Update Task</Button>
      </Form>
    </Segment>
  </Grid.Column>
</Grid>
    

  );
}

export default UpdateForm;