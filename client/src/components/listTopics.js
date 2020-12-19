import React, {Fragment, useState, useEffect} from "react";
import ViewTopic from "./viewTopic";

const ListTopics = (props) => {

    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");

    const getAllTopics = async() => {
        try {
            const response = await fetch ("/checklist", {
            method: "GET",
            headers: { "Content-Type" : "application/json"}
            })
            const topicsArray = await response.json();
            setTopics(topicsArray);        
        } catch (error) {
          console.error(error.message)  
        }
    }
        

    useEffect(() => {
        getAllTopics();
    }, [])

    const navigateToTopic = (topic) => {
        props.history.push({
            pathname: '/topic',
            state: topic
        })
    }

    const addTopic = async() => {
      try {
        const body = {
          name: newTopic
        }
        const response = await fetch ("/checklist", {
          method : "POST",
          headers: { "Content-Type" : "application/json"},
          body: JSON.stringify(body)
        })
      } catch (error) {
        console.error(error.message)
      }  
    }

    const deleteTopic = async(tid) => {
      try {
        const response = await fetch (`/checklist/${tid}`, {
          method: "DELETE",
          headers: { "Content-Type" : "application/json"},
        })
        setTopics(topics.filter(topic => (
          topic.tid !== tid
        )))  
      } catch (error) {
        console.error(error.message)
      }
    }

    return(
        <Fragment>
          <h1>Check it to win it</h1>
          <div style = {{position: "relative", width : "50%", margin : "0 auto", left :"170px"}}>
            <form className = "d-flex">
            <input className = "form-control"
            style = {{width : "600px"}}
            type = "text"
            placeholder = "new topic"
            value = {newTopic}
            onChange = {e => setNewTopic(e.target.value)} />
            <button className = "btn btn-success" onClick = {addTopic}>Add</button>
            </form>
            </div>
            <h2>Your Topics: </h2>
            <table className="table">
    <thead>
      <tr>
        <th>Topic</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}
    {
        topics.map(topic => (
            <tr key = {topic.tid}>
                <td><button className = "btn btn-success" onClick = {() => navigateToTopic(topic)}>{topic.name}</button></td>
                <td><button className = "btn btn-danger" onClick = {() => deleteTopic(topic.tid)}>Delete</button></td>
            </tr>
        ))
    }
    </tbody>
  </table>
        </Fragment>
    )
}

export default ListTopics;