import { createBoard } from '@wixc3/react-board';
import { Observation_SummaryReport } from '../../../components/observation-summary-report/observation-summary-report';

export default createBoard({
    name: 'Observation_SummaryReport',
    Board: () => <Observation_SummaryReport />,
    isSnippet: true,
});
