import Home from "./pages/Home/Home";
import { Router, RouteComponentProps } from "@reach/router";

function App() {

  return (
    <>
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
        </Router>
    </>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
