import { createBoard } from '@wixc3/react-board';
import { Filter_Component } from '../../../components/filter-component/filter-component';

export default createBoard({
    name: 'Filter_Component',
    Board: () => <Filter_Component />,
    isSnippet: true,
});
