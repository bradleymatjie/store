import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../Products';
import bagIcon from '../../assets/add.png';

export const Home = ({ handleClick }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleProductClick = (product) => {
        navigate(`/store/${product.id}`);
      };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ); 

    return (
        <section className='home'>
            <label htmlFor="">
                Search Item
                <input
                    type="text"
                    id="searchInput"
                    placeholder='Apple Watch, Samsung S21, Macbook Pro, ...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </label>
            <div className="products">
                {filteredProducts.map((product) => (
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