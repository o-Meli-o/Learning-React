import profilePic from './assets/IMG_20241006_232337_626.jpg'
import propTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}
Card.propTypes = { // Checking the types of props
    name: propTypes.string,
    description: propTypes.string
}
Card.defaultProps = { // giving the properties a default value if they are not given any
    name: "Guest",
    description: "A Fellow React Lover!"
}

export default Card