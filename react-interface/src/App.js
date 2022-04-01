import Search from './components/Search';
import AddAppoinment from './components/AddAppoinment';
function App() {
  return (
    <>
      <div>
        <h1 className="text-center">This is React Interface</h1>
      </div>
      <div>
        <AddAppoinment />
        <Search />
      </div>
    </>
  );
}

export default App;
