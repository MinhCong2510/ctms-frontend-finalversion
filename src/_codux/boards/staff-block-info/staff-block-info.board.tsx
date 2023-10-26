import { createBoard } from '@wixc3/react-board';
import { Staff_BlockInfo } from '../../../components/staff-block-info/staff-block-info';

export default createBoard({
    name: 'Staff_BlockInfo',
    Board: () => <Staff_BlockInfo />,
    isSnippet: true,
});
