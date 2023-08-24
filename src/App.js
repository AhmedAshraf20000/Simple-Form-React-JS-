import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Form from "./components/Form";
import AuthControl from "./components/Store/auth-control";
import { useContext } from "react";

const App = () => {
  const ctx = useContext(AuthControl);
  return (
    <>
      <NavBar />
      <Card>
        {
          ctx.isLoggedIn ? <p className="text-center text-2xl font-semibold capitalize py-2">welcome back!!</p> :
            <Form/>
        }
      </Card>
    </>
  );
}

export default App;
