import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TopFive from './TopFive';

const Index1 = () => {

    return (
        <Router>
            <div className="any">

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/TopFive" element={<TopFive />} />
                </Routes>

            </div >

        </Router >

    );
}

export default Index1;