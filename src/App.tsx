import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from './components/login/login';


function App() {
    const [count, setCount] = useState(0);

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
