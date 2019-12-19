import React from 'react';
import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';
// import { TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
// import Chip from '@material-ui/core/Chip';
// import MenuItem from '@material-ui/core/MenuItem';
import { resetProductData, showProduct, handleProductData, showItems } from '../actions';
// import materialvendorapis from '../apis/materialuivendorapis';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Input } from '@material-ui/core';




class FirstStep extends React.Component {

    state = { productname: '', productitemtype: [] };
    componentDidMount() {
        this.props.showItems();

    }

    onHandleProduct = (e) => {
        this.props.handleProductData({
            [e.target.name]: e.target.value
        })
    }


    onTagsChange = (event, values) => {
        console.log("eventtag", values)
        this.props.handleProductData({
            "productitemtype": values
        })
    }


    render(props) {
        const { itemtype } = this.props;
        const { product } = this.props;
        const { proid } = this.props;
        console.log('product=???????????', product)
        console.log('produid', proid)
        console.log("poiny", itemtype)
        console.log("selectdata", product.productitemtype)
        if (typeof (proid) === "string") {
            if (!(this.props.product && Object.keys(this.props.product).length)) {
                return null
            }
        }
      
        return (
            <div >
            
                <FormControl >
                    <Input
                        placeholder="Product Name"
                        value={product.productname ? product.productname : this.state.productname}
                        name="productname"
                        required
                        onChange={this.onHandleProduct}
                    />
                    {/* <p id="error" style={{ color: "red", display: "block" }}>This field is required</p>  */}
                

                    <br />
                    {/* <p htmlFor="age-native-required">Item Type</p>
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            name="productitemtype"
                            value={this.state.productitemtype}
                            onChange={(e) => this.onFirstPageChange(e)}
                            input={<Input id="select-multiple-chip" />}
                            MenuProps={MenuProps}
                            validators={['isSelected']}
                            errorMessages={['You must select an item']}
                        >
                            {itemtype.state && itemtype.state.map((d, i) => (
                                <MenuItem key={i} value={d.type} >
                                    {d.type}
                                </MenuItem>
                            ))}
                        </Select> */}

                    <Autocomplete
                        multiple
                        options={itemtype}
                        getOptionLabel={option => option.type}
                        onChange={this.onTagsChange}
                        defaultValue={product.productitemtype ? product.productitemtype : this.state.productitemtype}
                        renderInput={params => (

                            <TextField
                                {...params}
                                variant="standard"
                                label="Item Type"
                                placeholder="Item Type"
                                margin="normal"
                                fullWidth


                            />
                        )}
                    />
                    {/* <p id="error" style={{ color: "red", display: "block" }}>This field is required</p> */}
                  
                </FormControl>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("stateP", state)
    return { product: state.product.product, itemtype: state.item.item }
}
export default connect(
    mapStateToProps, { resetProductData, showItems, showProduct, handleProductData }
)(FirstStep);