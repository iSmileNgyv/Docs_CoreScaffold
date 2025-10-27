export default function DocsTemplate() {
    return (
        <div className="docs-page px-8 py-6">
            <h1 className="docs-title text-3xl font-bold mb-4 text-primary">
                System Documentation
            </h1>

            <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                This page contains developer setup instructions and project references.
            </p>

            <section className="docs-section">
                <h2 className="text-2xl font-semibold mb-3">1. Setup</h2>
                <p>
                    Ensure Node.js, Docker, and Git are installed.
                    Run <code>npm install</code> to install dependencies.
                </p>
            </section>

            <section className="docs-section mt-6">
                <h2 className="text-2xl font-semibold mb-3">2. Run the Project</h2>
                <pre className="code-block">
{`npm run dev
# or
yarn dev`}
        </pre>
            </section>
        </div>
    );
}
