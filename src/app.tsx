import { Suspense } from 'solid-js';

import { Route, Router } from '@solidjs/router';

import { IndividualProfile, OrganizationProfile, ProjectPlan, SchoolSiteProfile } from '~/forms';

import HomePage from '~/pages/HomePage';

import '~/stylesheets/tailwind.css';

const App = () => {
    return (
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
            <Route path="/" component={HomePage} />
            <Route path="/application/organization-profile" component={OrganizationProfile} />
            <Route path="/application/individual-profile" component={IndividualProfile} />
            <Route path="/application/school-site-profile" component={SchoolSiteProfile} />
            <Route path="/application/project-plan" component={ProjectPlan} />
        </Router>
    );
};

export default App;
