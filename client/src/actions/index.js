import materialvendorapis from '../apis/materialuivendorapis';
import history from '../components/History';
import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SHOW_ME,
  CREATE_PRODUCT,
  UPDATE_ME,
  UPDATE_PRODUCT,
  DELETE_ME,
  DELETE_PRODUCT,
  RESET_PRODUCT_DATA,
  SHOW_ITEMS,
  SHOW_PRODUCTS,
  SHOW_PRODUCT,
  HANDLE_PRODUCT_DATA
} from './types';


/*******************************************************/
///////////////////////USER ACTION////////////////////
/*******************************************************/


///////////****LOGIN****//////////////
export const signIn = (formValues) => async (dispatch, getState) => {
  const { email } = getState().auth;
  await materialvendorapis.post('/loginuser', { ...formValues }, email).then(response => {
    if (response.status === 200) {
      localStorage.setItem('usertoken', response.data.token);
      history.push('/dashboard')
      dispatch({ type: SIGN_IN, payload: response.data });
    }

  }).catch(function (error) { alert("Invalid login") });
};

///////////****LOG OUT****//////////////
export const signOut = () => async (dispatch, getState) => {
  await materialvendorapis.post('/logout').then(response => {
    if (response.status === 200) {
      localStorage.setItem('usertoken', '');
      dispatch({ type: SIGN_OUT, payload: response.data });
      history.push('/signin');
    }
  })
};

///////////****ADD/CREATE USER****//////////////
export const createUser = (formValues) => async (dispatch, getState) => {
  const response = await materialvendorapis.post('/adduser', { ...formValues });
  //localStorage.setItem('usertoken', response.data.token);
  dispatch({ type: SIGN_UP, payload: response.data });
  history.push('/dashboard');
};

///////////****SHOW USER****//////////////
export const showUser = () => async (dispatch, getState) => {
  const response = await materialvendorapis.post('/showme');
  localStorage.setItem('usertoken', response.data.token);
  dispatch({ type: SHOW_ME, payload: response.data });
  history.push('/dashboard');
};

/////////****UPDATE ME****//////////////
export const updateMe = (formValues) => async dispatch => {
  const response = await materialvendorapis.patch('/update/me', { ...formValues });
  console.log(response)
  dispatch({ type: UPDATE_ME, payload: response.data });
  //history.push('/home');
};


///////////****DELETE ME****//////////////
export const deleteMe = () => async dispatch => {
  await materialvendorapis.delete(`/deleteaccount/me`);
  localStorage.setItem('usertoken', '');
  dispatch({ type: DELETE_ME });
  // history.push('/');
};


/*******************************************************/
/////////////////////PRODUCT ACTIONS////////////////////
/*******************************************************/


///////////****CREATE/ADD PRODUCT****//////////////
export const createProduct = formValues => async (dispatch, getState) => {
  await materialvendorapis.post('/addProduct', { ...formValues }).then(response => {
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push('/dashboard');
    //  alert("Product added");
  })
};

///////////****HANDLE PRODUCT DATA****//////////////
export const handleProductData = formValues => dispatch => {
  dispatch({ type: HANDLE_PRODUCT_DATA, payload: formValues });
}
///////////****RESET PRODUCT DATA****//////////////
export const resetProductData = () => dispatch => {
  dispatch({ type: RESET_PRODUCT_DATA});
}


///////////****DELETE PRODUCT****//////////////
export const deleteProduct = id => async dispatch => {
  const response = await materialvendorapis.delete(`/deleteProduct/${id}`);
  //console.log("response",response)
  dispatch({ type: DELETE_PRODUCT, payload: response.data });
  //history.push('/home');
};

///////////****UPDATE PRODUCT****//////////////
export const updateProduct = (id, formValues) => async dispatch => {
  const response = await materialvendorapis.patch(`/updateProduct/${id}`, formValues);

  dispatch({ type: UPDATE_PRODUCT, payload: response.data });
  //history.push('/home');
  history.push('/dashboard');
};


///////////****SHOW PRODUCTS****//////////////
export const showProducts = () => async (dispatch, getState) => {
  // debugger;
  const response = await materialvendorapis.get('/showProducts');
  dispatch({ type: SHOW_PRODUCTS, payload: response.data });

};

///////////****SHOW PRODUCT****//////////////
export const showProduct = id => async dispatch => {
  //debugger;
  await materialvendorapis.get(`/showProduct/${id}`).then(response => {
    //  console.log("action",response)
    dispatch({ type: SHOW_PRODUCT, payload: response.data });

  })

};


/*******************************************************/
///////////////////////ITEM ACTION////////////////////
/*******************************************************/

///////////****SHOW ITEMS****//////////////
export const showItems = () => async dispatch => {
  // debugger;
  const response = await materialvendorapis.get('/showItems');
  dispatch({ type: SHOW_ITEMS, payload: response.data });

};
