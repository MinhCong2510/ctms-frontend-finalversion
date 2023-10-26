import { createBoard } from '@wixc3/react-board';
import { Create_Patient } from '../../../components/create-patient/create-patient';

export default createBoard({
    name: 'Create_Patient',
    Board: () => <Create_Patient />,
    isSnippet: true,
});
