import { Box, styled } from "@mui/material";
import { SoundWaveTheme } from "../templates/SoundWaveTheme";

export const JoinInfoContainer = styled(Box)(() => ({
    textAlign: 'left',
    width: '80%', 
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      maxWidth: '40%',
    }
  }))