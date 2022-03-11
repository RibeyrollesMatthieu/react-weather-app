import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: City = {
  name: 'mirandol-bourgnounac'
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => { state.name = action.payload; },
    setCoords: (state, action: PayloadAction<CityCoords>) => { state.coords = {...action.payload}; },
    seCity: (state, action: PayloadAction<City>) => { return state = {...action.payload}; },
  }
});

export const { setName, setCoords, seCity } = citySlice.actions;
export default citySlice.reducer;