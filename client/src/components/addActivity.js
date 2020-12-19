import React, {Fragment, useState} from "react"

const AddActivity = (props) => {

    const [activity, setActivity] = useState("");

    const onSubmitActivity = async() => {
        try {
            const body = {
                description: activity
            }
            const response = await fetch (`/checklist/activity/${props.tid}`, {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/topic"
        } catch (error) {
            console.error(error.message)
        }    
    }
    
    return (
        <Fragment>
            

            
<button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal"  style = {{margin: "5px"}}>
  Add Activity
</button>


<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-header">
        <h4 className="modal-title">New Activity</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      
      <div className="modal-body">
        <input className = "form-control" 
        type = "text"
        placeholder = "activity"
        value = {activity}
        onChange = {e => setActivity(e.target.value)}
        />
      </div>

      
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" data-dismiss="modal" onClick = {onSubmitActivity}>Add</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default AddActivity