import './Bag.scss';
import bagIcon from '../../assets/add.png';
import { NavLink } from 'react-router-dom';


export const Bag = ({ selectedProduct }) => {

    return (
        <div className="bag">
            <h1>Bag</h1>
            <div className="items">
                {selectedProduct.map((item) => (
                <div className="imageContainer" key={item.id}>
                    <img src={item.img} alt='selected product' />
                </div>
                 ))}
            </div>

            <div className="view">
                <img src={bagIcon} alt="cart" />
                <p><NavLink to='/store/bag'>View Bag</NavLink></p>
            </div>
        </div>
    );
}