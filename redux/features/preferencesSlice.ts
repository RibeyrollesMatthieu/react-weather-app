import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum MeasureUnit {
  CELSIUS = 'C', 
  KERNEL = 'F'
}

interface Preferences {
  measure_unit: MeasureUnit;
}

const initialState: Preferences = {
  measure_unit: MeasureUnit.CELSIUS
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setUnitMeasure: (state, action: PayloadAction<MeasureUnit>) => { state.measure_unit = action.payload; },
  }
});

export const { setUnitMeasure } = preferencesSlice.actions;
export default preferencesSlice.reducer;