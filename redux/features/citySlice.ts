import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: City = {
  name: 'mirandol-bourgnounac',
  coords: {
    lat: 44.1427,
    lon: 2.1686
  }
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