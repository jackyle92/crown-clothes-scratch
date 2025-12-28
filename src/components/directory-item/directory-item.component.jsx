import './directory-item.style.scss';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const navigate = useNavigate();
    const {title, imageUrl} = category;

    const handleNavigate = () => {
        navigate(`shop/${title}`);
    }
    return (
        <div className='directory-item-container' onClick={handleNavigate}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;