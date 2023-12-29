import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../Theme/theme";
import { useHistory } from "react-router-dom";

const NavbarToggle = () => {
    const [alignment, setAlignment] = React.useState("work");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const history = useHistory();

    const NavigateInfoPage = () => {
        history.push("/InfoPage");
    };
    const NavigateHomePage = () => {
        history.push("/HomePage");
    };

    

    return (
        <ThemeProvider theme={Theme}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            //style={{ display: 'flex', gap: '10px' }}
            >
                <ToggleButton
                    value="work"
                    aria-label="left aligned"
                    onClick={NavigateHomePage}
                >
                    Work
                </ToggleButton>
                <ToggleButton
                    value="info"
                    aria-label="centered"
                    onClick={NavigateInfoPage}
                >
                    Info
                </ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
};

export default NavbarToggle;

//Info
//</ToggleButton>
//<ToggleButton
//value="Projects"
//aria-label="left aligned"
//onClick={NavigateProjectsPage}
//className="hover-effect special-button"
// >
//</ToggleButton>
//<ToggleButton
// value="info"
//aria-label="centered"
// onClick={NavigateInfoPage}
//className="hover-effect"
//>
//Projects
//</ToggleButton>
//<ToggleButton
//value="achievements"
//aria-label="left aligned"
//onClick={NavigateAchievementsPage}
//className="hover-effect special-button"
//>
//Achievements
//</ToggleButton>
//<ToggleButton
//value="blog"
//aria-label="right aligned"
//onClick={NavigateBlogPage}
//className="hover-effect special-button"
//>
//Blog
//</ToggleButton>
//</ToggleButtonGroup>
//</ThemeProvider>
//);
//};
//const NavigateProjectsPage = () => {
    // history.push("ProjectsPage");
    //};

    //const NavigateAchievementsPage = () => {
    //history.push("AchievementsPage");
    //};

    // const NavigateBlogPage = () => {
    //history.push("BlogPage");
    //};

