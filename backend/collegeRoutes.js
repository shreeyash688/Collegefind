const express = require("express");
const router = express.Router();
const db = require("./db");

// ==============================
// GET ALL COLLEGES
// ==============================
router.get("/colleges", (req, res) => {

    const sql = "SELECT * FROM colleges";

    db.query(sql, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error",
                error: err.message
            });
        }

        res.json(result);

    });

});


// ==============================
// GET SINGLE COLLEGE
// ==============================
router.get("/college/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM colleges WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error",
                error: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "College not found"
            });
        }

        res.json(result[0]);

    });

});

module.exports = router;