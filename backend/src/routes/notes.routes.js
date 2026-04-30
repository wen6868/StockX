const { Router } = require('express');
const { 
  createNote, 
  getAllNotes, 
  getNoteById, 
  updateNote, 
  deleteNote 
} = require('../controllers/notes.controller');

const notesRouter = Router();

notesRouter.post('/', createNote);
notesRouter.get('/', getAllNotes);
notesRouter.get('/:id', getNoteById);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

module.exports = { notesRouter };