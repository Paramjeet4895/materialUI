import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { handleProductData } from '../actions'

class ThirdStep extends React.Component {
      

    render(props) {
        const { product } = this.props
        console.log("prod3", product)
        return (
            // const { itemtype } = this.props;
            <div >
                <ValidatorForm
                    onError={errors => console.log(errors)}
                >
                    <FormControl >
                        <br />
                        <p htmlFor="age-native-required">Product Name</p>
                        <Input
                            disabled
                            value={product.productname}
                            name="productname"
                        />
                        <br />
                        <p htmlFor="age-native-required">Item Type</p>
                        <Input
                            value={product.productitemtype.map(item => (
                                item.type
                            ))}
                            disabled
                            name="productitemtype"
                        />
                        <br />
                        <p htmlFor="age-native-required">Product Color</p>
                        <Input
                            disabled
                            value={product.productcolor}
                            name="productcolor"
                        /><br /><br />
                        <p htmlFor="age-native-required">Product Price</p>
                        <Input
                            disabled
                            value={product.productprice}
                            name="productprice"
                        /><br />
                        <br />
                        <p htmlFor="age-native-required">Product Quantity</p>
                        <Input
                            disabled
                            value={product.productquantity}
                            name="productquantity"
                        />
                        <br /><br />
                        <p htmlFor="native-required">Product Description</p>
                        <textarea
                            disabled
                            value={product.productdescription}
                            name="productdescription"
                            inputProps={{
                                'aria-label': 'productdescription',
                            }} validators={['required']} ></textarea>

                    </FormControl>
                </ValidatorForm>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("stateP", state.product)
    return { product: state.product.product }
}

export default connect(
    mapStateToProps, { handleProductData }
)(ThirdStep);