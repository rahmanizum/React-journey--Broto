import React from 'react'

function Form({state}) {
    const resetVal = (e)=>{
        e.preventDefault();
        console.log(document.getElementById('reset').value);
        state(Number(document.getElementById('reset').value))
    }
  return (
    <div>
      <form >
        <label className='form-label' htmlFor="reset">ResetVal</label><br />
        <input className='form-control' type="number" id="reset" name="reset" required/><br />
        <button onClick={resetVal} className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default Form
