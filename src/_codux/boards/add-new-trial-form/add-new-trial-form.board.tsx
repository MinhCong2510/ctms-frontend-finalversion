import { createBoard } from '@wixc3/react-board';
import { Add_NewTrial_Form } from '../../../components/add-new-trial-form/add-new-trial-form';

export default createBoard({
    name: 'Add_NewTrial_Form',
    Board: () => <Add_NewTrial_Form />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640
    }
});
