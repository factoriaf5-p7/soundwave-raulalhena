import { Box, styled } from "@mui/material"
import { SoundWaveTheme } from "../../templates/SoundWaveTheme"

export const DiscoverContentContainer = styled(Box)(() => ({
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '13px',
    marginTop: '10%',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      paddingLeft: '0',
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0px'
    }
  }))