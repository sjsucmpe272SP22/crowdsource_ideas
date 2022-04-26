const express = require("express");
const router = express.Router();

var ideas = [];

router.post("/createIdea", (req, res) => {
  console.log("Inside Create Idea POST");
  console.log("Request Body: " + JSON.stringify(req.body));
  if (req.body.idea) {
    ideas.push(req.body.idea);
    console.log("Idea Created Successfully! : " + ideas);
    return res.status(200).send({
      success: true,
      message: "Idea Created Successfully!",
      ideas: ideas,
    });
  }
});

router.get("/getIdeas", (req, res) => {
  console.log("Inside Get Ideas GET");
  return res.status(200).send({
    success: true,
    message: "Idea Created Successfully!",
    ideas: ideas,
  });
});

module.exports = router;
