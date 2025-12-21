import * as c from "../../index";

export default function Settings({pos}: {pos: number[]}) {
    return (
        <>
            <c.CollapseMenu pos={pos} image="../../settings.png" width="12em">
                <h3 className="font-extrabold text-1xl">Settings</h3>
                <br />
                <span><input type="checkbox" id="darkModeBox" onClick={() => {
                    const isChecked: boolean = (document.getElementById('darkModeBox') as HTMLInputElement)!.checked;
                    document.documentElement.style.setProperty('--primary-color', (isChecked ? 'black' : 'white'));
                    document.documentElement.style.setProperty('--secondary-color', (isChecked ? '#888' : 'black'));
                    window.location.assign(`${document.URL.split('?')[0]}?theme=${(isChecked ? 'dark' : 'light')}`)
                }} /> <label htmlFor="darkModeBox">Dark Mode</label></span>
            </c.CollapseMenu>
        </>
    )
}