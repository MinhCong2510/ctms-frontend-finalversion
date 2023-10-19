import { createBoard } from '@wixc3/react-board';
import { Trial_Observation } from '../../../components/trial-observation/trial-observation';

export default createBoard({
    name: 'Trial_Observation',
    Board: () => <Trial_Observation />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1039,
        canvasHeight: 625
    }
});
