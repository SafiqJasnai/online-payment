import React from 'react';

const Scroller = ({ children }) => {
    return <div className='flex w-full h-full overflow-y-auto'>
        {children}
    </div>
};

export default Scroller;