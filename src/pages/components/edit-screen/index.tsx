/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// export const Edit=()=>{
//     return(<DndProvider backend={HTML5Backend}>

//     </DndProvider>)
// }

interface Props {}
interface State {}
export default class EditScreen<Props, State> extends React.Component {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return <DndProvider backend={HTML5Backend}></DndProvider>;
  }
}
