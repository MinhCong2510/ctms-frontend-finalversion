import { createBoard } from '@wixc3/react-board';
import { Delete_Button } from '../../../components/delete-button/delete-button';

export default createBoard({
    name: 'Delete_Button',
    Board: () => <Delete_Button />,
    isSnippet: true,
});
