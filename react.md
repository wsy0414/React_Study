# React學習

## JSX
1. 遇到<>算html，遇到{}算javascript，()如果存在標籤結構且換行

## 元素渲染
ReactDOM.render()

## 元件
1. 元件副檔名可以是.js也可以是.jsx
2. 一個React項目，是由許多元件組成
3. 可用function或class，但如果有state必須用class

## props屬性
1. props不可以被修改

## State

### React生命週期函數
1. componentWillMount:元件渲染前執行
2. componentDidMount:元件渲染後執行
3. shouldComponentUpdate:回復布林值
4. componentWillUpdate:數據改變之前執行(state, props)
5. componentDidUpdate:數據改變後執行(state, props)
6. componentWillUnmount:元件卸載前執行

## form表單
1. 一個是input綁監聽，一個是form綁onSubmit