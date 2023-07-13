import { styled, Paper, Box, Typography } from '@mui/material'
import { FooterContentContainer } from '../../particles/FooterContentContainer'
import { FooterItem } from '../../atoms/FooterItem'
import { SoundWaveTheme } from '../../templates/SoundWaveTheme'

export const FooterCustom = styled(Box)(() => ({
  background: '#202027',
  padding: '20px 0'
}))

export const FooterNav = styled(Box)(() => ({
  [SoundWaveTheme.breakpoints.up('desktop')]: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10%',
    width: '15%',
  }
}))

export const FooterSocialNetwork = styled(Box)(() => ({
  [SoundWaveTheme.breakpoints.up('desktop')]: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10%',
    width: '15%',
  }
}))

export const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} component='footer'>
      <FooterCustom>
        <FooterContentContainer>
          <FooterNav>
            <FooterItem>
              <Typography variant='footerText' sx={{ textAlign: 'left' }}>
                About Us
              </Typography>
            </FooterItem>
            <FooterItem>
              <Typography variant='footerText'>
                Contact
              </Typography>
            </FooterItem>
          </FooterNav>
          <FooterSocialNetwork>
            <FooterItem>
              <img src="../../../assets/twitter.svg" alt="Twitter" />
              <Typography variant='footerText'>
                Twitter
              </Typography>
            </FooterItem>
            <FooterItem>
              <img src="../../../assets/twitter.svg" alt="Facebook" />
              <Typography variant='footerText'>
                Facebook
              </Typography>
            </FooterItem>
          </FooterSocialNetwork>
        </FooterContentContainer>
      </FooterCustom>
    </Paper>
  )
}
