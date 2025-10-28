const quickstart = [
    {
        title: "Install dependencies",
        description: "Install the project dependencies after cloning the repository.",
        command: "npm install",
    },
    {
        title: "Copy environment variables",
        description:
            "Duplicate .env.example to .env.local and adjust the API keys for your environment.",
        command: "cp .env.example .env.local",
    },
    {
        title: "Start the development server",
        description: "Run the Next.js dev server with Turbopack for instant feedback.",
        command: "npm run dev",
    },
];

const deploymentChecklist = [
    "Run linting and type checks with npm run lint and npm run typecheck.",
    "Build the production bundle using npm run build.",
    "Ensure environment variables are configured in the deployment target.",
];

const resources = [
    {
        label: "Component Inventory",
        description: "Reusable UI patterns and Tailwind tokens that power the docs experience.",
        href: "#",
    },
    {
        label: "Core API Reference",
        description: "Generated reference for REST and GraphQL endpoints exposed by the core service.",
        href: "#",
    },
    {
        label: "Design Tokens",
        description: "Source of truth for typography, colors, and spacing shared across apps.",
        href: "#",
    },
];

const anchors = [
    { id: "overview", label: "Overview" },
    { id: "quickstart", label: "Quickstart" },
    { id: "project-structure", label: "Project Structure" },
    { id: "environment", label: "Environment" },
    { id: "deployment", label: "Deployment" },
];

export default function DocsTemplate() {
    return (
        <div className="docs-page">
            <section className="docs-hero" id="overview">
                <div className="docs-hero__content">
                    <p className="docs-eyebrow">Core Scaffold</p>
                    <h1 className="docs-title">System Documentation</h1>
                    <p className="docs-subtitle">
                        Everything you need to configure, run, and contribute to the Core Scaffold
                        platform. Start with the quickstart, explore the directory structure, and
                        ship with confidence.
                    </p>
                    <div className="docs-actions">
                        <a className="docs-btn docs-btn--primary" href="#quickstart">
                            <span className="material-symbols-outlined" aria-hidden="true">
                                rocket_launch
                            </span>
                            <span>View quickstart</span>
                        </a>
                        <a className="docs-btn docs-btn--ghost" href="#project-structure">
                            <span className="material-symbols-outlined" aria-hidden="true">
                                folder_open
                            </span>
                            <span>Browse project files</span>
                        </a>
                    </div>
                </div>
                <div className="docs-hero__meta">
                    <div className="docs-pill">Last updated · May 2024</div>
                    <div className="docs-pill">Maintainers · Core Platform</div>
                </div>
            </section>

            <div className="docs-grid">
                <article className="docs-content">
                    <section className="docs-card" id="quickstart">
                        <header>
                            <p className="docs-card__eyebrow">Get productive</p>
                            <h2>Quickstart</h2>
                            <p>
                                Follow these steps to prepare your development environment and run the
                                project locally.
                            </p>
                        </header>
                        <ol className="docs-steps">
                            {quickstart.map((step, index) => (
                                <li key={step.title}>
                                    <div className="docs-step__index">{index + 1}</div>
                                    <div className="docs-step__content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        <pre>
                                            <code>{step.command}</code>
                                        </pre>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="docs-card" id="project-structure">
                        <header>
                            <p className="docs-card__eyebrow">Map the workspace</p>
                            <h2>Project structure</h2>
                            <p>
                                The scaffold embraces a modular architecture that separates layouts,
                                feature templates, and global styling resources.
                            </p>
                        </header>
                        <div className="docs-card__body">
                            <div className="docs-card__panel">
                                <h3>Application routes</h3>
                                <ul>
                                    <li>
                                        <span className="docs-badge">app/(main)</span>
                                        Route group that hosts authenticated layouts and shared chrome.
                                    </li>
                                    <li>
                                        <span className="docs-badge">app/(auth)</span>
                                        Isolated entrypoints for login, onboarding, and recovery flows.
                                    </li>
                                    <li>
                                        <span className="docs-badge">app/api</span>
                                        Edge-ready API handlers used for lightweight orchestration.
                                    </li>
                                </ul>
                            </div>
                            <div className="docs-card__panel">
                                <h3>Shared resources</h3>
                                <ul>
                                    <li>
                                        <span className="docs-badge">src/layouts</span>
                                        Header, sidebar, and footer shells composed into page layouts.
                                    </li>
                                    <li>
                                        <span className="docs-badge">src/page-templates</span>
                                        Reusable page experiences with scoped SCSS for theming.
                                    </li>
                                    <li>
                                        <span className="docs-badge">src/styles</span>
                                        Tailwind tokens and component-level enhancements.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="docs-card" id="environment">
                        <header>
                            <p className="docs-card__eyebrow">Stay aligned</p>
                            <h2>Environment standards</h2>
                            <p>
                                Recommended tooling to keep the development and deployment workflows
                                consistent across the team.
                            </p>
                        </header>
                        <div className="docs-callout">
                            <span className="material-symbols-outlined">verified</span>
                            Node.js 20.x · pnpm or npm 9.x · Docker 25.x
                        </div>
                        <ul className="docs-list">
                            <li>
                                <strong>Code quality</strong> — Lint with ESLint, format with Prettier,
                                and run type checks using TypeScript.
                            </li>
                            <li>
                                <strong>Styling</strong> — Tailwind CSS powers utility classes while SCSS
                                modules provide structure for complex layouts.
                            </li>
                            <li>
                                <strong>Testing</strong> — Vitest unit suites live beside features.
                            </li>
                        </ul>
                    </section>

                    <section className="docs-card" id="deployment">
                        <header>
                            <p className="docs-card__eyebrow">Ship it</p>
                            <h2>Deployment checklist</h2>
                            <p>
                                Validate the release branch and ensure the platform is production-ready
                                before promoting a build.
                            </p>
                        </header>
                        <ul className="docs-list">
                            {deploymentChecklist.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </article>

                <aside className="docs-right-rail">
                    <div className="docs-toc">
                        <p className="docs-toc__title">On this page</p>
                        <nav>
                            <ul>
                                {anchors.map((anchor, index) => (
                                    <li key={anchor.id}>
                                        <a href={`#${anchor.id}`} data-active={index === 0}>
                                            <span aria-hidden="true" />
                                            {anchor.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="docs-card docs-card--compact">
                        <header>
                            <p className="docs-card__eyebrow">Need more?</p>
                            <h2>Resources</h2>
                            <p>Deep dives and supporting material for the Core Scaffold.</p>
                        </header>
                        <ul className="docs-resource-list">
                            {resources.map((resource) => (
                                <li key={resource.label}>
                                    <a href={resource.href}>
                                        <div>
                                            <h3>{resource.label}</h3>
                                            <p>{resource.description}</p>
                                        </div>
                                        <span className="material-symbols-outlined">north_east</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="docs-card docs-card--compact">
                        <header>
                            <p className="docs-card__eyebrow">Release cadence</p>
                            <h2>Weekly snapshot</h2>
                            <p>Track progress across teams.</p>
                        </header>
                        <ul className="docs-timeline">
                            <li>
                                <span className="docs-timeline__dot docs-timeline__dot--success" />
                                <div>
                                    <h3>v0.4.2</h3>
                                    <p>Rolled out the analytics ingestion pipeline.</p>
                                </div>
                            </li>
                            <li>
                                <span className="docs-timeline__dot docs-timeline__dot--info" />
                                <div>
                                    <h3>QA hardening</h3>
                                    <p>End-to-end suite migrated to Playwright.</p>
                                </div>
                            </li>
                            <li>
                                <span className="docs-timeline__dot" />
                                <div>
                                    <h3>Upcoming</h3>
                                    <p>Docs localization for TR and EN audiences.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
