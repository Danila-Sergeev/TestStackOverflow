import Styles from "./App.module.css";
import { FC } from "react";
import SearchBar from "./SearchBar/SearchBar";

const App: FC = () => {
  return (
    <div className={Styles.App}>
      <SearchBar />
    </div>
  );
};

export default App;
