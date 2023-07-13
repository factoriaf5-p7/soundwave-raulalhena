import { Box, styled } from "@mui/material"
import { SoundWaveTheme } from "../templates/SoundWaveTheme"

export const HomeInfoContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '10px',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0',
    width: '70%',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
        padding: '25% 9%',
        width: '50%',
    }
  }))