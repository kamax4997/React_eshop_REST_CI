import React, { useState } from "react";
import { Product } from "../../store/model/product";
import "../../config/styles/product-filter.scss";
import Icon from "../../shared/icon";
import { connect } from "react-redux";
import { checkProductAvailability } from "../../store/actions/product.action";

const styles = {
  cardImage: {
    maxHeight: "120px",
    maxWidth: "180px",
    margin: "auto"
  },
  footerIcons: {
    fontSize: "95%"
  },
  card: {
    height: "auto"
  },
  cardText: {
    height: "20px",
    overflow: "hidden",
    textAlign: "left" as const
  },
  cardInfo: {
    marginBottom: "10px",
  }
};

const ProductCardHeader = ({
  productModel,
  productType,
  productPrice,
  productStock,
}: {
  productModel: string;
  productType: string;
  productPrice: string;
  productStock: string;
}) => {
  const { cardText, cardInfo } = styles;
  return (
    <>
      <h6 className='card-text' style={cardText}>
        {productModel}.
      </h6>
      <div style={cardInfo} className='card-info'>
        <div style={cardText}>Type: {productType === '1' ? 'electric' : 'mechanical'}</div>
        <div style={cardText}>Price: ${productPrice}</div>
        {/* <div style={cardText}>Stock: {productStock}</div> */}
      </div>
    </>
  );
};

const ProductCardImage = ({ productImage }: { productImage: string }) => {
  const { cardImage } = styles;
  return (
    <img
      className='card-img-top mt-2'
      alt={"Card cap"}
      src={productImage}
      style={cardImage}
    />
  );
};

const ProductCard = (props: {
  product: Product;
  storeStatus: boolean;
  checkProductAvailability: (id: number) => {};
}) => {
  const {product, storeStatus, checkProductAvailability} = props;
  const { card, footerIcons } = styles;

  const [showStatus, setShowStatus] = useState(false);

  const handleClick = (id: string) => {
    setShowStatus(!showStatus);
    checkProductAvailability(parseInt(id, 10));
  }

  return (
    <div className='mb-4 shadow-sm text-center border' style={card}>
      <ProductCardImage productImage={product.image} />
      <div className='card-body'>
        <ProductCardHeader
          productModel={product.model}
          productType={product.type}
          productPrice={product.price}
          productStock={product.stock}
        />
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm primary-btn' key={product.id} onClick={() => handleClick(product.id)}>
              {showStatus ? 'Hide Availability' : 'Check Availability'}
            </button>
          </div>
          {showStatus ? 
          <small className='text-muted' style={footerIcons}>
            {product.stock !== '0' ? 'Available' : 'Not Available'}
          </small> : '' }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  products: {
    storeStatus: boolean
  }
}) => ({
  storeStatus: state.products.storeStatus
});

const mapDispatchToProps = (dispatch: any) => ({
  checkProductAvailability: (id: number) => dispatch(checkProductAvailability(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
