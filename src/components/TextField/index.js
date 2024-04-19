import './textfield.css'


const TextField = (props) => {

    const placeholderModified = `${props.placeholder}...`



    const toTyping = (event) => {
        props.toChange(event.target.value)
    }
    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.val} onChange={toTyping} required={props.mandatory} placeholder={placeholderModified} />
        </div>
    )

}

export default TextField