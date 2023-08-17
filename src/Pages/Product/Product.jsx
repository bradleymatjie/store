import './Product.scss';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { products } from '../../Products';

import backarrow from '../../assets/backarrow.svg';
import bagIcon from '../../assets/add.png';
import star from '../../assets/Star.png';

export const Product = () => {
    const { id } = useParams();

    const product = products.find((item) => item.id === Number(id));
    
    return (
        <section className='productView'>
            <NavLink to='/store/' className='backarrow'>
                <img src={backarrow} alt="backarrow" loading='lazy' />
                Back
                </NavLink>
            <div className="top">
                <div className='image'>
                    <img src={product.img} alt="product" />
                </div>

                <div className='top_texts'>
                <h1>{product.title}</h1>
                <h2>{product.subTitle}</h2>
                <div className="rating">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />

                    5/5
                </div>
                <h3>{`$${product.price}`}</h3>
                <p>{product.subDesc}</p>

                    <div 
                        className="addToCart"
                        onClick={() => handleClick(product)}
                        >
                        <img src={bagIcon} alt="add to cart" />
                        Add To Bag
                    </div>
                </div>
            </div>

            <hr />

            <div className="description">
                <h1>Description</h1>
                <p>{product.desc}</p>
            </div>
        </section>
    );
}