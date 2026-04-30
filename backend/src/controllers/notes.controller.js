const { notesService } = require('../services/notes.service');

const createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ 
        error: 'Title and content are required' 
      });
    }

    const note = notesService.createNote({ title, content });
    
    console.log('✅ Note created:', note);
    res.status(201).json({ 
      message: 'Note created successfully',
      note 
    });
  } catch (error) {
    next(error);
  }
};

const getAllNotes = async (req, res, next) => {
  try {
    const notes = notesService.getAllNotes();
    
    console.log(`📋 Retrieved ${notes.length} notes`);
    res.json({ 
      total: notes.length,
      notes 
    });
  } catch (error) {
    next(error);
  }
};

const getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = notesService.getNoteById(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    console.log('🔍 Note found:', note);
    res.json({ note });
  } catch (error) {
    next(error);
  }
};

const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title && !content) {
      return res.status(400).json({ 
        error: 'At least title or content is required' 
      });
    }

    const note = notesService.updateNote(id, { title, content });

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    console.log('✏️ Note updated:', note);
    res.json({ 
      message: 'Note updated successfully',
      note 
    });
  } catch (error) {
    next(error);
  }
};

const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = notesService.deleteNote(id);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    console.log('🗑️ Note deleted:', note);
    res.json({ 
      message: 'Note deleted successfully',
      note 
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};