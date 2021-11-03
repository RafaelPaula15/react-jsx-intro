function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Rafael" />
      </div>
    );
  }


ReactDOM.render(
    <App />,
    document.getElementById("root")
  );