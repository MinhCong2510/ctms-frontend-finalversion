import { createContext, useContext, useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import { Login } from './components/login/login';
import { Add_NewTrial_Form } from './components/add-new-trial-form/add-new-trial-form';
import { Trial_HomePage } from './components/trial-home-page/trial-home-page';
import { Trial_Observation } from './components/trial-observation/trial-observation';
import { Add_TrialOrg_Form } from './components/add-trial-org-form/add-trial-org-form';
import { Add_Observation_Form } from './components/add-observation-form/add-observation-form';
import { Generated_ClinicalReport } from './components/generated-clinical-report/generated-clinical-report';
import { TrialOrg_FullPage } from './components/trial-org-full-page/trial-org-full-page';
import { Patient_Home } from './components/patient-home/patient-home';
import { CreatePatient_Page } from './components/create-patient-page/create-patient-page';
import { Patient } from './components/patient/patient';
import { Trial } from './components/trial/trial';
import { RoleContext } from './RoleContext';
import { Trial_HomePage_Overview } from './components/trial-home-page-overview/trial-home-page-overview';
import Wrapper from './Wrapper';

function App() {
    const [role, setRole] = useState(0);
    
    return (
        <Wrapper role={role} setRole={setRole}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />}></Route>
                    <Route path='/home' element={<HomePage />}></Route>
                    <Route path='/addtrial' element={<Add_NewTrial_Form/>}></Route>
                    <Route path='/trialInfo' element={<Trial/>}></Route>
                    <Route path="/GenerateReport" element={<Generated_ClinicalReport/>}></Route>
                    <Route path="/trials">
                        <Route index element={<Trial_HomePage/>}></Route>
                        <Route path=':trialId/'>
                            <Route index element={<Trial/>}></Route>
                            <Route path="observations" element={<Trial_Observation/>}></Route>
                            <Route path="add" element={<Add_Observation_Form/>}></Route>
                        </Route>
                    </Route>
                    <Route path="/organisations" element={<TrialOrg_FullPage/>}></Route>
                    <Route path="/addorganisation" element={<Add_TrialOrg_Form/>}></Route>
                    <Route path="/patients" >
                        <Route index element={<Patient_Home/>}></Route>
                        <Route path="add" element={<CreatePatient_Page/>}></Route>
                        <Route path=':patientId/' element={<Patient/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Wrapper>
    );
}

export default App;
