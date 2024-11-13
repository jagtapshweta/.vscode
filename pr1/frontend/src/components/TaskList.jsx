import React, { useContext} from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext';
import { Filter } from './Filter';
import {  Header } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

function TaskList() {
  const token = localStorage.getItem('token');

  const navigate=useNavigate();
  if(!token){
    return <Header as="h2" textAlign="center" className="text-lg font-bold mb-4">Please Login..</Header>
  }
  const {filtred}=useContext(TaskContext);
  return (
    <>
    <Filter></Filter>
    <hr></hr>
    <Header as="h2" textAlign="center" className="text-lg font-bold mb-4">Task List</Header>
    <hr></hr>
    <div>
      <ul>
        {filtred.map((task,index) => 
          <TaskItem
            key={index}
            task={task}
          />
        )}
      </ul>
    </div>
    </>
  );
}

export default TaskList;
