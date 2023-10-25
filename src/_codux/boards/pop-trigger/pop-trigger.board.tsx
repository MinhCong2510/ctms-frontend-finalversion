import { createBoard } from '@wixc3/react-board';
import { PopTrigger } from '../../../components/pop-trigger/pop-trigger';

export default createBoard({
    name: 'PopTrigger',
    Board: () => <PopTrigger />,
    isSnippet: true,
});
