import React, { useRef, useEffect, useState } from 'react'
import { OrderBlock } from '../../forms/order-block/order-block'
import { StatusBlock } from '../../structure/status-block/status-block'
import styles from './timeline.module.sass'


type TimelineOrderBlockTypes = {
  timeStart: Date,
  timeStop: Date,
  name: string,
  setId: Function,
  type: 'booked' | 'clean' | 'available' | 'timeout',
  label: string | 'available' | 'clean',
  id: string
}

type TimelineStatusBlockTypes = {
  timeStart: Date,
  timeStop: Date,
  status: 'available' | 'booked' | 'clean',
  id: string
}

type TimelineTypes = {
  className?: string,
  orders?: TimelineOrderBlockTypes[],
  statuses?: TimelineStatusBlockTypes[]
}

/**
 * Timeline Component - timeline for visualization time of reservations
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for Timeline
 * - orders (TimelineOrderBlockTypes[]) - object for OrderBlocks and Dates for them
 * - statuses (TimelineStatusBlockTypes[]) - object for StatusBlocks with Dates and id for them
 * @returns JSX Timeline Component
 */
export function Timeline(props: TimelineTypes): JSX.Element {
  const totalOrder = props.orders &&
    props.orders[props.orders.length - 1].timeStop.getTime() / 1000 - props.orders[0].timeStart.getTime() / 1000

  const totalStatus = props.statuses &&
    props.statuses[props.statuses.length - 1].timeStop.getTime() / 1000 - props.statuses[0].timeStart.getTime() / 1000

  const ref: any = useRef()
  const [width, setWidth] = useState(0)
  const height = 500

  /**
   * calc height range for part of reservation block 
   * 
   * @param start time of start reservation block
   * @param end time of end reservation block
   * @returns value of height for part of block
   */
   const calcRange = (start: Date, end: Date) => {
    const diff = end.getTime() / 1000 -  start.getTime() / 1000
    
    if (totalOrder && width > 400)
      return Math.floor(width * (diff / totalOrder))
    else if (totalOrder && height)
      return Math.floor(height * (diff / totalOrder))

    if (totalStatus && width > 400)
      return Math.floor(width * (diff / totalStatus))
    else if (totalStatus && height)
      return Math.floor(height * (diff / totalStatus))
  }

  useEffect(() => {
    setWidth(ref.current.clientWidth)
  }, [ref.current?.clientWidth])

  const createBlock = (children: any, block: TimelineOrderBlockTypes | TimelineStatusBlockTypes, key: string) => (
    <div
      style={width > 400 ? {width: calcRange(block.timeStart, block.timeStop)} : {height: calcRange(block.timeStart, block.timeStop)}}
      key={key}
      className={styles.block}
    >
      <span className={styles.dotStart}></span>
      <span className={styles.start}>
        {block.timeStart.getHours() + ':' + block.timeStart.getMinutes() + (block.timeStart.getMinutes() < 10 ? '0' : '')}
      </span>
      {children}
      <span className={styles.stop}>
        {block.timeStop.getHours() + ':' + block.timeStop.getMinutes() + (block.timeStop.getMinutes() < 10 ? '0' : '')}
      </span>
      <span className={styles.dotStop}></span>
    </div>
  )

  return (
    <div ref={ref} className={`${styles.timeline} ${props.className ? props.className : ''}`}>
      { props.orders?.map(order => createBlock(<OrderBlock {...order} />, order, order.id)) }
      { props.statuses?.map(status => createBlock(<StatusBlock {...status} />, status, status.id)) }
    </div>
  )
}
