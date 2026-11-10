// libs
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

// components
import App from "./App";
import AllComponentsPreview from "./components/AllComponentsPreview";

// store
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
);

// root.render(
//   <Provider store={store}>
//     <AllComponentsPreview />
//   </Provider>,
// );
