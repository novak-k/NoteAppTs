import { useDispatch } from "react-redux";
import { editNote } from "../reducers/noteSliceReducer";
import { Note } from "../initialNotes";
import { useState } from "react";

interface EditNoteProps {
  note: Note;
  onClose?: () => void;
}

export function EditNote({ note, onClose }: EditNoteProps) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(note.content);
  const [contentName, setContentName] = useState(note.name);
  const [category, setCategory] = useState(note.category);

  const handleSaveEdit = () => {

    const updated = {
      ...note,
      content: content,
      name: contentName,
      category: category
    }

    dispatch(editNote(updated));
    if (onClose) onClose();
  };

  return (
    <div className="modal_edit" id="note_modal_edit">
      <div>
        <form id="edit_form">
          <input
            type="text"
            id="ip_name"
            name="name"
            value={contentName}
            onChange={(e) => setContentName(e.target.value)}
          />
          <input
            type="text"
            id="ip_content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="text"
            id="ip_category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input type="hidden" id="ip_note_id" name="id" value={note.id} />

          <button type="button" id="edit_save_button" onClick={handleSaveEdit}>
            Save
          </button>
          <button type="button" id="edit_close_button" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
