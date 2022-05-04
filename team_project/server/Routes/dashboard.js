const express = require("express");
const router = express.Router();

var ideas = [
  {
    workspace: "CMPE 272",
    name: "Idea1",
    description:
      "We, for example, have a column in Asana 'In development' with each sprint as a milestone. The milestones is the release.",
    category: "Tech",
    date: "2022-04-20",
    status: "AlreadyExists",
    votes: 12,
    hours: 12,
  },
  {
    workspace: "CMPE 272",
    name: "Idea2",
    description:
      "I need a filter that show me if an existing JIRA link exists, so that I can bulk delete orphaned requirements.",
    category: "Tech",
    date: "2022-04-19",
    status: "AlreadyExists",
    votes: 15,
    hours: 17,
  },
  {
    workspace: "CMPE 272",
    name: "Idea3",
    description:
      "Please add the capability to define a password per shared webpage! This would be most useful to us if we could set a password for each shared webpage",
    category: "Tech",
    date: "2022-04-19",
    status: "AlreadyExists",
    votes: 25,
    hours: 18,
  },
  {
    workspace: "CMPE 272",
    name: "Idea4",
    description:
      "Measure all your marketing activities and improve all your efforts based on performance results.",
    category: "Business",
    date: "2022-04-18",
    status: "AlreadyExists",
    votes: 23,
    hours: 32,
  },
  {
    workspace: "CMPE 272",
    name: "Idea5",
    description: "Use business ideas book to better manage all your ideas.",
    category: "Business",
    date: "2022-04-18",
    status: "AlreadyExists",
    votes: 32,
    hours: 29,
  },
  {
    workspace: "CMPE 272",
    name: "Idea6",
    description:
      "I want an application so that diners could easily share their thoughts on dishes and find something great everytime they eat out.",
    category: "Innovation",
    date: "2022-04-18",
    status: "AlreadyExists",
    votes: 60,
    hours: 48,
  },
  {
    workspace: "CMPE 272",
    name: "Idea7",
    description:
      "There is a huge need for a company that offered legal assistance for traffic tickets for a low price and money back guarantee",
    category: "Innovation",
    date: "2022-04-18",
    status: "AlreadyExists",
    votes: 45,
    hours: 40,
  },
];
var ideasInformation = [];
var hours = 10;
// logic for creating pie chart on dashboard
const ideaStatus = [
  { status: "AlreadyExists", count: 0 },
  { status: "WillNotImplement", count: 1 },
  { status: "FutureConsideration", count: 2 },
  { status: "Planned", count: 1 },
  { status: "Shipped", count: 2 },
  { status: "NeedsReview", count: 1 },
];
// logic ends

// logic for creating an array of dates and idea counts for dashboard barchart
var ideaCount = [
  { date: "2022-04-18", count: 4 },
  { date: "2022-04-19", count: 1 },
  { date: "2022-04-20", count: 2 },
];
var totalCount = 7;
var end = new Date();
var start = new Date("2022-04-22T04:15:02.993Z");
var dt = new Date(start);

while (dt <= end) {
  let newDate = new Date(dt);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let currentDate = `${year}${"-"}${
    month < 10 ? `0${month}` : `${month}`
  }${"-"}${date}`;
  ideaCount.push({ date: currentDate, count: 0 });
  dt.setDate(dt.getDate() + 1);
}
// logic ends

router.post("/createIdea", (req, res) => {
  console.log("Inside Create Idea POST");
  console.log("Request Body: " + JSON.stringify(req.body));
  let min = 0;
  let max = 100;
  if (req.body.idea) {
    if (req.body.idea.category == "Category 1") {
      min = 12;
      max = 19;
    } else if (req.body.idea.category == "Category 2") {
      min = 25;
      max = 35;
    } else {
      min = 41;
      max = 49;
    }
    let difference = max - min;
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor(rand * difference);

    // add with min value
    rand = rand + min;
    req.body.idea.hours = Math.floor(rand);
    ideas.push(req.body.idea);
    console.log("Idea Created Successfully! : " + ideas);
    var flag = false;
    ideaCount.map((idea) => {
      if (idea.date === req.body.idea.date) {
        idea.count += 1;
        flag = true;
      }
    });
    if (flag === false) {
      var count = { date: req.body.idea.date, count: 1 };
      ideaCount.push(count);
    }
    totalCount += 1;
    return res.status(200).send({
      success: true,
      message: "Idea Created Successfully!",
      ideas: ideas,
    });
  }
});

router.get("/getIdeas", (req, res) => {
  console.log("Inside Get Ideas GT");
  console.log(ideas);
  return res.status(200).send({
    success: true,
    message: "Idea Created Successfully!",
    ideas: ideas,
    ideaCount: ideaCount,
    ideaStatus: ideaStatus,
    totalCount: totalCount,
  });
});

// IDEA INFORMATION COMPONENT

router.post("/createIdeaInformation", (req, res) => {
  console.log("Inside Create Idea INFormation POST");
  console.log("Request Body: " + JSON.stringify(req.body));
  if (req.body.idea) {
    ideasInformation.push(req.body.idea);
    console.log(
      "Idea Information Created Successfully! : " +
        JSON.stringify(ideasInformation)
    );
    ideaStatus.map((ideastatus) => {
      if (ideastatus.status === req.body.idea.status) {
        ideastatus.count += 1;
      }
    });
    ideas.map((entry, index) => {
      if (index === req.body.index) {
        entry.votes = req.body.idea.votes;
      }
    });
    return res.status(200).send({
      success: true,
      message: "Idea Information Created Successfully!",
      ideasInformation: ideasInformation,
    });
  }
});

router.get("/getIdeasInformation", (req, res) => {
  console.log("Inside Get Ideas Information GET");
  // console.log(ideaStatus);
  return res.status(200).send({
    success: true,
    message: "Idea Created Successfully!",
    ideasInformation: ideasInformation,
    ideaStatus: ideaStatus,
  });
});

router.get("/getHoursForIdea", (req, res) => {
  console.log("Inside Get Hours Information GET");
  // return res.status(200).send({
  //   success: true,
  //   message: "Hours returned Successfully!",
  //   hours: hours,
  // });

  const { spawn } = require("child_process");
  // const child = spawn('dir', [], {shell: true});

  // const pyProg = spawn('python', ['./test.py'], {shell: true});

  // pyProg.stdout.on('data', function(data) {

  //     console.log("date has been returned", data.toString());
  //     res.write(data);
  //     res.end('end');
  // });

  // pyProg.stdout.on('error', function( err ){
  //   print(err)
  //   throw err })

  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", [__dirname + "/test.py"], { shell: true });
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log(dataToSend);
    // send data to browser
    res.send(dataToSend);
  });
});
module.exports = router;
/*
12-19 tech
25-35 business
41-49 innovation
*/
