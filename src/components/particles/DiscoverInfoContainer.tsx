import { Box, styled } from "@mui/material";
import { SoundWaveTheme } from "../templates/SoundWaveTheme";

export const DiscoverInfoContainer = styled(Box)(() => ({
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      display: 'flex',
      gap: '10px',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      width: '100%',
      marginLeft: '5%'
    }
  }))