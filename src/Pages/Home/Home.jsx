import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { products } from '../../Products';
import bagIcon from '../../assets/add.png';

export const Home = ({ handleClick }) => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/store/${product.id}`);
      };

    return (
        <section className='home'>
            <label htmlFor="">
                Search Item
                <input type="text" placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' />
            </label>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="imageContainer"  onClick={() => handleProductClick(product)}>
                            <img src={product.img} alt="product image" loading='lazy' />
                        </div>
                        <h2>{product.title}</h2>
                        <h3>{product.subTitle}</h3>
                        <div className='price'>
                            <p>{`$${product.price}`}</p>
                            <div 
                                className="addToCart"
                                onClick={() => handleClick(product)}
                            >
                                <img src={bagIcon} alt="add to cart" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}