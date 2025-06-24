import { useState } from "react";
import products from "../../../assets/data/products.json";
import Heading from "../../partials/Heading";

import "./FilterProductList.scss";

const FilterProductList = () => {
    const [filterProducts, setFilterProducts] = useState("");
    const [showCandyOnly, setShowCandyOnly] = useState(false);

    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(filterProducts.toLowerCase()) &&
            (!showCandyOnly || product.candy)
    );

    function clearFields() {
        setFilterProducts("");
        setShowCandyOnly(false);
    }

    return (
        <div className="filter-products">
            <Heading headingTag={4} headingLevel={4}>
                Use State
            </Heading>
            <div className="filter-products__input">
                <label htmlFor="filter">
                    Products:
                    <input
                        id="filter"
                        type="text"
                        placeholder="Filter..."
                        value={filterProducts}
                        onChange={(e) => setFilterProducts(e.target.value)}
                    />
                </label>
            </div>
            <div className="filter-products__checkbox">
                <label htmlFor="us-candy">
                    Show Candy Only:
                    <input
                        id="us-candy"
                        type="checkbox"
                        checked={showCandyOnly}
                        onChange={(e) => setShowCandyOnly(e.target.checked)}
                    />
                </label>
            </div>
            <button
                aria-label="Clear search fields"
                className="filter-products__clear-button"
                onClick={clearFields}
            >
                Clear fields
            </button>
            {filteredProducts.length > 0 ? (
                <ul className="filter-products__list">
                    {filteredProducts.map((product, index) => (
                        <li key={index}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No matching products found.</p>
            )}
        </div>
    );
};

export default FilterProductList;
