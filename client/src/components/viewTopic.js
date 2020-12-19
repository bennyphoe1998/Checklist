import React, {Fragment, useState, useEffect} from "react"
import { format } from "date-fns"
import Checkbox from "./checkboxes"
import AddActivity from "./addActivity";
import EditActivity from "./editActivity";
import AddDate from "./addDate"
const ViewTopic = (props) => {
    const {name, tid} = props.location.state;

    const [activities, setActivities] = useState([]);
    const [dates, setDates] = useState([]);
    const [dateActivities, setDateActivities] = useState([]);

    const getAllActivities = async() => {
        try {
            const response = await fetch(`/checklist/activity/${tid}`, {
                method: "GET",
                headers: { "Content-Type" : "application/json"}
            })
            setActivities( await response.json());
        } catch (error) {
            console.error(error.message);
        }
    }

    const getAllDates = async() => {
        try {
            const response = await fetch (`/checklist/date/${tid}`, {
                method: "GET",
                headers: { "Content-Type" : "application/json"}
            })
            setDates( await response.json());
        } catch (error) {
            console.error(error.message);
        }
    }

    const getAllDateActivity = async() => {
        try {
            const response = await fetch (`/checklist/activitydate/${tid}`, {
                method: "GET",
                headers: { "Content-Type" : "application/json"}
            })
            setDateActivities(await response.json());    
        } catch (error) {
            console.error(error.message);
        }
    }


    const checkDateActivitiy = (did, aid) => {
        
        for (var i = 0; i < dateActivities.length; i++) {
            if (dateActivities[i].did === did && dateActivities[i].aid === aid) {
                return true;
                
            } 
        }
        return false;
            
    }

    const deleteActivity = async(aid) => {
        try {
            const response = await fetch(`/checklist/activity/${tid}&${aid}`, {
                method: "DELETE",
                headers: { "Content-Type" : "application/json"} 
            })
            console.log("deleted activity")
            setActivities(activities.filter(activity => 
                activity.aid !== aid
            ))   
        } catch (error) {
            console.error(error.message)
        }
    }

    const returnBack = () => {
        window.location = "/";
    }


    useEffect(() => {
        getAllDateActivity();
        getAllActivities();
        getAllDates();
        
    }, [])
    return(
        <Fragment>
            <button className = "btn btn-primary" style = {{position: "absolute",
                                                            left: "0px" }} onClick = {returnBack}>Back</button>
            <h1>{name}</h1>
            <AddActivity 
            tid = {tid}/>
            <AddDate 
            tid = {tid}/>
            <table class="table">
    <thead>
      <tr>
        <th>Activity</th>
        <th>Edit</th>
        <th>Delete</th>
        {dates.map(date => (
            <th>{format(new Date(date.date), "dd.MM.yyyy")}</th>    
        ))}
      </tr>
    </thead>
    <tbody>
        {
            activities.map(activity => (
                <tr key = {activity.aid}>
                    <td>{activity.description}</td>
                    <td><EditActivity
                    tid = {tid}
                    aid = {activity.aid} /></td>
                    <td><button className = "btn btn-danger" onClick = {() => deleteActivity(activity.aid)}>Delete</button></td>
                    {dates.map(date => ( 
                        <td><Checkbox 
                        tid = {tid}
                        currentState = {checkDateActivitiy(date.did, activity.aid)}
                        did = {date.did}
                        aid = {activity.aid} /></td> 
                    ))}
                </tr>
            ))
        }
      
    </tbody>
  </table>
        </Fragment>
    )
}

export default ViewTopic;