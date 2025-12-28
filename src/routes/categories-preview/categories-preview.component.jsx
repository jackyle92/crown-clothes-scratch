import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    console.log('categories map: ', categoriesMap);
    return (
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map((title) => {
                    return (
                        <CategoryPreview key={title} title={title} products={categoriesMap[title]}></CategoryPreview>
                    )
                })
            }
        </div>
    )
}

export default CategoriesPreview;