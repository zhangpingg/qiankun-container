const App = (props) => {
  return (
    <div className="App">
      父页面
      {props.children}
    </div>
  )
}

export default App;
