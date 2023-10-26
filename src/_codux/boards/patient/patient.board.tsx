import { createBoard } from '@wixc3/react-board';
import { Patient } from '../../../components/patient/patient';

export default createBoard({
    name: 'Patient',
    Board: () => <Patient />,
    isSnippet: true,
});
