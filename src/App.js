import logo from './logo.svg';
import './App.css';
import License from './Components/License';

const image = require('./assets/profilepic.jpeg');

function App() {
  return (
    <div className="App">
      <License
        image={image}
        name='Ben Blakburn'
        streetAddress='1 Aylesbury Drive'
        state='Buckinghamshire'
        age={20}
      />

    <License
        image={image}
        name='Jon Doe'
        streetAddress='1 Aylesbury Drive'
        state='TX'
        age={45}
      />

    </div>
  );
}

export default App;
