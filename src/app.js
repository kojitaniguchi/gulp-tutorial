import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter.js';

window.App = {
    render:  () => {
        ReactDom.render(
            <Counter />,
            document.getElementById('root')
        );
    }
};

/* Storeの実装 */

// 初期state変数（initialState）の作成
const initialState = {
  value: null,
};
// createStore（）メソッドを使ってStoreの作成
const store = createStore(formReducer, initialState);
