import { OpenHour } from '../entities/open-hour.entity'

/**
 * sort array of OpenHours by day. Function for sort() function param
 * 
 * @param a first OpenHour day to compare
 * @param b second OpenHour day to compare
 * @returns compare value
 */
export function sortByDay(a: OpenHour, b: OpenHour): number {
  const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

  const indexA = days.indexOf(a.day.toUpperCase())
  const indexB = days.indexOf(b.day.toUpperCase())

  return indexA < indexB ? -1 : 1
}
