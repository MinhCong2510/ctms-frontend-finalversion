import { createBoard } from '@wixc3/react-board';
import { Trial } from '../../../components/trial/trial';

export default createBoard({
    name: 'Trial',
    Board: () => <Trial />,
    isSnippet: true,
});
