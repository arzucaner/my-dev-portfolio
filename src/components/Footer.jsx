import React from "react";
import Box from "@mui/material/Box";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Link from "@mui/material/Link";

export default function Footer() {
    return (
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
                    <Box>Work</Box>
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
                        <Box>
                            {" "}
                            <Link
                                href="https://www.linkedin.com/in/arzucaner"
                                color="#F2F2F2"
                                underline="none"
                            >
                                {"LinkedIn"}
                            </Link>
                        </Box>
                        <Box>
                            {" "}
                            <Link
                                href="https://twitter.com/arzuguneycaner"
                                color="#F2F2F2"
                                underline="none"
                            >
                                {"Twitter"}
                            </Link>
                        </Box>
                        <Box>
                            {" "}
                            <Link
                                href="https://www.youtube.com/channel/UCsK0v6RouRYb5I1Ny8flrOg"
                                color="#F2F2F2"
                                underline="none"
                            >
                                {"Youtube"}
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

//<Box>Projects</Box>
//<Box>Achievements</Box>
//<Box>Blog</Box>