// import React, { useEffect, useState } from 'react';

// const Storage = () => {
//     const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0);

//     useEffect(() => {
//         localStorage.setItem('count', count.toString());
//     }, [count]);

//     const handleCount = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <center>
//                 <button onClick={handleCount}>Click</button>
//             </center>
//             <center>{count}</center>
//         </div>
//     );
// };

// export default Storage;

import React, { useEffect, useState } from 'react';

const Storage = () => {
    const [count, setCount] = useState(parseInt(sessionStorage.getItem('count')) || 0);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    const handleCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <center>
                <button onClick={handleCount}>Click</button>
            </center>
            <center>{count}</center>
        </div>
    );
};

export default Storage;

