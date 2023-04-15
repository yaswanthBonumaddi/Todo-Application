import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#D7F9FA",
            secondaryColor : "#A4C8D5"
        },
        {
            primaryColor : "#EAE7D6",
            secondaryColor : "#C2B7B1"
        },
        {
            primaryColor : "#B0D4BB",
            secondaryColor : "#CE9C9D"
        },
        {
            primaryColor : "#A4C3A2",
            secondaryColor : "#DFD8AB"
        },
        {
            primaryColor : "#5D7B6F",
            secondaryColor : "#F6F3EE"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    } 

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        
        <div class = "card-wrapper mr-5"  style={{"background-color": colors[index%5].primaryColor}}>
                <div class = "task-holder">
                    <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                    <p className = "mt-3">{taskObj.Discription}</p>

                    <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                        <i class = "far fa-edit mr-3 icon" style={{"color" : "black", "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                        <i class="fas fa-trash-alt icon" style = {{"color" : "black", "cursor" : "pointer"}} onClick = {handleDelete}></i>
                    </div>
                </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
        
    );
};

export default Card