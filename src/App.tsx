import "./App.css";
import { Header } from "./component/Header";
import { Main } from "./Main";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </div>
  );
}
export default App;
