import { MeasureUnit } from "../redux/features/preferencesSlice";

export const roundValue = (temp: number): number => Math.round(temp * 100) / 100;

/**
 * Transfom a given temperature into one with a different measure units
 * @param {number}      temp                - the temp to convert 
 * @param {MeasureUnit} measure_unit        - the measure units of the given temp
 * @param {MeasureUnit} desired_mesure_unit - the measure units of the converted temp
 * @returns {number} the converted temp
 */
export const convert = (temp: number, measure_unit: MeasureUnit, desired_mesure_unit: MeasureUnit): number => {
  if (measure_unit === desired_mesure_unit) return temp;

  let newTemp;

  switch(measure_unit) {
    case MeasureUnit.CELSIUS:
      newTemp = (desired_mesure_unit === MeasureUnit.FAHRENHEIT) ? (temp * 9/5) + 32 : temp + 273.15;
      break;
    case MeasureUnit.FAHRENHEIT: 
      newTemp = (desired_mesure_unit === MeasureUnit.CELSIUS) ? (temp - 32) * 5/9 : (temp - 32) * 5/9 + 273.15;
      break;
    case MeasureUnit.KELVIN:
    default:
      newTemp = (desired_mesure_unit === MeasureUnit.CELSIUS) ? temp - 273.15 : (temp - 273.15) * 9/5 + 32;
      break;
  }

  return roundValue(newTemp);
}

export const getDateFromEpoch = (epoch: number): Date => {
  const date = new Date(0);
  date.setUTCSeconds(epoch);

  return date;
}