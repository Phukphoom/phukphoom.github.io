import { PageLayout, ContentBox } from './components';

import { Page1, Page2, Page3, Page4 } from './pages';

const App = () => {
    return (
        <PageLayout>
            <div className="flex flex-row h-full w-full">
                <img className="hidden xl:block h-64 animate-wiggle-move" src="./images/phukphoom-octocat.png" alt="phukphoom-octocat" />
                <ContentBox className="animate-wiggle-move">
                    <Page1 />
                    <Page2 />
                    <Page3 />
                    <Page4 />
                </ContentBox>
            </div>
        </PageLayout>
    );
};

export default App;
