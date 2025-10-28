import Link from "next/link";

export default function Home() {
    const quickLinks = [
        {
            icon: "playlist_add",
            title: "Create new doc",
            description: "Kick off a fresh document with our curated project spec template.",
            href: "/docs",
        },
        {
            icon: "task",
            title: "Onboarding checklist",
            description: "Track teammate progress through the day-one readiness list.",
            href: "/docs",
        },
        {
            icon: "dashboard_customize",
            title: "Design system updates",
            description: "Review component changes and recently published guidance.",
            href: "/docs",
        },
    ];

    const recentUpdates = [
        {
            title: "Platform guidelines refreshed",
            description: "We reorganised the navigation IA and added patterns for contextual help.",
            date: "2 days ago",
        },
        {
            title: "Incident response playbook",
            description: "Severity matrix, updated contacts, and triage timelines are now aligned.",
            date: "Last week",
        },
        {
            title: "SDK quickstart improvements",
            description: "Added TypeScript examples, environment variables, and troubleshooting tips.",
            date: "May 3",
        },
    ];

    const resources = [
        {
            label: "Technical onboarding",
            description: "Introduce new engineers to our tooling ecosystem and conventions.",
            href: "/docs",
        },
        {
            label: "Architecture review template",
            description: "Use a consistent checklist for service launches and migrations.",
            href: "/docs",
        },
        {
            label: "API design standards",
            description: "Guidelines for versioning, error handling, and schema evolution.",
            href: "/docs",
        },
    ];

    return (
        <div className="space-y-12">
            <section className="space-y-6">
                <span className="pill">
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    Workspace overview
                </span>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                    <div className="space-y-5 max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-[color:var(--text-primary)]">
                            Keep the team aligned with living documentation
                        </h1>
                        <p className="muted-text text-base md:text-lg">
                            Publish project context, decisions, and checklists in one place. Light and dark modes
                            stay perfectly in sync so updates feel comfortable any time of day.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link className="btn-primary" href="/docs">
                                <span className="material-symbols-outlined text-base">add_circle</span>
                                Create document
                            </Link>
                            <Link className="btn-secondary" href="/docs">
                                <span className="material-symbols-outlined text-base">view_agenda</span>
                                Browse templates
                            </Link>
                        </div>
                    </div>

                    <div className="dashboard-card dashboard-card--static max-w-sm w-full">
                        <span className="badge-accent">
                            <span className="material-symbols-outlined text-base">bolt</span>
                            This week
                        </span>
                        <p className="muted-text text-sm">
                            A quick snapshot of how the workspace is evolving across teams.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong className="block text-2xl font-semibold text-[color:var(--text-primary)]">27</strong>
                                <span className="muted-text text-xs uppercase tracking-[0.2em]">Active docs</span>
                            </div>
                            <div>
                                <strong className="block text-2xl font-semibold text-[color:var(--text-primary)]">14</strong>
                                <span className="muted-text text-xs uppercase tracking-[0.2em]">Contributors</span>
                            </div>
                            <div>
                                <strong className="block text-2xl font-semibold text-[color:var(--text-primary)]">6</strong>
                                <span className="muted-text text-xs uppercase tracking-[0.2em]">New updates</span>
                            </div>
                            <div>
                                <strong className="block text-2xl font-semibold text-[color:var(--text-primary)]">3</strong>
                                <span className="muted-text text-xs uppercase tracking-[0.2em]">Pending reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dashboard-grid">
                <div className="space-y-6">
                    <div className="dashboard-card">
                        <div className="flex items-center justify-between gap-3">
                            <h2 className="text-xl">Quick links</h2>
                            <Link className="link-accent text-sm" href="/docs">
                                View all
                            </Link>
                        </div>
                        <ul className="dashboard-card__list">
                            {quickLinks.map((item) => (
                                <li key={item.title}>
                                    <span className="material-symbols-outlined text-base mt-0.5 text-[color:var(--accent)]">
                                        {item.icon}
                                    </span>
                                    <div className="space-y-1">
                                        <Link className="link-accent text-base" href={item.href}>
                                            {item.title}
                                        </Link>
                                        <p className="muted-text text-sm">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="dashboard-card">
                        <h2 className="text-xl">Latest updates</h2>
                        <ul className="dashboard-card__list">
                            {recentUpdates.map((update) => (
                                <li key={update.title}>
                                    <span className="material-symbols-outlined text-base mt-0.5 text-[color:var(--accent)]">
                                        update
                                    </span>
                                    <div className="space-y-1">
                                        <strong>{update.title}</strong>
                                        <p className="muted-text text-sm">{update.description}</p>
                                        <span className="muted-text text-xs uppercase tracking-[0.2em]">
                                            {update.date}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="dashboard-card">
                        <h2 className="text-xl">Need a template?</h2>
                        <p className="muted-text text-sm">
                            Kick off product briefs, postmortems, and support runbooks with tried-and-tested layouts
                            that adapt to both light and dark surfaces.
                        </p>
                        <Link className="btn-secondary w-fit" href="/docs">
                            <span className="material-symbols-outlined text-base">library_books</span>
                            Explore templates
                        </Link>
                    </div>

                    <div className="dashboard-card">
                        <h2 className="text-xl">Key resources</h2>
                        <ul className="dashboard-card__list">
                            {resources.map((resource) => (
                                <li key={resource.label}>
                                    <span className="material-symbols-outlined text-base mt-0.5 text-[color:var(--accent)]">
                                        bookmark
                                    </span>
                                    <div className="space-y-1">
                                        <Link className="link-accent" href={resource.href}>
                                            {resource.label}
                                        </Link>
                                        <p className="muted-text text-sm">{resource.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </section>
        </div>
    );
}
