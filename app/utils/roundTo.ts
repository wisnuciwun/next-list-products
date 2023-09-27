/**
 * @typedef PropType
 * @property { number } f - insert any float number
 * @returns { number }
 */

/**
 * This utility is use for returning float number into nearest defined number (default 1)
 * if value < 0.5 it will rounded to 0, and if > 0.5 it will rounded to defined num
 * for example (defined num is 1) : 1.7 ==> 2 and 1.2 ==> 1
 * @param { PropType } f
 * @returns { number } return 0 or rounded to defined num
 */
export default function roundTo(f: number = 1, roundTo: number = 1) {
    Number(f)
    let result = Math.floor(f) + (Math.round(f - Math.floor(f)) ? roundTo : 0.0)
    return result
}
