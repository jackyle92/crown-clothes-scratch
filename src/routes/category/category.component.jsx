import './category.styles.scss'
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context.jsx";

const Category = () => {
    const { category } = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([categoriesMap[category]]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <>
            <h2>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.length &&
                    products.map(product => {
                            return (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Category;