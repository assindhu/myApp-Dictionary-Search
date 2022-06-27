import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">
          <a href="https://github.com/assindhu/myApp-Dictionary-Search">
            Coded by sindhu
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
