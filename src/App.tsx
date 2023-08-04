import { useDispatch } from "react-redux";
import { Note } from "./initialNotes";
import { AddNote } from './components/addNotesComponent';
import { addNote } from './reducers/noteSliceReducer';
import { RenderSummaryTable } from "./components/renderSummaryComponent";
import { TableData } from "./components/tableComponent";

import './App.css';

function App() {
  const dispatch = useDispatch();

  const handleNoteAdded = (newNote: Note) => {
    dispatch(addNote(newNote));
  };

  return (
    <div>
      <h1>Note App TS</h1>

      <TableData />
      <AddNote onNoteAdded={handleNoteAdded} />
      <RenderSummaryTable />

    </div>
  );
}

export default App;
