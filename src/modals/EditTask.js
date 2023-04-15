import React,{useState,useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function EditTask(props) {
    const toggle = props.toggle
    const modal = props.modal
    const update = props.updateTask 
    const taskObj = props.taskObj

    const [taskName,setTaskName] = useState('');
    const [discription,setDiscription] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target

        if (name==="taskname"){
            setTaskName(value)
        }else{
            setDiscription(value)
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDiscription(taskObj.Discription)
    },[])

    const handleUpdate=(e)=>{
        e.preventDefault();
        let tempObj={}
        tempObj['Name'] =taskName
        tempObj['Discription']=discription
        update(tempObj)
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
                <div className='form-group'>
                <label>Task Name</label>
                    <input type='text' className='form-control' value={taskName} name='taskname' onChange={handleChange} />
                    
                </div>
                <div className='form-group'>
                    <label>Task Discription</label>
                    <textarea className='form-control' rows={5} value={discription} name='discription' onChange={handleChange}  />
                </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            update
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;