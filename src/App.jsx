import { PageLayout, ContentDisplay } from './components';

import { Page1, Page2, Page3, Page4 } from './pages';

const App = () => {
    return (
        <PageLayout>
            <div className="flex flex-row h-full w-full">
                <img className="hidden xl:block h-64 animate-wiggle-move" src="./images/phukphoom-octocat.png" alt="phukphoom-octocat" />
                <ContentDisplay className="animate-wiggle-move">
                    <Page1 />
                    <Page2 />
                    <Page3 />
                    <Page4 />
                </ContentDisplay>
            </div>
        </PageLayout>
    );
};

export default App;
