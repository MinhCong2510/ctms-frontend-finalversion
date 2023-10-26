import { createBoard } from '@wixc3/react-board';
import { Patient_Home } from '../../../components/patient-home/patient-home';

export default createBoard({
    name: 'Patient_Home',
    Board: () => <Patient_Home />,
    isSnippet: true,
});
