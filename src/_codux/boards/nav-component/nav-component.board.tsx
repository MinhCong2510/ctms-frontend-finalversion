import { createBoard } from '@wixc3/react-board';
import { NavComponent } from '../../../components/nav-component/nav-component';

export default createBoard({
    name: 'NavComponent',
    Board: () => <NavComponent />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 34
    }
});
