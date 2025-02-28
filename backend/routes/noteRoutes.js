const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const { authenticateToken } = require("../middleware/auth.middleware");


router.post("/add-note", authenticateToken, noteController.addNote);
router.put("/edit-note/:noteId", authenticateToken, noteController.editNote);
router.get("/get-all-notes", authenticateToken, noteController.getAllNotes);
router.delete("/delete-note/:noteId", authenticateToken, noteController.deleteNote);
router.put("/update-note-pinned/:noteId", authenticateToken, noteController.updateNotePinned);
router.get("/search-notes",authenticateToken,noteController.searchNotes);

module.exports = router;
