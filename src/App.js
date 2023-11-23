import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/tarefa/Login";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Login />      
      <ListarTarefa />
    </div>
  );
}

export default App;
