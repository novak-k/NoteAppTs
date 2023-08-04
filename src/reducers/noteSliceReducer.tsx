import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialNotes, Note } from "../initialNotes";

interface NoteState extends Array<Note> { }

const initialState: NoteState = [...initialNotes];

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, name, content, category } = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        existingNote.name = name;
        existingNote.content = content;
        existingNote.category = category;
      }
    },
    toggleArchive: (state, action: PayloadAction<number>) => {
      const note = state.find((n) => n.id === action.payload);
      if (note) {
        note.archived = !note.archived;
      }
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((n) => n.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addNote, editNote, toggleArchive, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
