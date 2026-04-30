let notesStore = [];
let noteIdCounter = 1;

const notesService = {
  createNote(noteData) {
    const note = {
      id: String(noteIdCounter++),
      title: noteData.title,
      content: noteData.content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    notesStore.push(note);
    return note;
  },

  getAllNotes() {
    return notesStore;
  },

  getNoteById(id) {
    return notesStore.find(note => note.id === id);
  },

  updateNote(id, updateData) {
    const noteIndex = notesStore.findIndex(note => note.id === id);

    if (noteIndex === -1) {
      return null;
    }

    const note = notesStore[noteIndex];

    if (updateData.title !== undefined) {
      note.title = updateData.title;
    }
    if (updateData.content !== undefined) {
      note.content = updateData.content;
    }

    note.updatedAt = new Date().toISOString();
    notesStore[noteIndex] = note;

    return note;
  },

  deleteNote(id) {
    const noteIndex = notesStore.findIndex(note => note.id === id);

    if (noteIndex === -1) {
      return null;
    }

    const deletedNote = notesStore.splice(noteIndex, 1);
    return deletedNote[0];
  },
};

module.exports = { notesService };