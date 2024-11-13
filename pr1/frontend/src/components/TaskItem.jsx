import { Card, Button } from 'semantic-ui-react';
import { TaskContext } from '../context/TaskContext';
import {useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskItem = ({task}) =>{
  const {deleteTask}=useContext(TaskContext)

  const navigate=useNavigate()
  const handleDelete=async()=>{
    try{
      const response=await axios.delete(`http://localhost:3000/tasks/${task.taskId}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })

      if(response.status===200){
        deleteTask(task.taskId);
      }

    }catch(err){
      return alert(err.response.data)
    }
  }

  const handleEdit=()=>{
    navigate('/update',{state:{task}})
  }
  return(<>
  <Card fluid>
    <Card.Content>
      <Card.Header>{task.title}</Card.Header>
      <Card.Description>{task.description}</Card.Description>
      <Card.Meta>
        <span><strong>Due Date:</strong> {task.dueDate}</span><br />
        <span><strong>Status:</strong> {task.status}</span><br />
        <span><strong>Priority:</strong> {task.prirority}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='yellow' onClick={handleEdit}>Edit</Button>
      <Button basic color='red' onClick={handleDelete}>Delete</Button>
    </Card.Content>
  </Card>
  </>)
}
export default TaskItem;
