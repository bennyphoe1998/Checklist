import React, {Fragment, useState, useEffect} from "react"

const CheckBox = (props) => {

    const [checked, setChecked] = useState(props.currentState);

    useEffect(() => {
        console.log(props.currentState)
        console.log(checked + "TEST")
        console.log(props.did)
    }, [])
    

    const handleChange = () => {
        if (checked) {
            disconnectDateActivity(props.tid, props.did, props.aid);
        } else {
            connectDateActivity(props.tid, props.did, props.aid);
        }
        setChecked(!checked);
        console.log("CLICKED")
    }

    const connectDateActivity = async(tid, did, aid) => {
        try {
            const response = await fetch(`/checklist/activitydate/${tid}&${aid}&${did}`, {
                method: "POST",
                headers: { "Content-Type" : "application/json"}
            })
            console.log("connected date and activity")
        } catch (error) {
            console.error(error.message);
        }
    }

    const disconnectDateActivity = async(tid, did, aid) => {
        try {
            const response = await fetch(`/checklist/activitydate/${tid}&${aid}&${did}`, {
                method: "DELETE",
                headers: { "Content-Type" : "application/json"}
            })
            console.log("disconnected date and activity")
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <Fragment>
            <input 
            type = "checkbox"
            checked = {checked}
            onChange = {handleChange} />
        </Fragment>
    )
}

export default CheckBox;