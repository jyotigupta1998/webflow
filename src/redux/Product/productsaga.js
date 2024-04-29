import {takeEvery,put,call} from 'redux-saga/effects'
import { productList,set_productList } from "../constant";


function* getProductList(){
    let data= yield fetch('https://dummyjson.com/products');
    data= yield data.json();
    yield put({type: set_productList,data})
}  


function* productsaga () {
 yield takeEvery(productList,getProductList);
}
export default productsaga;