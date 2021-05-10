/**
 * function check if object is empty entire
 * 
 * @param obj {Object} object to check
 * @returns false if is not empty or true if is empty
 */
export function isEmpty(obj: Object) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }

  return true
}