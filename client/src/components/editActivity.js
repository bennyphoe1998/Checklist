import React, {Fragment, useState} from "react"

const EditActivity = (props) => {

    const [activity, setActivity] = useState("");

    const editActivity = async() => {
        try {
            const body = {
                description : activity
            }
            console.log(props.aid);
            const response = await fetch(`/checklist/activity/${props.tid}&${props.aid}`, {
                method: "PUT",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body) 

            })
            window.location = ("/topic")
            console.log("updated activity") 
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <Fragment>
            {console.log(props.aid + " TEST")}
           
<button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${props.aid}`}>
  Edit
</button>


<div class="modal" id={`id${props.aid}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Activity</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

     
      <div class="modal-body">
        <input className = "form-control"
        type = "text"
        placeholder = ""
        value = {activity}
        onChange = {e => setActivity(e.target.value)}/>
      </div>

     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick = {editActivity}>Edit</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default EditActivity