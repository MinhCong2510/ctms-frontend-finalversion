import { createBoard } from '@wixc3/react-board';
import { Generated_ClinicalReport } from '../../../components/generated-clinical-report/generated-clinical-report';

export default createBoard({
    name: 'Generated_ClinicalReport',
    Board: () => <Generated_ClinicalReport />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024
    }
});
