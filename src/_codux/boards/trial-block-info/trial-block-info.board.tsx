import { createBoard } from '@wixc3/react-board';
import { Trial_BlockInfo } from '../../../components/trial-block-info/trial-block-info';

export default createBoard({
    name: 'Trial_BlockInfo',
    Board: () => <Trial_BlockInfo />,
    isSnippet: true,
});
