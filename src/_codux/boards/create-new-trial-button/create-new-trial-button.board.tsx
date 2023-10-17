import { createBoard } from '@wixc3/react-board';
import { Create_NewTrial_Button } from '../../../components/create-new-trial-button/create-new-trial-button';

export default createBoard({
    name: 'Create_NewTrial_Button',
    Board: () => <Create_NewTrial_Button />,
    isSnippet: true,
});
