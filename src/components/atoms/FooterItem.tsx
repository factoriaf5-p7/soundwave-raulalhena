import { Box, styled } from '@mui/material'
import { SoundWaveTheme } from '../templates/SoundWaveTheme'

export const FooterItem = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      gap: '8px'
    }
  }))
  