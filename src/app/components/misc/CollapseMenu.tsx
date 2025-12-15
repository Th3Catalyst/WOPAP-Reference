import React from 'react';

export default function CollapseMenu({image, children}: {image: string, children: React.ReactNode}) {
    let enableButton = React.useRef<HTMLButtonElement>(null);
    return (
        <>
            <button ref={enableButton} className="fixed top-20 right-20 w-40 h-40 bg-cover border-3 border-solid border-red border-r-5 cursor-pointer z-1000" style={{backgroundImage: `url(${image})`}} onClick={() => {
                (enableButton.current)!.nextElementSibling!.classList.toggle("show");
                console.log("clicked"
            );}} /> 
            <div>
                { children }
            </div>
        </>
    )
}