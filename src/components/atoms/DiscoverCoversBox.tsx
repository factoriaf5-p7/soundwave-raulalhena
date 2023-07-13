import { Box, styled } from "@mui/material";
import { SoundWaveTheme } from "../templates/SoundWaveTheme";

export const DiscoverCoversBox = styled(Box)(() => ({
    maxWidth: '80%',
    display: 'flex', 
    marginLeft: '10%',
    justifyContent: 'end', 
    padding: '0',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
        margin: '0'
    }
}))