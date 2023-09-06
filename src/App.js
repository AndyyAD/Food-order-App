import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Pricebox from './component/pricebox/Pricebox';

function App() {
    return (
        <>
            <div className="main container">
                <Dashboard />
                <Pricebox />
            </div>
        </>
    );
}

export default App;
