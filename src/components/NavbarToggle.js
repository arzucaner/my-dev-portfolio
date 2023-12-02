import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../theme/Theme";

const NavbarToggle = () => {
    const [alignment, setAlignment] = React.useState("work");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ThemeProvider theme={Theme}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="work" aria-label="left aligned">
                    Work
                </ToggleButton>
                <ToggleButton value="info" aria-label="centered">
                    Info
                </ToggleButton>
                <ToggleButton value="blog" aria-label="right aligned">
                    Blog
                </ToggleButton>
            </ToggleButtonGroup>
        </ThemeProvider>
    );
};

export default NavbarToggle;
