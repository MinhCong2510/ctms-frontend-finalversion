import { createBoard } from '@wixc3/react-board';
import { PopUp } from '../../../components/pop-up/pop-up';

export default createBoard({
    name: 'PopUp',
    Board: () => <PopUp />,
    isSnippet: true,
});
