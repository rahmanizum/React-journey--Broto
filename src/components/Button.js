
function ClickButton({ onClick }) {
    return (
        <div className=''>
            <button onClick={onClick} type="button" className="btn btn-primary p-2">
             Incease 1
            </button>
        </div>
    )
}

export default ClickButton