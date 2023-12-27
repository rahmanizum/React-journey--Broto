import React from 'react';

function Form({onClick}) {
  return (
    <div>
      <form onSubmit={onClick} id='myForm'>
        <div className="form-group text-bg-light rounded-3 p-2">
            <label htmlFor="heading" className="form-label text-bg-light ">Enter your Task Name</label>
            <input type="text" className="form-control" id="heading" placeholder="" required />
            <label htmlFor="details" className="form-label text-bg-light mt-2 ">Enter your Task Details</label>
            <textarea name="details" className='form-control' id="details" rows="4" required></textarea>
            <label htmlFor="time" className="form-label text-bg-light mt-2">Enter your deadline</label>
            <div className='form-group d-flex'>
            <input type="date" className="form-control rounded-0" id="date" required/>
            <input type="time" className="form-control rounded-0" id="time" required/>
            </div>
          <button className="btn btn-primary mt-3">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
