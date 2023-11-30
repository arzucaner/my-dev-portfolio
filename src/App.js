import "./App.css";
import Box from "@mui/material/Box";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CallMadeIcon from "@mui/icons-material/CallMade";
import Divider from "@mui/material/Divider";

function App() {
    return (
        <div className="App">
            <Box sx={{ display: "flex", flexDirection: "column", color: "#f2f2f2" }}
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
                                    Frontend Developer
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
                            <Box className="BoxItem">Work</Box>
                            <Box className="BoxItem">Info</Box>
                            <Box className="BoxItem">Blog</Box>
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

        </div >
    );
}

export default App;
