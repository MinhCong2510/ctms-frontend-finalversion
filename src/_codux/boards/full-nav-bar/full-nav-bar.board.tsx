import { createBoard } from '@wixc3/react-board';
import { FullNavBar } from '../../../components/full-nav-bar/full-nav-bar';

export default createBoard({
    name: 'FullNavBar',
    Board: () => <FullNavBar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024
    }
});
