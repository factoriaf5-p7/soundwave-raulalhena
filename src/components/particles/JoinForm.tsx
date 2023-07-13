import { styled } from "@mui/material";
import { SoundWaveTheme } from "../templates/SoundWaveTheme";

export const JoinForm = styled('form')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    backgroundColor: '#202027',
    color: '#fff',
    padding: '10px 38px',
    textAlign: 'left',
    borderRadius: '15px',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      width: 'a'
    }
  }))