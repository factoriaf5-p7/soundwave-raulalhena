import { Box, styled } from "@mui/material";
import { SoundWaveTheme } from "../templates/SoundWaveTheme";

export const DiscoverSectionsContainer = styled(Box)(() => ({
    width: '90%',
    fontSize: '0.75rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    gap: '15px',
    padding: '0',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      justifyContent: 'left',
      width: '100%'
    }
  }))