import { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { Note } from "../initialNotes";

interface RootState {
  notes: Note[];
}

interface AddNoteProps {
  onNoteAdded: (newNote: Note) => void;
}

export function AddNote({ onNoteAdded }: AddNoteProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [contentName, setContentName] = useState("");
  const [category, setCategory] = useState("Task");

  const notes = useSelector((state: RootState) => state.notes);

  const openAddNoteModal = () => {
    setIsModalOpen(true);
    setContent("");
    setContentName("");
    setCategory("Task");
  };

  const closeAddNoteModal = () => {
    setIsModalOpen(false);
  };

  const extractDatesFromNote = (note: Note) => {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return note.content.match(datePattern) || [];
  };

  const handleSaveNote = () => {
    if (!content || !contentName) {
      alert("Please enter some content and title for the note");
      return;
    }

    const dates = extractDatesFromNote({
      id: notes.length + 1,
      createdAt: dayjs(new Date(Date.now())).format("MMMM DD, YYYY"),
      content,
      name: contentName,
      category,
      archived: false,
    });

    const newNote: Note = {
      id: notes.length + 1,
      createdAt: dayjs(new Date(Date.now())).format("MMMM DD, YYYY"),
      content,
      name: contentName,
      category,
      dates: dates,
      archived: false,
    };

    onNoteAdded(newNote);
    closeAddNoteModal();
  };

  return (
    <>
      <button id="addNoteBtn" onClick={openAddNoteModal}>
        Add Note
      </button>

      {isModalOpen && (
        <div className="modal_add" id="note_modal_add">
          <div className="addNoteField">
            <h3>Add a new note:</h3>
            <textarea
              id="noteName"
              placeholder="Enter your note title here..."
              value={contentName}
              onChange={(e) => setContentName(e.target.value)}
            />
            <textarea
              id="noteContent"
              placeholder="Enter your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <select
              id="noteCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
            <button id="saveNoteBtn" onClick={handleSaveNote}>
              Save Note
            </button>
          </div>
        </div>
      )}
    </>
  );
}
