import { useForm } from "react-hook-form"
import Modal from "../ui/Modal"


const AddTaskModal = ({isOpen, setIsOpen}) => {
    const {register, handleSubmit, reset} = useForm();

    const onCancel =()=>{
        reset();
        setIsOpen(false)
    }

    const onSubmit = data =>{
        console.log(data);
        onCancel()
    }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Tasks">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
                <label htmlFor="title">Title</label>
                <input className="w-full rounded-md" id="title" type="text" {...register('name')}/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="title">Desciption</label>
                <textarea type="text" id="description" className="w-full rounded-md"></textarea>
            </div>
            <div className="flex flex-col gap-5">
                <label htmlFor="title" className="mb-2">
                    Deadline
                </label>
                <input type="date" id="date" className="w-full rounded-md" {...register("date")}/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="title">Assign to</label>
                <select id="assignedTo" className="w-full rounded-md" {...register("assignedTo")}>
                    <option value="Nahid">Nahid</option>
                    <option value="Shiren">Shiren</option>
                    <option value="Ifty">Ifty</option>
                    <option value="Sultan">Sultan</option>
                    <option value="Keya">Keya</option>
                    <option value="Rayhan">Rayhan</option>
                    <option value="Shapla">Shapla</option>
                </select>
            </div>
            <div className="flex flex-col mb-5">
                <label htmlFor="title" className="mb-2">Priority</label>
                <select id="priority" className="w-full rounded-md" {...register("priority")}>
                    <option defaultValue value="high">High</option>
                    <option  value="medium">Medium</option>
                    <option  value="low">Low</option>
                </select>
            </div>
            <div className="flex gap-3 justify-end">
                <button onClick={()=> onCancel()} type="button" className="btn btn-danger">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </Modal>
  )
}

export default AddTaskModal