import 'bootstrap/dist/css/bootstrap.min.css';

function ClickButton({ onClick }) {
    return (
        <div className=''>

            <button onClick={onClick} type="button" className="btn btn-primary p-2">
             Button 1
            </button>
        </div>
    )
}

export default ClickButton