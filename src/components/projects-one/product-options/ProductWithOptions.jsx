import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import productsWithOptions from "../../../assets/data/products-with-options.json";

import Col from "../../grid/Col";

import "./ProductWithOptions.scss";

const sizeMap = ["small", "medium", "large", "luxury"];
const imageMap = productsWithOptions;

const ProductWithOptions = () => {
    const [selectedSize, setSelectedSize] = useState("large");
    const [selectedColor, setSelectedColor] = useState("black");
    const [searchParams, setSearchParams] = useSearchParams();
    const [hasInteracted, setHasInteracted] = useState(false);

    const navigate = useNavigate();

    const updateSearchParams = () => {
        setSearchParams({
            size: selectedSize,
            color: selectedColor,
        });
    };

    useEffect(() => {
        if (hasInteracted) {
            updateSearchParams();
        }
    }, [selectedSize, selectedColor, hasInteracted]);

    /*
     * Preventing useEffect to set query parameters on page load
     */
    const handleInteraction = () => {
        if (hasInteracted === true) return;

        setHasInteracted(true);
    };

    // const productImage = imageMap[selectedColor];
    const productImage = imageMap.find((item) => item.color === selectedColor);

    const clearFields = () => {
        setSelectedSize("large");
        setSelectedColor("black");
        setTimeout(() => {
            navigate("/projects-one");
        }, 0);
    };

    return (
        <>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                {/* <img src={productImage.image} alt={productImage.alt} /> */}
                <div
                    className="product-options__image"
                    style={{
                        backgroundColor: productImage.color,
                    }}
                ></div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <div className="product-options">
                    <p>Select size:</p>
                    <div className="product-options__sizes">
                        {sizeMap.map((item) => (
                            <label
                                key={item}
                                className="size-option"
                                // className={`size-option ${
                                //     selectedSize === item ? "selected" : ""
                                // }`}
                            >
                                <input
                                    type="radio"
                                    name="size"
                                    value={item}
                                    checked={selectedSize === item}
                                    onChange={() => {
                                        setSelectedSize(item);
                                        handleInteraction();
                                    }}
                                />
                                {item}
                            </label>
                        ))}
                    </div>

                    <p>Product color:</p>
                    <div className="product-options__colors">
                        {imageMap.map((item) =>
                            item.color !== "black" ? (
                                <label
                                    key={item.color}
                                    className="color-option"
                                >
                                    <input
                                        type="radio"
                                        name="color"
                                        value={item.color}
                                        checked={selectedColor === item.color}
                                        onChange={() => {
                                            setSelectedColor(item.color);
                                            handleInteraction();
                                        }}
                                    />
                                    <span
                                        className={`checkmark ${item.color}`}
                                    ></span>
                                </label>
                            ) : null
                        )}
                    </div>
                    <button
                        aria-label="Clear product options"
                        className="product-options__clear-button"
                        onClick={clearFields}
                    >
                        Clear product options
                    </button>
                </div>
            </Col>
        </>
    );
};

export default ProductWithOptions;
