import React from 'react';

import './directory.style.scss';

import MenuItems from '../menu-items/menu-items';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            section : [
                {   id: 1, 
                    title: 'Cars',
                    subtitle: 'Visit Now',
                    imageUrl: 'https://i.pinimg.com/originals/96/08/ef/9608efea87762064d4a462872d4ad905.jpg'
                },
                {   id: 2, 
                    title: 'Doll',
                    subtitle: 'Visit Now',
                    imageUrl: 'https://images2.alphacoders.com/491/thumb-1920-491173.jpg'
                },
                {   id: 3, 
                    title: 'Figures',
                    subtitle: 'Visit Now',
                    imageUrl: 'https://images.hdqwalls.com/download/toy-story-photography-v4-1920x1080.jpg'
                },
                {   id: 4, 
                    title: 'Lego',
                    subtitle: 'Visit Now',
                    imageUrl: 'https://wallpapercave.com/wp/wp1883623.jpg',
                    size: 'large'
                },
                {   id: 5, 
                    title: 'Game',
                    subtitle: 'Visit Now',
                    imageUrl: 'https://wallpaperaccess.com/full/736754.jpg',
                    size: 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {   
                    this.state.section.map(({title, subtitle, size, id, imageUrl}) => (
                        <MenuItems  title={title}
                                    subtitle={subtitle}
                                    key={id}
                                    imageUrl={imageUrl}
                                    size={size}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Directory;