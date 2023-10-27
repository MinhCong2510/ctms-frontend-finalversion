import { createBoard } from '@wixc3/react-board';
import { StaffHome } from '../../../components/staff-home/staff-home';

export default createBoard({
    name: 'StaffHome',
    Board: () => <StaffHome />,
    isSnippet: true,
});
