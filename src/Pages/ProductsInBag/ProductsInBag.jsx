import './ProductsInBag.scss';
import star from '../../assets/Star.svg';

export const ProductsInBag = ({ selectedProduct }) => {
    return (
        <section className='products_in_bag'>
            <h1>Check your Bag Items</h1>
            <div className="products_container">
                {selectedProduct.map(item => (
                    <div className="product-item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div>
                        <h2>{item.title}</h2>
                        <h3>{item.subTitle}</h3>
                        <p>{item.subDesc}</p>
                        <div className="stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            5/5
                        </div>
                        <div className='price'>
                            <h4>{`$${item.price}`}</h4>
                            <div>
                                <p className='subtract'>-</p>
                                <h5>1</h5>
                                <p className='add'>+</p>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </section>
    );
}