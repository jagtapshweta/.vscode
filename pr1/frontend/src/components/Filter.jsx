import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Form, Button,Container } from 'semantic-ui-react';

export const Filter = () => {
  const [status, setStatus] = useState(null);
  const [prirority, setPriority] = useState(null); 

  const { filterTask } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      status: status === "null" ? null : status, 
      prirority: prirority === "null" ? null : prirority, 
    };
    filterTask(task);
    setStatus("null");
    setPriority("null");
  };

  return (
    <>
   <Container textAlign='center' style={{ height: '30vh', margin:'10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Form onSubmit={handleSubmit} style={{ width: '400px', border: '1px solid black', borderRadius: '8px', padding: '20px' }}>
        <Form.Field>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="ui dropdown"
          >
            <option value="null">null</option>
            <option value="in-progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="todo">To Do</option>
          </select>
        </Form.Field>

        <Form.Field>
          <label htmlFor="priority">Prirority</label>
          <select
            id="priority"
            value={prirority}
            onChange={(e) => setPriority(e.target.value)}
            className="ui dropdown"
          >
            <option value="null">null</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </Form.Field>

        <Button type="submit" primary>
          Filter
        </Button>
      </Form>
    </Container>
    </>
  );
};
