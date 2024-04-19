import './user.css'

const User = ({ name, office, image, backColor }) => {
    return (<div className='User'>
        <div className='Header' style ={{ backgroundColor:backColor}}>
            <img src={image} alt={name} />
        </div>

        <div className='Baseboard'>
            <h4>{name}</h4>
            <h5>{office}</h5>
        </div>
    </div>)

}

export default User