const express = require("express");
const router = express.Router();

var ideas = [];
var ideasInformation = [];
var hours = 10;
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


// IDEA INFORMATION COMPONENT


router.post("/createIdeaInformation", (req, res) => {
  console.log("Inside Create Idea INFormation POST");
  console.log("Request Body: " + JSON.stringify(req.body));
  if (req.body.idea) {
    ideasInformation.push(req.body.idea);
    console.log("Idea Information Created Successfully! : " + ideasInformation);
    return res.status(200).send({
      success: true,
      message: "Idea Information Created Successfully!",
      ideasInformation: ideasInformation,
    });
  }
});

router.get("/getIdeasInformation", (req, res) => {
  console.log("Inside Get Ideas Information GET");
  return res.status(200).send({
    success: true,
    message: "Idea Created Successfully!",
    ideasInformation: ideasInformation,
  });
});

router.get("/getHoursForIdea", (req, res) => {
  console.log("Inside Get Hours Information GET");
  return res.status(200).send({
    success: true,
    message: "Hours returned Successfully!",
    hours: hours,
  });
});
module.exports = router;
