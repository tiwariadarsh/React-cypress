import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
     <section className="Counters">
        <Counter max={15} step={5} />
      </section>
    </div>
  );
}

export default App;
