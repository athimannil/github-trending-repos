import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RepositoryList from "./components/RepositoryList/RepositoryList";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <main> */}
      <RepositoryList />
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App;
