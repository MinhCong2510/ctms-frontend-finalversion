import { createBoard } from '@wixc3/react-board';
import { CreatePatient_Page } from '../../../components/create-patient-page/create-patient-page';

export default createBoard({
    name: 'CreatePatient_Page',
    Board: () => <CreatePatient_Page />,
    isSnippet: true,
});
