import React, {Fragment, useState} from "react"
import { format } from "date-fns"

const AddDate = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    const addDate = async() => {
        
        try {
            const body = {
                date: format(startDate, "yyyy-MM-dd")
            }
            console.log(body)
            const response = await fetch (`/checklist/date/${props.tid}`, {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })
            
            window.location = "/topic"
            window.location = "/topic"        
        } catch (error) {
            console.error(error.message)
        }
    }

    return(
        <Fragment>
            
<button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal3">
        Add Date
</button>


<div class="modal" id="myModal3">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">New Date</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

     
      <div class="modal-body">
          <input 
          className = "form-control"
          type = "date"
          value = {format(startDate, "yyyy-MM-dd")}
          onChange = {e => setStartDate(new Date(e.target.value))}
          />
          
        </div>
      

     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick = {addDate}>Add</button>
      </div>

    </div>
  </div>
</div>    
        </Fragment>
    )
}

export default AddDate;