import Login from "./components/Login";
import Register from "./components/Register";
import Test from "./components/Test";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Login />
      <Register />
      {/* <Test/> */}
    </div>
  );
}

export default App;
