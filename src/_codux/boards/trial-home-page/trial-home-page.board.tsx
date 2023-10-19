import { createBoard } from '@wixc3/react-board';
import { Trial_HomePage } from '../../../components/trial-home-page/trial-home-page';

export default createBoard({
    name: 'Trial_HomePage',
    Board: () => <Trial_HomePage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 640,
        canvasWidth: 1024,
    }
});
