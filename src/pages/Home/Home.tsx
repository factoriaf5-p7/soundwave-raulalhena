import { Box, Typography } from '@mui/material'
import { HomeContentContainer } from '../../components/organisms/HomeContent/HomeContentContainer'
import { JoinButton } from '../../components/atoms/JoinButton'
import { HeroGirlImage } from '../../components/atoms/HeroGirlImg'
import { HomeInfoContainer } from '../../components/particles/HomeInfoContainer'
import { SoundWaveTheme } from '../../components/templates/SoundWaveTheme'
import { Main } from '../../components/organisms/Main/Main'
import { Circle } from '../../components/atoms/Circle'

export const Home = () => {
  return (
    <Main component='main'>
      <Circle sx={{  position: 'absolute', top: '40%', left: '5%', zIndex: '-2', bgcolor: '#bc3a80' }} />
      <Circle sx={{  position: 'absolute', top: '15%', left: '25%', zIndex: '-2', bgcolor: '#3457b2' }} />
      <Circle sx={{  position: 'absolute', top: '40%', left: '70%', zIndex: '-2', width: '800px', height: '800px', bgcolor: '#3457b2' }} />
      <HomeContentContainer>
        <HeroGirlImage component='section'>
          <img src="../../assets/landing-page-girl.png" alt="Hero Girl" style={{ maxHeight: '100%', maxWidth: '100%' }}/>
        </HeroGirlImage>
        <HomeInfoContainer component='section'>
          <Box sx={{ textAlign: 'left', width: '80%', [SoundWaveTheme.breakpoints.up('desktop')]: { width: '100%'} }}>
            <Typography variant='heroText'>
              Feel The Music
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'left', width: '100%' }}>
            Stream over 20 thousand songs with one click
          </Box>
          <Box sx={{ width: '40%', textAlign: 'left', marginTop: '10px', [SoundWaveTheme.breakpoints.up('desktop')]: { width: '40%'} }}>
            <JoinButton size='medium' sx={{ fontSize: '0.75rem', padding: '5px 15px' }}>Join Now</JoinButton>
          </Box>
        </HomeInfoContainer>
      </HomeContentContainer>
    </Main>
  )
}
