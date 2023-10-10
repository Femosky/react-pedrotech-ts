import './App.css';
import { Person, Country } from './components/Person';

function App() {
    function getAge(name: string) {
        return 99;
    }

    return (
        <div className="App">
            <Person
                name="Femi"
                email="femi@email.com"
                age={23}
                isMarried={false}
                friends={['jake', 'jessica', 'jerry']}
                country={Country.Canada}
            />
        </div>
    );
}

export default App;
