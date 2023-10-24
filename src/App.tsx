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
import { Add_NewTrial_Form } from './components/add-new-trial-form/add-new-trial-form';
import { Trial_HomePage } from './components/trial-home-page/trial-home-page';
import { Trial_Observation } from './components/trial-observation/trial-observation';
import { Add_TrialOrg_Form } from './components/add-trial-org-form/add-trial-org-form';
import { Add_Observation_Form } from './components/add-observation-form/add-observation-form';
import { Generated_ClinicalReport } from './components/generated-clinical-report/generated-clinical-report';
import { TrialOrg_FullPage } from './components/trial-org-full-page/trial-org-full-page';

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Login />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/addtrial' element={<Add_NewTrial_Form/>}></Route>
            <Route path="/observations" element={<Trial_Observation/>}></Route>
            <Route path="/addorganisation" element={<Add_TrialOrg_Form/>}></Route>
            <Route path="/addobservations" element={<Add_Observation_Form/>}></Route>
            <Route path="/GenerateReport" element={<Generated_ClinicalReport/>}></Route>
            <Route path="/trial" element={<Trial_HomePage/>}></Route>
            <Route path="/organisation" element={<TrialOrg_FullPage/>}></Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
