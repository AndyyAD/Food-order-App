import './App.css';
import Filterbox from './component/filter/Filterbox';
import Pricebox from './component/pricebox/Pricebox';

function App() {
    return (
        <>
            <div className="main container">
                <Filterbox />
                <Pricebox />
            </div>
        </>
    );
}

export default App;
