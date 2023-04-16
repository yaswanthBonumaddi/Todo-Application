import React,{useState,useEffect} from 'react'
import CreateTask from '../modals/createTask'
import {PlusCircle} from 'react-bootstrap-icons';
import Card from './Card';



const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        let arr = localStorage.getItem('taskList')

        if (arr){
            let obj= JSON.parse(arr)
            setTaskList(obj)
        }
        

    },[])

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj)=>{
        let tempList=taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(taskList))
        setModal(false)
        setTaskList(taskList)
    }

    const deleteTask = (index) =>{
        let tempList = taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(taskList))
        setTaskList(tempList)
        window.location.reload()
    }


    const updateListArray = (obj,index)=>{
        let tempList=taskList
        tempList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

var myDate = new Date();
var hrs = myDate.getHours();
var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 19)
  greet = 'Good Evening';
else if (hrs >= 19 && hrs <= 24)
  greet = 'Good Night';


  return (
    <div>
        <div className='bg-container'>
            <div className='title_container'>
                <div>
                    <h1 className='greet'>{greet} Yaswanth...</h1>
                    <p className='quote'>Your future is created by what you do today, not tomorrow</p>
                </div>
                <div style={{paddingRight:"50px",textAlign:"center"}}>
                    <div style={{height:"55px"}}  onClick={toggle}>
                    <button  style={{backgroundColor:"transparent",borderWidth:'0px'}}><PlusCircle size={30} color="#6d3c40"/></button>
                    <p style={{color:"#6d3c40",fontWeight:"bold"}}>Add Task</p>
                    </div>
                </div>
            </div>
        </div>
            <div className='task-container'>
                {taskList.map((item,index)=><Card taskObj={item} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
            </div>
        <CreateTask modal={modal} toggle={toggle} saveTask={saveTask} />
    </div>   
  )
}

export default TodoList