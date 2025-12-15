import React from 'react';

export default function CollapseMenu({image, pos, children}: {image: string, pos: number[], children: React.ReactNode}) {
    let enableButton = React.useRef<HTMLButtonElement>(null);
    const buttonStyles = `fixed w-10 h-10  border-[3px] border-solid border-[#BB0011] rounded-[4] cursor-pointer z-1000 bg-cover bg-center bg-no-repeat`;
    console.log(buttonStyles);
    return (
        <>
            <button ref={enableButton} className={buttonStyles} style={{
                backgroundImage: `url('${image}')`,
                top: `${pos[1]}px`,
                right: `${pos[0]}px`
            }} onClick={() => {
                (enableButton.current)!.nextElementSibling!.classList.toggle("show");
                console.log("clicked"
            );}} /> 
            <div className="hidden fixed bg-inherit border-3 border-solid border-[#BB0011] rounded-[4] p-2.5 z-999 min-w-[50%] w-[80%] text-center items-center flex-col flex-wrap" style={{
                top: `${pos[1]}px`,
                right: `${pos[0] + 50}px`
            }} >
                { children }
            </div>
        </>
    )
}