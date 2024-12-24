
import './App.css'
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'
import login from './pages/login'
import signup from './pages/signup'
import registeration from './pages/registration'
import { SignIn } from '@clerk/clerk-react'

function App() {


  return (
        <>

            <Router>
                <Routes>
                    {/* <Route path = "/" element={<h1>Home</h1>}/> */}
                    <Route path = "login" element={login}/>
                    <Route path = "signup" element={signup}/>
                    <Route path = "register" element={registeration}/>
                    <Route path = "dashboard" element={<h1>Home</h1>}/>
                </Routes>
            </Router>

        </>
    )
}

export default App
