import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum MeasureUnit {
  CELSIUS = '°C', 
  FAHRENHEIT = '°F',
  KELVIN = '°K'
}

interface Preferences {
  measure_unit: MeasureUnit;
  locale: string;
}

export const initialState: Preferences = {
  measure_unit: MeasureUnit.CELSIUS,
  locale: 'locale'
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setMeasureUnit: (state, action: PayloadAction<MeasureUnit>) => { state.measure_unit = action.payload; },
    setLocale: (state, action: PayloadAction<string>) => { state.locale = action.payload; },
  }
});

export const { setMeasureUnit, setLocale } = preferencesSlice.actions;
export default preferencesSlice.reducer;