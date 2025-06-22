const HomePage = () => {
    return (
        <>
            <header class="max-w-2xl mx-auto p-4 text-center">
                <h1 class="font-bold text-3xl text-primary">Government of Sindh</h1>
                <h2 class="text-lg">Sindh Education Foundation</h2>
            </header>
            <main>
                <a href="/application/organization-profile">Organization Profile</a>
                <br />
                <a href="/application/individual-profile">Individual Profile</a>
                <br />
                <a href="/application/school-site-profile">School Site Profile</a>
                <br />
                <a href="/application/project-plan">Project Plan</a>
            </main>
        </>
    );
};

export default HomePage;
