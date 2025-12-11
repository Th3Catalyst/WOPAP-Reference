"use client";
interface TimelineCollapsibleProps {
    year: string|number;
    children: React.ReactNode;
}

export function TimelineCollapsible( { year, children}: TimelineCollapsibleProps) {
    
    return (
        <>
            <li className="collapsible text-5xl font-extrabold"><h1>{ year }s</h1></li>
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
            <p className="font-extrabold text-3xl">{ year }</p>
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
            <span>
                { date } <br />
                { year }
            </span>
            <div>
                { children }
            </div>
        </li>
    );
}

export default function Timeline({ children }: React.PropsWithChildren<{}>) {
    return (
        <ul>{ children }</ul>
    );
}