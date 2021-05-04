import React from 'react'


type StaticSvgTypes = {
  src: string,
  alt: string,
  className?: string
}

/**
 * StaticSvg Component - pure svg for displaying
 * 
 * @param {object} props Object with props like
 * - src (string) - path to the svg
 * - alt (string) - alternate text for an image, if the image cannot be displayed
 * - className (string) - additional class for component
 * @returns JSX StaticSvg Component
 */
export function StaticSvg(props: StaticSvgTypes): JSX.Element {
  return (
    <img className={props.className ? props.className : ''} src={props.src} alt={props.alt}></img>
  )
}
