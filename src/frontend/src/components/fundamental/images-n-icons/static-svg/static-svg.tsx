import React from 'react'


type StaticSvgTypes = {
  src: string,
  alt: string
}

/**
 * StaticSvg Component - pure svg for displaying
 * 
 * @param {object} props Object with props like
 * - src (string) - path to the svg
 * - alt (string) - alternate text for an image, if the image cannot be displayed.
 * @returns JSX StaticSvg Component
 */
export function StaticSvg(props: StaticSvgTypes) {
  return (
    <img src={props.src} alt={props.alt}></img>
  )
}
