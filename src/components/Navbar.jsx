import React from "react";
import Box from "@mui/material/Box";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CallMadeIcon from "@mui/icons-material/CallMade";
import NavbarToggle from "../components/NavbarToggle";
import Link from "@mui/material/Link";
import ProjectPage from "../pages/ProjectsPage";
import AchievementsPage from "../pages/AchievementsPage";
import BlogPage from "../pages/BlogPage";
import InfoPage from "../pages/InfoPage";


export default function Navbar() {
    return (
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
                    width: "400px",
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

                    <Box
                        gap={1}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <CallMadeIcon />
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>

    );
}



