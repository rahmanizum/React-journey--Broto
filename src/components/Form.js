import React from 'react'

function Form({title,state}) {
    const resetVal = (e)=>{
        e.preventDefault();
        state(Number(document.getElementById('reset').value))
        document.getElementById('reset').value = "";
    }
  return (
    <div>
      <form id='myForm'>
        <h1>{title}</h1>
        <label className='form-label' htmlFor="reset">ResetVal</label><br />
        <input className='form-control' type="number" id="reset" name="reset" required/><br />
        <button onClick={resetVal} className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default Form
