import './Droplist.css'

const DropdownList = (props) => {


    return (
        <div className='DropdownList'>
            <label>{props.label}</label>

            <select onChange={event => props.toChange(event.target.value)} required={props.required} value={props.val}>
                <option value = ''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}

            </select>
        </div>
    )
}

export default DropdownList 