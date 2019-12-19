import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import { showProducts, updateProduct, deleteProduct } from '../actions'
import { connect } from 'react-redux';
import { IconButton } from '@material-ui/core';



class MyProducts extends React.Component {

    componentDidMount() {
        this.props.showProducts();
    }

    
    render(props) {
        const { products } = this.props;
        console.log("upp", products)
        if (!(products && Object.keys(products).length)) {
            return null;
        }
        return (
            <React.Fragment>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Product Type</TableCell>
                            <TableCell>Product Color</TableCell>
                            <TableCell>Product Price</TableCell>
                            <TableCell>Product Quantity</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product, i) => (
                            <TableRow key={i}>
                                <TableCell>{product.productname}</TableCell>
                                <TableCell>{product.productitemtype.map(item => (
                                    <div>
                                        {item.type}
                                    </div>
                                ))}
                                </TableCell>
                                <TableCell>{product.productcolor.map(color => (
                                    <div>
                                        {color}
                                    </div>
                                ))}</TableCell>
                                <TableCell>{product.productprice}</TableCell>
                                <TableCell>{product.productquantity}</TableCell>
                                <TableCell align="right"><IconButton onClick={e => this.props.AddProduct(product._id)} >
                                    <Edit />
                                </IconButton></TableCell>
                                <TableCell align="right"><IconButton onClick={e => this.props.deleteProduct(product._id)}><Delete /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }

}
const mapStateToProps = (state) => {
    console.log("state", state)
    return { products: Object.values(state.product.products )}
}
export default connect(
    mapStateToProps, { showProducts, updateProduct, deleteProduct }
)(MyProducts);