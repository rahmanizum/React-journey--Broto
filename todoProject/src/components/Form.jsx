import React from 'react';

function Form({onChange,onClick}) {
  return (
    <div>
      <form>
        <div className="form-group text-bg-light rounded-3 p-2">
            <label for="heading" class="form-label text-bg-light ">Enter your Task Name</label>
            <input onChange={onChange} type="text" className="form-control" id="taskInput" placeholder="" required />
            <label for="details" class="form-label text-bg-light ">Enter your Task Details</label>
            <textarea name="details" className='form-control' id="" rows="4" required></textarea>
            <label for="time" class="form-label text-bg-light ">Enter your deadline</label>
            <div className='form-group d-flex'>
            <input type="date" className="form-control rounded-0" id="date" />
            <input type="time" className="form-control rounded-0" id="time" />
            </div>
          <button onClick={onClick} className="btn btn-primary mt-3">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
