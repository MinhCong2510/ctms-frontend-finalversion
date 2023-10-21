import { createBoard } from '@wixc3/react-board';
import { Add_TrialOrg_Form } from '../../../components/add-trial-org-form/add-trial-org-form';

export default createBoard({
    name: 'Add_TrialOrg_Form',
    Board: () => <Add_TrialOrg_Form />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 640,
        canvasWidth: 1024
    }
});
