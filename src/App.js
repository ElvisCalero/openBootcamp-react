import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/containers/task_list';
import ContactListComponent from './components/containers/contact_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GreetingF name="Elvis"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        <ContactListComponent></ContactListComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world
        </a>
      </header>
    </div>
  );
}

export default App;
