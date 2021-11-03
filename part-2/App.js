function App() {
    return (
      <div>
        <Tweet userName = "Rafael_10" name = "Rafael" date = {2021} message = "Hello from react"/>
        <Tweet userName = "Nabel_11" name = "Nabel" date = "12/01/21" message = "hi there"/>
        <Tweet userName = "Julio_15" name = "Julio" date = "10/01/21" message = "I'm learning react"/>
      </div>
    );
  }


ReactDOM.render(
    <App />,
    document.getElementById("root")
  );