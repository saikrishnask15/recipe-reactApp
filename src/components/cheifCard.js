import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
const CheifCard = ({chiefs}) => {
    return ( 
        <div className="cheif-card">
            <img src={chiefs.img} alt=""/>
            <div className='chief-card-info'>
            <h3 className="chief-card-name">{chiefs.name}</h3>
            <p className="chief-recipe-count">Recipes: <b>{chiefs.recipesCount}</b></p>
            <p className='chief-cuisine'>cuisine: <b>{chiefs.cuisine}</b></p>
            <p className='chief-icons'>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </p>
            </div>
        </div>
     );
}
 
export default CheifCard;