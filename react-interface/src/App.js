import { BiCalendar } from 'react-icons/bi';
import Search from './components/Search';
import AddAppoinment from './components/AddAppoinment';
import appoinmentList from './data.json';
import AppoinmentInfo from './components/AppoinmentInfo';
function App() {
  const style = { 'text-align': 'center', color: 'blue' };
  return (
    <>
      {' '}
      <div>
        <h1 className="text-center" style={style}>
          <BiCalendar />
          This is React Interface
        </h1>
      </div>
      <div>
        <AddAppoinment />
        <Search />

        <ul className="divide-y divide-gray-200">
          {appoinmentList.map((appoinment) => (
            <AppoinmentInfo key={appoinment.id} appoinment={appoinment} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
