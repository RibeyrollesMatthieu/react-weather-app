import { initialState, MeasureUnit } from "../redux/features/preferencesSlice";
import { convert } from "./convertor";

/**
 * Get the current temperature regarding of the current measure units.
 * @param {number} temp the actual temp
 * @returns {number} the converted temp
 */
  export const getTemp = (temp: number, measure_unit: MeasureUnit): number => Math.round(convert(temp, initialState.measure_unit, measure_unit));
