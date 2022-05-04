const express = require("express");
const router = express.Router();

var ideas = [];
var ideasInformation = [];
var hours = 10;
// logic for creating pie chart on dashboard
const ideaStatus = [
  { status: "AlreadyExists", count: 4 },
  { status: "WillNotImplement", count: 2 },
  { status: "FutureConsideration", count: 3 },
  { status: "Planned", count: 3 },
  { status: "Shipped", count: 2 },
  { status: "NeedsReview", count: 1 },
];
// logic ends

// logic for creating an array of dates and idea counts for dashboard barchart
var ideaCount = [{ date: "2022-04-18", count: 4 }];
var end = new Date();
var start = new Date("2022-04-20T04:15:02.993Z");
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
  if (req.body.idea) {
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
    return res.status(200).send({
      success: true,
      message: "Idea Created Successfully!",
      ideas: ideas,
    });
  }
});

router.get("/getIdeas", (req, res) => {
  console.log("Inside Get Ideas GET");
  // console.log(ideaCount);
  return res.status(200).send({
    success: true,
    message: "Idea Created Successfully!",
    ideas: ideas,
    ideaCount: ideaCount,
    ideaStatus: ideaStatus,
  });
});

// IDEA INFORMATION COMPONENT

router.post("/createIdeaInformation", (req, res) => {
  console.log("Inside Create Idea INFormation POST");
  console.log("Request Body: " + JSON.stringify(req.body));
  if (req.body.idea) {
    ideasInformation.push(req.body.idea);
    console.log("Idea Information Created Successfully! : " + ideasInformation);
    ideaStatus.map((ideastatus) => {
      if (ideastatus.status === req.body.idea.status) {
        ideastatus.count += 1;
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
  console.log(ideaStatus);
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


  const { spawn } = require('child_process');
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
    const python = spawn('python', [__dirname +'/test.py'], {shell: true});
    // collect data from script
      python.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    console.log(dataToSend);
    // send data to browser
    res.send(dataToSend)
    });

});
module.exports = router;
/*
12-19 tech
25-35 business
41-49 innovation
*/