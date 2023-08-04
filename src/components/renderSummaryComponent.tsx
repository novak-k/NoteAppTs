import { useSelector } from "react-redux";
import { Note } from "../initialNotes";

interface RootState {
  notes: Note[];
}

function filterNotesByCategory(notes: Note[], category: string): Note[] {
  return notes.filter((note) => note.category === category);
}

function createSummaryRow(category: string, notes: Note[]): JSX.Element {
  const categoryNotes = filterNotesByCategory(notes, category);
  const activeNotes = categoryNotes.filter((note) => !note.archived);
  const archivedNotes = categoryNotes.filter((note) => note.archived);

  return (
    <tr key={category}>
      <td>{category}</td>
      <td>{activeNotes.length}</td>
      <td>{archivedNotes.length}</td>
    </tr>
  );
}

export function RenderSummaryTable(): JSX.Element {
  const state = useSelector((state: RootState) => state);
  const notes = state.notes;

  const categories = ["Task", "Random Thought", "Idea"];

  return (
    <table id="summaryTable">
      <thead>
        <tr>
          <th>Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          createSummaryRow(category, notes)
        ))}
      </tbody>
    </table>
  );
}
