import React, { Children, cloneElement } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import styles from "./Carousel.module.scss"

function Carousel( {children} ) {
    const [pages, setPages] = React.useState([])
    const [offset, setOffset] = React.useState(0)

    const PAGE_WIDTH = 960

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }
    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    React.useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,

                    }
                })
            })
        )
    }, [])


  return (
    <div className={styles.mainContainer}>
        <FaChevronLeft className={styles.arrow} onClick={handleLeftClick} />
        <div className={styles.window}>
            <div className={styles.allPages}
            
            style={{
                transform: `translateX(${offset}px)`,
            }}
            
            >{pages}</div>
        </div>
        <FaChevronRight className={styles.arrow} onClick={handleRightClick} />
    </div>
  )
}

export default Carousel