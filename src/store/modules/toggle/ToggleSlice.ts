import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../../index";
// import { AxiosResponse } from "axios";

interface Toggle {
  uid: number;
  on: boolean;
}

export const addToggle = createAsyncThunk("add/light", async (input: Toggle) => {
  return input;
});

export const turnOn = createAsyncThunk("toogle/on", async (input: Toggle) => {
  return input;
});

export const turnOff = createAsyncThunk("toogle/off", async (input: Toggle) => {
  return input;
});

const adapter = createEntityAdapter<Toggle>({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById, selectEntities, selectIds } =
  adapter.getSelectors((state: RootState) => state.toggle);

const ToggleSlice = createSlice({
  name: "toogle",
  initialState: adapter.getInitialState({ loading: false, error: false }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addToggle.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
    });
    builder.addCase(turnOn.fulfilled, (state, action) => {
      adapter.updateOne(state, {
        id: action.payload.uid,
        changes: { on: action.payload.on },
      });
    });
    builder.addCase(turnOff.fulfilled, (state, action) => {
      adapter.updateOne(state, {
        id: action.payload.uid,
        changes: { on: action.payload.on },
      });
    });
  },
});

export default ToggleSlice.reducer;
