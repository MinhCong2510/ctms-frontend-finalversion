import { createBoard } from '@wixc3/react-board';
import { GenerateReport_button } from '../../../components/generate-report-button/generate-report-button';

export default createBoard({
    name: 'GenerateReport_button',
    Board: () => <GenerateReport_button />,
    isSnippet: true,
});
