import Routes from "../src/pages/router";
import { UserProvider } from "./components/userContext"; 
import "../src/components/Styles/index.scss"

function App() {


  return (
    <>
      <UserProvider>
        <Routes  />
      </UserProvider>

    </>
  );
};

export default App;
