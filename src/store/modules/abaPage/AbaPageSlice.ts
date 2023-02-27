import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../../index";

export interface AbaPageProps {
  id: number;
  name: string;
  urlName: string;
  link: string;
}

export const addPage = createAsyncThunk("add/page", async (input: AbaPageProps) => {
  return input;
});

export const removePage = createAsyncThunk("remove/page", async (id: number) => {
  return id;
});

const adapter = createEntityAdapter<AbaPageProps>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById, selectEntities, selectIds } =
  adapter.getSelectors((state: RootState) => state.abaPage);

const AbaPageSlice = createSlice({
  name: "abaPage",
  initialState: adapter.getInitialState({ loading: false, error: false }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addPage.fulfilled, (state, action) => {
      adapter.addOne(state, action.payload);
    });
    builder.addCase(removePage.fulfilled, (state, action) => {
      adapter.removeOne(state, action.payload)
    });
  },
});

export default AbaPageSlice.reducer;
