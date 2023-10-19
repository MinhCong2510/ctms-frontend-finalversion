import { createBoard } from '@wixc3/react-board';
import { Trial_HomePage_Overview } from '../../../components/trial-home-page-overview/trial-home-page-overview';

export default createBoard({
    name: 'Trial_HomePage_Overview',
    Board: () => <Trial_HomePage_Overview />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 104
    }
});
