import React from 'react'
import ReactCalendar from 'react-calendar'
import './calendar.sass'


type CalendarTypes = {
  value: Date,
  onChange: any,
  minDate: Date,
  className?: string
}

/**
 * Calendar Component - A calendar for select date of reservation
 * 
 * @param {object} props Object with props like
 * - minDate (Date) - min Date to select
 * - value (Date) - value of input
 * - onChange (any) - function for change the input value
 * - className (string) - additional class for component
 * @returns JSX Calendar Component
 */
export function Calendar(props: CalendarTypes): JSX.Element {
  return (
    <ReactCalendar
      view='month'
      className={`static-calendar ${props.className ? props.className : ''}`}
      onChange={props.onChange}
      value={props.value}
      minDate={props.minDate}
    />
  )
}
