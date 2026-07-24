"use client";
interface TimelineCollapsibleProps {
    year: string|number;
    children: React.ReactNode;
}

export function bulletpoint(size: number|string, topMod: number|string, leftMod: number|string) {
    return (
        <div className={"inline-block border-5 border-[#BB0011] bg-[#BB0011] overflow-hidden rounded-[50%] absolute"} style={{
            width: size,
            height: size,
            top: topMod,
            left: leftMod
        }}></div>
    )
}

export function TimelineCollapsible( { year, children}: TimelineCollapsibleProps) {
    
    return (
        <>
            
            <li className="collapsible text-5xl font-extrabold">
                {bulletpoint("calc(15px + 0.5em)","0.125em", "calc(-28.5px - 0.25em)")}
                <h1 className="inline-block text-[#BB0011] pt-0 mt-0">{ year }s</h1>
            </li>
            <div className="content">
                { children }
            </div>
        </>
    );
}

interface TimelineYearProps {
    year: string|number;
}

export function TimelineYear( { year }: TimelineYearProps) {
    return (
        <li>
            {bulletpoint("calc(15px + 0.35em)","0.45em", "calc(-28.5px - 0.175em)")}
            <p className={`font-extrabold text-3xl inline-block pt-0 mt-0`}>
                { year }
            </p>
        </li>
    );
}

interface TimelineEventProps {
    date: string;
    year: string|number;
    tags?: string[]; 
    children: React.ReactNode;
}

export function TimelineEvent( { date, year, tags, children }: TimelineEventProps) {
    return (
        <li data-tags={ tags }>
            <span className="absolute left-[-110px] w-[70px] text-right">
                { date } <br />
                { year }
            </span>
            {bulletpoint("calc(15px + 0.25em)", 0, "calc(-28.5px - 0.0625em")}
            <div>
                { children }
            </div>
        </li>
    );
}

export default function Timeline({ children }: React.PropsWithChildren<unknown>) {
    return (
        <ul id="timeline" className="list-none my-0 ml-20 py-10 pl-4 min-h-[100vw] border-l-10 border-l-[#BB0011]">{ children }</ul>
    );
}