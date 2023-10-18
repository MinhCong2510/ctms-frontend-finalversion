import { createBoard } from '@wixc3/react-board';
import { TrialOrg_BlockInfo } from '../../../components/trial-org-block-info/trial-org-block-info';

export default createBoard({
    name: 'TrialOrg_BlockInfo',
    Board: () => <TrialOrg_BlockInfo />,
    isSnippet: true,
});
