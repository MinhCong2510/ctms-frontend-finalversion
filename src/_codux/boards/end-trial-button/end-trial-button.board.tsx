import { createBoard } from '@wixc3/react-board';
import { EndTrial_button } from '../../../components/end-trial-button/end-trial-button';

export default createBoard({
    name: 'EndTrial_button',
    Board: () => <EndTrial_button />,
    isSnippet: true,
});
