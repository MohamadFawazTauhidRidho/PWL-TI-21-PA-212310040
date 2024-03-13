export default function HelloWorld() {
    const today = new Date();
    function matkul() {
        return "Pemrograman Web Lanjut"
    }
    
    const nama = () => {
        return <h3> Febri D F </h3>;
    };
    
    return (
        <div>
           <h1 className="text-bg-danger ">HelloWorld</h1>
            <h2>today{today.toTimeString()}</h2>
            <h2 className="text-bg-danger ">{matkul()}</h2>
            {nama()}
        </div>
    );
}
// import React from 'react';



// const HelloWorld = () => {
//     const today = new Date();
    
// }

// export default HelloWorld;