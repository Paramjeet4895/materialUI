import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { handleProductData } from '../actions'
import MenuItem from '@material-ui/core/MenuItem';
//import materialvendorapis from '../apis/materialuivendorapis';


class SecondStep extends React.Component {

   
    state = { productcolor: [], productprice: '', productdescription: '', productquantity: '' };

    onHandleProduct = (e) => {
        this.props.handleProductData({
            [e.target.name]: e.target.value
        })
    }
  

    handleChange = (event) => {
        this.setState({
           productcolor: event.target.value
        }, () => {
            // This will output an array of objects
            // given by Autocompelte options property.
             this.props.handleProductData({
            "productcolor":this.state.productcolor
        })
        });
    }
   
    render(props) {
        const { product } = this.props;
        console.log("prod2",product)
        return (
            <div>
                <FormControl>
                    <label htmlFor="age-native-required">Product Color</label>
                    <Select
                        labelId="demo-mutiple-chip-label"
                        name="productcolor"
                        multiple
                        value={product.productcolor?product.productcolor:[]}
                        onChange={this.handleChange}
                    >
                        <MenuItem value="" />
                        <MenuItem value="Red">Red</MenuItem>
                        <MenuItem value="Blue">Blue</MenuItem>
                        <MenuItem value="Black">Black</MenuItem>
                        <MenuItem value="Orange">Orange</MenuItem>
                        <MenuItem value="Pink">Pink</MenuItem>
                        <MenuItem value="Purple">Purple</MenuItem>
                    </Select>
                    {/* <p style={{ color: "red" }}>This field is required</p> */}
                    <br /><br />
                    <Input
                        placeholder="Price"
                        name="productprice"
                        value={product.productprice}
                        onChange={this.onHandleProduct}
                    />
                    {/* <p style={{ color: "red" }}>This field is required</p> */}
                    <br /><br />
                    <label htmlFor="age-native-required">Product Quantity</label>
                    <Select
                        native
                        name="productquantity"
                        value={product.productquantity}
                        onChange={this.onHandleProduct}
                    >
                        <option value="" />
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </Select>
                    {/* <p style={{ color: "red" }}>This field is required</p> */}
                    <br /><br />
                    <label htmlFor="native-required">Product Description</label>
                    <textarea
                        name="productdescription"
                        value={product.productdescription}
                        onChange={this.onHandleProduct}></textarea>
                    {/* <p style={{ color: "red" }}>This field is required</p> */}
                </FormControl>
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
)(SecondStep);
