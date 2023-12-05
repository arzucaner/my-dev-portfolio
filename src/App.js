import "./App.css";
import Box from "@mui/material/Box";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CallMadeIcon from "@mui/icons-material/CallMade";
import Divider from "@mui/material/Divider";
import NavbarToggle from "./components/NavbarToggle";
import InfoPage from "./pages/InfoPage";
import ProjectPage from "./pages/ProjectPage";
import AchievementsPage from "./pages/AchievementsPage";
import BlogPage from "./pages/BlogPage";

function App() {
    return (
        <div className="App">
            <Box
                gap={10}
                sx={{ display: "flex", flexDirection: "column", color: "#f2f2f2" }}
            >
                <Box
                    sx={{
                        p: 4,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Box>
                                <FingerprintIcon sx={{ fontSize: 50 }} />
                            </Box>
                            <Box
                                gap={0.5}
                                sx={{
                                    alignItems: "flex-start",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        letterSpacing: "-0.5px",
                                        lineHeight: "22px",
                                    }}
                                >
                                    Arzu Caner
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "12px",
                                        letterSpacing: "0.2px",
                                        lineHeight: "12px",
                                        color: "#F2F2F280",
                                    }}
                                >
                                    Software Developer
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            gap={2}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                backdropFilter: "blur(15px)",
                                backgroundColor: "#F2F2F20D",
                                borderRadius: "24px",
                                borderStyle: "solid",
                                borderWidth: "1px",
                                borderImageOutset: "0",
                                borderImageRepeat: "stretch",
                                borderImageSlice: "100%",
                                borderImageSource: "none",
                                borderImageWidth: 1,
                                borderColor: "rgba(242,242,242,0.1)",
                                borderShadow: "0 10px 25px rgba(0, 0, 0, .15)",
                                pl: "6px",
                                pr: "6px",
                                width: "180px",
                                height: "48px",
                                transition:
                                    "box-shadow 1s cubic-bezier(.23, 1, .32, 1), border .6s cubic-bezier(.165, .84, .44, 1)",
                            }}
                        >
                            <NavbarToggle />
                        </Box>
                        <Box
                            gap={3}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignContent: "flex-end",
                            }}
                        >
                            <Box
                                gap={1}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <a href="https://www.linkedin.com/in/arzucaner/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                                    <Box>
                                        <CallMadeIcon />
                                    </Box>
                                </Box>

                                <Box>
                                    <a href="https://twitter.com/arzuguneycaner" target="_blank" rel="noopener noreferrer">Twitter</a>
                                    <Box>
                                        <CallMadeIcon />
                                    </Box>
                                </Box>
                                <Box>
                                    <a href="https://www.youtube.com/channel/UCsK0v6RouRYb5I1Ny8flrOg" target="_blank" rel="noopener noreferrer">YouTube</a>

                                    <Box>
                                        <CallMadeIcon />
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                    </Box>

                    <Box
                        gap={5}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                outlineOffset: "-1px",
                                backgroundColor: "rgba(242, 242, 242, .04)",
                                borderRadius: "24px",
                                outline: "1px solid rgba(242, 242, 242, .05)",
                                padding: "8px",
                                boxShadow: "0 40px 80px rgba(0, 0, 0, .5)",
                                width: "705px",
                                height: "530px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundImage:
                                        "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .3), rgba(0, 0, 0, 0))",
                                    width: "687px",
                                    zIndex: "0",
                                    top: "0%",
                                    bottom: "0%",
                                    left: "0%",
                                    right: "0%",
                                    height: "488px",
                                    gridRowGap: "56px",
                                    border: "1px solid #3d3d3d",
                                    borderRadius: "16px",
                                    flexDirection: "column",
                                    paddingTop: "32px",
                                    paddingLeft: "28px",
                                    paddingRight: "28px",
                                    textDecoration: "none",
                                    transition: "border .4s cubic-bezier(.165, .84, .44, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                test
                            </Box>
                        </Box>
                    </Box>
                    <Divider sx={{ bgcolor: "rgba(242, 242, 242, .1)" }} />

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
                            <Box>
                                <FingerprintIcon sx={{ fontSize: 70 }} />
                            </Box>
                            <Box>© 2023 All Rights Reserved.</Box>
                        </Box>

                        <Box
                            gap={4}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <Box gap={2}>
                                <Box
                                    sx={{
                                        color: "#F2F2F2",
                                        opacity: 0.5,
                                        letterSpacing: "1.5px",
                                        fontSize: "9px",
                                        fontWeight: 500,
                                        lineHeight: "13px",
                                        mb: 2,
                                    }}
                                >
                                    MAIN
                                </Box>
                                <Box>Info</Box>
                                <Box>Project</Box>
                                <Box>Achievements</Box>
                                <Box>Blog</Box>
                            </Box>
                        </Box>
                        <InfoPage />
                    </Box>
                    <Box>
                        <ProjectPage />
                    </Box>
                    <Box>
                        <AchievementsPage />
                    </Box>
                    <Box>
                        <BlogPage />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                color: "#F2F2F2",
                                opacity: 0.5,
                                letterSpacing: "1.5px",
                                fontSize: "9px",
                                fontWeight: 500,
                                lineHeight: "13px",
                                mb: 2,
                            }}
                        >
                            CONTACT
                        </Box>
                        <Box gap={2}>
                            <Box>LinkedIn</Box>
                            <Box>Twitter</Box>
                            <Box>YouTube</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
            </Box >
        </div >

    );
}


export default App;