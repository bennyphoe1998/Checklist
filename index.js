const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


//ROUTES

//create a topic

app.post("/checklist", async(req, res) => {
    try {
        const { name } = req.body;
        const addTopic = await pool.query("INSERT INTO topic(name) VALUES ($1) RETURNING *", [name]);
        res.json(addTopic.rows[0]);    
    } catch (error) {
        console.error(error.message);
    }
})

//delete a topic

app.delete("/checklist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTopic = await pool.query("DELETE FROM topic WHERE topic.tid = $1 RETURNING *", [id]);
        res.json(deleteTopic.rows[0]);    
    } catch (error) {
        console.error(error.message);
    }
})

//add date to topic

app.post("/checklist/date/:tid", async (req, res) => {
    try {
        const { date } = req.body;
        const { tid } = req.params;
        const addDateToTopic = await pool.query("INSERT INTO topicdates(tid, date) VALUES ($1, $2) RETURNING *", [tid, date]);
        res.json(addDateToTopic.rows[0]); 
    } catch (error) {
        console.error(error.message);
    }
})

//add activity to topic

app.post("/checklist/activity/:tid", async (req, res) => {
    try {
        const { description } = req.body;
        const { tid } = req.params;
        const addActivityToTopic = await pool.query("INSERT INTO topicactivities(tid, description) VALUES ($1, $2) RETURNING *", [tid, description]);
        res.json(addActivityToTopic.rows[0]);    
    } catch (error) {
        console.error(error.message);
    }
})

//connect a date in a topic to an activity in the same topic

app.post("/checklist/activitydate/:tid&:aid&:did", async (req, res) => {
    try {
        const { tid, aid, did } = req.params;
        const addActivityToDate = await pool.query("INSERT INTO dateactivities(tid, aid, did) VALUES ($1, $2, $3) RETURNING *", [tid, aid, did]);
        res.json(addActivityToDate.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//disconnect a date in a topic to an activity in the same topic
app.delete("/checklist/activitydate/:tid&:aid&:did", async (req, res) => {
    try {
        const {tid, aid, did } = req.params;
        const deleteActivityFromDate = await pool.query("DELETE FROM dateactivities WHERE aid = $1 AND did = $2 AND tid = $3 RETURNING *", [aid, did, tid]);
        res.json(deleteActivityFromDate.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//retrieve a date and an activity to check if it was checked beforehand

app.get("/checklist/activitydate/:tid", async(req, res) => {
    const { tid } = req.params;
    const getAllActivityDates = await pool.query("SELECT * FROM dateactivities WHERE tid = $1", [tid]);
    res.json(getAllActivityDates.rows);
})

//delete an activity of a certain topic

app.delete("/checklist/activity/:tid&:aid", async (req, res) => {
    try {
        const { tid, aid } = req.params;
        const deleteActivity = await pool.query("DELETE FROM topicactivities WHERE tid = $1 AND aid = $2 RETURNING *", [tid, aid]);
        res.json(deleteActivity.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//update an activity of a certain topic

app.put("/checklist/activity/:tid&:aid", async (req, res) => {
    try {
        const { tid, aid } = req.params;
        const { description } = req.body;
        const updateActivity = await pool.query("UPDATE topicactivities SET description = $1 WHERE tid = $2 AND aid = $3 RETURNING *", [description, tid, aid]);
        res.json(updateActivity.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});



//get all topics

app.get("/checklist", async (req, res) => {
    try {
        const allTopics = await pool.query("SELECT * FROM topic");
        res.json(allTopics.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//get all activity under that topic

app.get("/checklist/activity/:tid", async (req, res) => {
    try {
        const { tid } = req.params;
        const allActivitiesUnderTopic = await pool.query("SELECT * FROM topicactivities WHERE tid = $1", [tid]);
        res.json(allActivitiesUnderTopic.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get all dates under that topic

app.get("/checklist/date/:tid", async (req, res) => {
    try {
        const { tid } = req.params;
        const allDatesUnderTopic = await pool.query("SELECT * FROM topicdates WHERE tid = $1", [tid]);
        res.json(allDatesUnderTopic.rows);
    } catch (error) {
        console.error(error.message);
    }
})


app.listen (5000, () => {
    console.log("server is running on port 5000");
})