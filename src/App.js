import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import AppRouter from "../src/AppRouter";
import SocialMedia from "../src/pages/SocialMedia";

function App() {
    return (
        <div className="App">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                    sx={{
                        p: 4,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>left logo</Box>
                    <Box>main navbar</Box>
                    <Box>
                        <RouterLink to="/social/linkedin" style={{ marginRight: "10px" }}>
                        </RouterLink>

                        <RouterLink to="/social/twitter" style={{ margin: "0 10px" }}>
                        </RouterLink>

                        <RouterLink to="/social/youtube" style={{ marginLeft: "10px" }}>
                        </RouterLink>
                    </Box>
                    <Box sx={{}}>main</Box>
                    <Box
                        sx={{
                            p: 4,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Box>footer left logo</Box>
                            <Box>footer left information section</Box>
                        </Box>

                        <Box
                            gap={4}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'space-around'
                            }}
                        >
                            <Box> footer menu1</Box>
                            <Box> footer menu2</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default App;
