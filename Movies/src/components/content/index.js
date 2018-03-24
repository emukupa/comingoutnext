import React from 'react';

import FeaturedCarousel from './carousels/featuredCarousel';
import MovieContent from './movieContent'

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
               <FeaturedCarousel/>
               <MovieContent/>
            </div>
        )
    }
}

export default Content;