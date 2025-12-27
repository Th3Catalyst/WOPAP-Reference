import * as c from '../../components/index';

export default function AAll() {
    return (
        <>
        <c.TimelineCollapsible year="2000">
            <c.TimelineYear year="2002" />
            <c.TimelineEvent date="SEP. 8" year="2002" tags={["scp-5243"]}>
                Deadline A <a href="https://scp-wiki.wikidot.com/33-taking-the-lead" target="_blank">diverges from baseline.</a>
            </c.TimelineEvent>
            <c.TimelineYear year="2003" />
            <c.TimelineEvent date="SEP. 8" year="2003" tags={["scp-5243"]}>
                The Survivors <a href="https://scp-wiki.wikidot.com/18-the-only-constant" target="_blank">arrive in the deadline.</a>
            </c.TimelineEvent>
        </c.TimelineCollapsible>
        </>
    )
}