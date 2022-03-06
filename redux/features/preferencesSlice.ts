import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum MeasureUnit {
  CELSIUS = '°C', 
  FAHRENHEIT = '°F',
  KELVIN = '°K'
}

interface Preferences {
  measure_unit: MeasureUnit;
}

const initialState: Preferences = {
  measure_unit: MeasureUnit.KELVIN
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setMeasureUnit: (state, action: PayloadAction<MeasureUnit>) => { state.measure_unit = action.payload; },
  }
});

export const { setMeasureUnit } = preferencesSlice.actions;
export default preferencesSlice.reducer;