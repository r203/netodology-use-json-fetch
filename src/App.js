import './App.css';
import useJsonFetch from './hooks/useJsonFetch';

function Data(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
  console.log(data);

  return (
    <div>

    </div>
  );
};

function Error(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');
  console.log(error);

  return (
    <div>
    </div>
  );
};

function Loading(props) {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');
  console.log(loading);

  return (
    <div>
    </div>
  );
};



function App() {
  return (
    <div className="App">
      {/* <Data/> */}
      <Error/>
      {/* <Loading/> */}
    </div>
  );
}

export default App;
