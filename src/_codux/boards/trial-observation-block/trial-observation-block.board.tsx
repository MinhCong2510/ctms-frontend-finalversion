import { createBoard } from '@wixc3/react-board';
import { Trial_Observation_Block } from '../../../components/trial-observation-block/trial-observation-block';

export default createBoard({
    name: 'Trial_Observation_Block',
    Board: () => <Trial_Observation_Block />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 713
    }
});
