import './App.css';
import CounterTest from './components.js/CounterTest';
import FetchTest from './components.js/FetchTest';
import RenderTest from './components.js/RenderTest';
import SearchFilterTest from './components.js/SearchFilterTest';
import useCountRenders from './hooks/useCountRenders';

function App() {
  const [renderCount] = useCountRenders()

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h3>Times this app has rendered: {renderCount}</h3>

      <RenderTest />
      <CounterTest />
      <FetchTest />
      <SearchFilterTest />

    </div>
  );
}

export default App;
