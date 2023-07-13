import { styled, Box } from '@mui/material'
import { SoundWaveTheme } from '../templates/SoundWaveTheme'

export const NavbarContainer = styled(Box) (() => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: '3%',
    padding: '0 10px 0 10px',
    width: '100%',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
        maxWidth: '60%'
    }
}))