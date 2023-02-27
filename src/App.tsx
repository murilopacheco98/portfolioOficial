import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import { AppRoutes } from "./routes/AppRoutes";
import { persistor, store } from "./store";
// import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <AppRoutes />
        {/* </PersistGate> */}
      </Provider>
    </div>
  );
};

export default App;
