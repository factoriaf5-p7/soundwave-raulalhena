import { Footer } from '../../components/organisms/Footer/Footer'
import { Box, Typography } from '@mui/material'
import { JoinButton } from '../../components/atoms/JoinButton'
import { JoinInput } from '../../components/atoms/JoinInput'
import { JoinForm } from '../../components/particles/JoinForm'
import { JoinInputLabel } from '../../components/atoms/JoinInputLabel'
import { Main } from '../../components/organisms/Main/Main'
import { JoinContentContainer } from '../../components/organisms/JoinContent/JoinContentContainer'
import { JoinInfoContainer } from '../../components/particles/JoinInfoContainer'
import { Circle } from '../../components/atoms/Circle'

export function Join() {
  return (
    <>
      <Main>
        <Circle sx={{  position: 'absolute', top: '-20%', left: '20%', zIndex: '-2', width: '400px', height: '400px', bgcolor: '#3457b2' }} />
        <Circle sx={{  position: 'absolute', top: '20%', left: '-10%', zIndex: '-2', width: '550px', height: '550px', bgcolor: '#bc3a80' }} />
        <JoinContentContainer>
          <JoinInfoContainer>
            <Typography variant='joinTitle'>
              Join the <Typography variant='accentText'>fun.</Typography>
            </Typography>
          </JoinInfoContainer>
          <Box>
            <JoinForm id='signup'>
              <JoinInputLabel htmlFor='name'>
                <Typography variant='inputLabel'>
                  Name:
                </Typography>
              </JoinInputLabel>
              <JoinInput id='name' />
              <JoinInputLabel htmlFor='email'>
                <Typography variant='inputLabel'>
                  Email:
                </Typography>
              </JoinInputLabel>
              <JoinInput id='email' />
              <JoinInputLabel>
                <Typography variant='inputLabel'>
                  Password:
                </Typography>
              </JoinInputLabel>
              <JoinInput />
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <JoinButton sx={{  padding: '2px 25px', width: '100%', margin: '15px 0 10px 0', fontSize: '0.75rem',  }}>
                  Join Now
                </JoinButton>
              </Box>
            </JoinForm>
          </Box>
        </JoinContentContainer>
      </Main>
      <Footer />
    </>
  )
}

export default Join