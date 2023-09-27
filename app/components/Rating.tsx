'use client'
import PropTypes from 'prop-types'
import roundTo from '../utils/roundTo'
import Image from 'next/image'

/**
 * @typedef PropTypes
 * @property { number } rate - Boolean to decide dark mode or not
 */

/**
 * Default Layout is a gate of all view.
 * @typedef PropTypes
 * @param { PropTypes } rate
 */

Rating.propTypes = {
     rate: PropTypes.number,
};

function Rating({ rate = 0 }) {
     const activeStar = roundTo(rate, 0.5)
     const unactiveStar = 5 - activeStar
     return (
          <div className='flex gap-1'>
               {
                    Array(Math.floor(activeStar)).fill('').map((v, id) => {
                         return (<Image height={10} width={10} key={id} src='/ic-star-active.svg' alt="star" />)
                    })
               }
               {
                    !Number.isInteger(activeStar) &&
                    <Image height={10} width={10} alt="star-half" src='/ic-half-star.svg' />
               }
               {
                    Array(Math.floor(unactiveStar)).fill('').map((v, id) => {
                         return <Image height={10} width={10} key={id} src='/ic-star-inactive.svg' alt="star-inactive" />
                    })
               }
          </div>
     )
}

export default Rating