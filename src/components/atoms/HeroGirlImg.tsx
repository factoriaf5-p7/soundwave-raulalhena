import { Box, styled } from '@mui/material'
import { SoundWaveTheme } from '../../components/templates/SoundWaveTheme'

export const HeroGirlImage = styled(Box)(() => ({
    display: 'none',
    maxWidth: '35%',
    [SoundWaveTheme.breakpoints.up('desktop')]: {
      display: 'block'
    }
  }))