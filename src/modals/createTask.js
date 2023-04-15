import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask(props) {
    const toggle = props.toggle
    const modal = props.modal
    const save = props.saveTask

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

    const handleSave=()=>{
        let taskObj={}
        taskObj['Name'] = taskName
        taskObj['Discription'] = discription
        save(taskObj)
        
    }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            add
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;