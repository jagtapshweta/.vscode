import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import { TaskContext } from '../context/TaskContext';


const Navbar = ({handleToken}) => {
  const token =localStorage.getItem('token');

  const {addTasks}=useContext(TaskContext)

  if(token){
    handleToken();
  }
  const handleOnClick=(e)=>{
    if(localStorage.getItem('token')){
      addTasks([])
      localStorage.removeItem('token')
    }
    else alert('login..First')
  }
  return (
    <Menu inverted>
      <Container>
        <Menu.Item header>
          Task Manager
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          Tasks
        </Menu.Item>
        <Menu.Item as={Link} to="/addTask">
          Add Task
        </Menu.Item>
        <Menu.Item as={Link} to="/signup">
          Signup
        </Menu.Item>
        {token&&<Menu.Item onClick={handleOnClick}>
          logout
        </Menu.Item>}
      </Container>
    </Menu>
  );
}

export default Navbar;
