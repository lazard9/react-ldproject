import { useState } from "react";
import products from "../../../assets/data/products.json";
import Heading from "../../partials/Heading";

import "./FilterProductList.scss";

/**
 * A component that filters a list of products based on a search query and a
 * checkbox to show only candy products. The component uses the useState hook to
 * maintain the state of the search query and the checkbox. The component also
 * accepts a list of products as a prop and renders a list of the filtered
 * products. If no matching products are found, the component renders a message
 * indicating that no matching products were found.
 *
 * @returns {ReactElement} A ReactElement representing the filtered product list.
 */
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
