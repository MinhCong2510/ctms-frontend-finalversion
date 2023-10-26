import { createBoard } from '@wixc3/react-board';
import { AddObservation_Button } from '../../../components/add-observation-button/add-observation-button';

export default createBoard({
    name: 'AddObservation_Button',
    Board: () => <AddObservation_Button />,
    isSnippet: true,
});
