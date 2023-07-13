import { Box, styled } from "@mui/material"
import { SoundWaveTheme } from "../../templates/SoundWaveTheme"

export const JoinContentContainer = styled(Box)(() => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    gap: '5%',
    padding: '0 15px',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '15%',
      width: '60%',
      padding: '0'
    }
  }))