import { useSelector } from 'react-redux'
import Modal from '../ui/Modal'

const TaskDetailsModal = ({isOpen, setIsOpen, id}) => {
    const {tasks} = useSelector((state)=> state.tasksSlice);
    const task =tasks.find((item)=> item.id ==id);

    const onCancel =()=>{
      setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
        <p>{task?.description}</p>
        <span className={`text-lg font-semibold mb-3 ${
          task?.priority === 'high' ? 'text-red-500' : ''
        } ${task?.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task?.priority === 'low' ? 'text-green-500' : ''
        }`}>{task?.priority}</span>

         <div className="flex gap-3 justify-end">
            <button onClick={()=> onCancel()} type="button" className="btn btn-danger">Cancel</button>
          </div>
    </Modal>
  )
}

export default TaskDetailsModal;