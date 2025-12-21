import React from 'react';

export default function CollapseMenu({image, pos, width, children}: {image: string, pos: number[], width?: string, children: React.ReactNode}) {
    let enableButton = React.useRef<HTMLButtonElement>(null);
    const buttonStyles = "fixed w-10 h-10  border-[3px] border-solid border-[#BB0011] rounded-[4] cursor-pointer z-1000 bg-cover bg-center bg-no-repeat";
    const menuStyles = "hidden fixed bg-inherit border-3 border-solid border-[#BB0011] rounded-[4] p-2.5 z-999 text-center items-center flex-col flex-wrap top-5 right-[70px]"
    return (
        <>
            <button ref={enableButton} className={buttonStyles} style={{
                backgroundImage: `url('${image}')`,
                top: `${pos[1]}px`,
                right: `${pos[0]}px`
            }} onClick={() => {
                (enableButton.current)!.nextElementSibling!.classList.toggle("show");
                }} /> 
            <div className={menuStyles} style={{
                width: `${width ? width: "80%"}`
            }}>
                { children }
            </div>
        </>
    )
}