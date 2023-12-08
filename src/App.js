import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";
import AchievementsPage from "./pages/AchievementsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";


function App() {
    return (
        <Router>
            <Switch>
                <Route key="HomePage" exact path={["/", "/HomePage"]}>
                    <HomePage />
                </Route>

                <Route key="InfoPage" exact path={["/", "/InfoPage"]}>
                    <InfoPage />
                </Route>

                <Route key="ProjectPage" exact path={["/", "/ProjectPage"]}>
                    <ProjectPage />
                </Route>

                <Route key="AchievementsPage" exact path={["/", "/AchievementsPage"]}>
                    <AchievementsPage />
                </Route>

                <Route key="BlogPage" exact path={["/", "/BlogPage"]}>
                    <BlogPage />
                </Route>

                {/*         <Route path="*">
                      <Error404 />
                  </Route>
                   */}
            </Switch>
        </Router>
    );
}

export default App; 