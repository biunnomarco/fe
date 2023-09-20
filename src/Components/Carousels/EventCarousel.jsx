import Carousel from 'react-bootstrap/Carousel';
import SingleEventCard from '../../Pages/SinglePages/SingleEventCard';
import _, { setWith } from 'lodash';
import { useEffect } from 'react';
import './Carousel.css'

function EventCarousel(events) {
    let slidePerItem = 3
    let width = window.innerWidth
    
    const setWidth = () => {
        width = window.innerWidth
    }
    window.addEventListener("resize", setWidth)
    
    events = events.events
    const chunks = _.chunk(events, slidePerItem)
    
    return (

        <>
            {events && (
                <Carousel className='caro my-4' fade slide={false}>

                    {chunks.map((event) => {
                        return (
                        <Carousel.Item className='d-flex justify-content-around gap-2'>
                            {event[0] && (<SingleEventCard event={event[0]} />)}
                            {event[1] && (<SingleEventCard event={event[1]} />)}
                            {event[2] && (<SingleEventCard event={event[2]} />)}
                        </Carousel.Item>
                        )
                    })}

                </Carousel>)}

                
        </>

    );
}

export default EventCarousel;