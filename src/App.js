import { useActions } from "./Hooks/use-actions";
import { CreateItem } from "./Components/CreateItem";
import { ListItem } from "./Components/ListItem";


function App() {
  const [{ inputValue, state }, actions] = useActions();

  return (
    <div className="App">
        <main>
          <h3> What do You have to do today? 📝 </h3>
          <CreateItem handleInput={ actions.handleInput } saveItem={ actions.onSaveItem } inputValue={ inputValue } />
          <ListItem />
        </main>
        <footer>
          <span>Elvin D. Guzman</span>
        </footer>
    </div>
  );
}

export default App;
