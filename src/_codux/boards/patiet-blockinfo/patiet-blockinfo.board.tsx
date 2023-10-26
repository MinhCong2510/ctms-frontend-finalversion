import { createBoard } from '@wixc3/react-board';
import { Patiet_blockinfo } from '../../../components/patiet-blockinfo/patiet-blockinfo';

export default createBoard({
    name: 'Patiet_blockinfo',
    Board: () => <Patiet_blockinfo />,
    isSnippet: true,
});
