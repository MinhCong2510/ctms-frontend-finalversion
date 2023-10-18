import { createBoard } from '@wixc3/react-board';
import { TrialOrg_FullPage } from '../../../components/trial-org-full-page/trial-org-full-page';

export default createBoard({
    name: 'TrialOrg_FullPage',
    Board: () => <TrialOrg_FullPage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640
    }
});
