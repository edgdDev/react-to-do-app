import { useActions } from "./Hooks/use-actions";
import { CreateItem } from "./Components/CreateItem";
import { ListItem } from "./Components/ListItem";
import './styles/style.css';

function App() {
  const [{ inputValue, state }, actions] = useActions();

  return (
    <div className="App">
      <main className="main">
        <h3> What do You have to do today? 📝 </h3>
        <CreateItem handleInput={actions.handleInput} saveItem={actions.onSaveItem} inputValue={inputValue} />
        <ListItem items={state.items} removeItem={actions.onRemoveItem} completeItem={actions.onCompleteItem} />
      </main>
      <footer className="footer">
        <h6>{'Made by <Elvin D. Guzmán />'}</h6>
      </footer>
    </div>
  );
}

export default App;
