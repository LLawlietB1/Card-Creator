import User from '../User'
import './team.css'

const Team = (props) => {

    const SecColor = { backgroundColor: props.secundarycolor }
    const PriColor = { borderColor: props.primarycolor }

    return (

        (props.Users.length > 0) && < section className = 'team' style = { SecColor } >
            <h3 style={PriColor}>{props.name}</h3>
            <div className='user'>
                {props.Users.map(user => <User backColor = {props.primarycolor} key = {user.name} name={user.name} office={user.office} image={user.image} />)}
            </div>
        </section >
    )
}

export default Team 