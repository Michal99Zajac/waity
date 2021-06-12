import React, { useRef, useEffect } from 'react'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import { Heading } from '../../titles-n-text/heading/heading'
import { Button } from '../../actions/button/button'
import styles from './passcode-panel.module.sass'


type PasscodePanelTypes = {
  className?: string,
  passcode: string
}

/**
 * PasscodePanel Component - ...
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * @returns PasscodePanel JSX.Element Component
 */
export function PasscodePanel(props: PasscodePanelTypes): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)
  const regex: RegExp = /^[1-9]{7}$/

  function closePanel() { ref.current?.remove() }

  useEffect(() => {
    ref.current?.blur()
  }, [])

  if (!regex.test(props.passcode)) { return <div>Error: passcode is incorrect</div> }

  return (
    <div ref={ref} className={styles.passcodePanel}>
      <div className={styles.panel}>
        <Heading className={styles.heading} size='l' color='white' label='Thank You to Join Us!' />
        <div className={styles.passcode}>
          { props.passcode.split('').map(num => (
            <div className={styles.number}>{num}</div>
          ))}
        </div>
        <Paragraph size='l' color='black' className={styles.info}>
          This is your passcode.
          Remember this because Your Restaurant will need it to login your firm to the restaurant application.
          Thank You Again and welcome to the waity family!
        </Paragraph>
        <Button className={styles.button} desc='got it!' onClick={closePanel} color='white' />
      </div>
    </div>
  )
}
