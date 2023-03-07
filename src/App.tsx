import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from "./routes/AppRoutes";
import { store } from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
};

export default App;
