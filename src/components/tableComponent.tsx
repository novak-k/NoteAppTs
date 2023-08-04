import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";
import { TableRow } from "./tableRowComponent";
import { useDispatch } from "react-redux";
import { removeNote, toggleArchive } from "../reducers/noteSliceReducer";
import { EditNote } from "./editNotesComponent";
import { useState } from "react";
import { Note } from "../initialNotes";

export const TableData = () => {
  const notes = useAppSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<Note | null>(null);

  return (
    <>
      <table id="notesTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Created Date</th>
            <th>Content</th>
            <th>Category</th>
            <th>Dates</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {notes.map(note =>
            <TableRow key={note.id} data={note}
              onEdit={(note) => setSelected(note)}
              onArchive={(id) => dispatch(toggleArchive(id))}
              onDelete={(id) => dispatch(removeNote(id))} />)}
        </tbody>
      </table>
      {selected ?
        <EditNote note={selected as Note} onClose={() => setSelected(null)} />
        : null}
    </>
  )
}
