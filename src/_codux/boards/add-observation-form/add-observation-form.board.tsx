import { createBoard } from '@wixc3/react-board';
import { Add_Observation_Form } from '../../../components/add-observation-form/add-observation-form';

export default createBoard({
    name: 'Add_Observation_Form',
    Board: () => <Add_Observation_Form />,
    isSnippet: true,
});
