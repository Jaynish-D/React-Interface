import { BiArchive } from 'react-icons/bi';
import { IoBatteryHalfOutline, IoAddCircle } from 'react-icons/io5';

function App() {
  return (
    <div className="App container mx-auto mt-3">
      <h1>
        <IoBatteryHalfOutline />
        Your Application <BiArchive />
      </h1>
      <br />
      <h1>
        <IoAddCircle />
      </h1>
    </div>
  );
}

export default App;
