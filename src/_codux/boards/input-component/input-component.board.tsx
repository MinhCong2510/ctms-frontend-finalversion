import { createBoard } from '@wixc3/react-board';
import { Input_Component } from '../../../components/input-component/input-component';

export default createBoard({
    name: 'Input_Component',
    Board: () => <Input_Component />,
    isSnippet: true,
});
