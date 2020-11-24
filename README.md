# React學習

--router、hook、react-redux

## JSX
1. 遇到<>算html，遇到{}算javascript，()如果存在標籤結構且換行

## 元素渲染
ReactDOM.render()

## 元件
1. 元件副檔名可以是.js也可以是.jsx
2. 一個React項目，是由許多元件組成
3. 可用function或class，但如果有state必須用class(在hook還沒出現的時候)

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

## redux
用於做狀態管理的套件，用在react中可管理react中多個元件共享的狀態，原本沒有使用redux時會透過一個父元件包含許多子元件，並將state統一在父元件進行操作，redux就是代替父元件管理state，個元件有需要就進行調用

## react-router

## TypeScript
tsconfig.json:typescript的選項設置文件
tslint.json:程式碼檢查設置
