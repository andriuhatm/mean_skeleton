const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ hello: "world" });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json({ hello: "world" });
  } catch (err) {
    console.error(err);
    res.send(err.message ? err.message : err);
  }
});

module.exports = router;
