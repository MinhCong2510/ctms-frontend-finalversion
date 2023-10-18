import { createBoard } from '@wixc3/react-board';
import { Create_NewTrialOrg_button } from '../../../components/create-new-trial-org-button/create-new-trial-org-button';

export default createBoard({
    name: 'Create_NewTrialOrg_button',
    Board: () => <Create_NewTrialOrg_button />,
    isSnippet: true,
});
