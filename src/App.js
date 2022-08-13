import logo from './logo.svg';
import './App.css';
import GreetingStyled from './components/pure/greetingStyled';
// import Greeting from './components/pure/Greeting';
// import GreetingF from './components/pure/GreetingF';
// import TaskListComponent from './components/containers/task_list';
// import ContactListComponent from './components/containers/contact_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import ComponentWithContext from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <GreetingF name="Elvis"></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <ComponentWithContext></ComponentWithContext> */}
        {/* <Ejemplo4 name="Elvis">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        <GreetingStyled name="Elvis"></GreetingStyled>
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
