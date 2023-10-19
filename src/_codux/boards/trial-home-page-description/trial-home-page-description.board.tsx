import { createBoard } from '@wixc3/react-board';
import { Trial_HomePage_Description } from '../../../components/trial-home-page-description/trial-home-page-description';

export default createBoard({
    name: 'Trial_HomePage_Description',
    Board: () => <Trial_HomePage_Description />,
    isSnippet: true,
});
