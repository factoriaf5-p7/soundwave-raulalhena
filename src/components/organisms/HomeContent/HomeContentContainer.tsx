import { Box, styled } from "@mui/material"
import { SoundWaveTheme } from "../../templates/SoundWaveTheme"

export const HomeContentContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      width: '1080px',
      alignItems: 'flex-end',
      gap: '3%',
    }
}))