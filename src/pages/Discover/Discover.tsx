import { Footer } from '../../components/organisms/Footer/Footer'
import { Box } from '@mui/material'
import { DiscoverContentContainer } from '../../components/organisms/DiscoverContent/DiscoverContentContainer'
import { DiscoverSectionsContainer } from '../../components/particles/DiscoverSectionsContainer'
import { DiscoverSectionsBox } from '../../components/particles/DiscoverSectionsBox'
import { DiscoverCoversBox } from '../../components/atoms/DiscoverCoversBox'
import { Main } from '../../components/organisms/Main/Main'
import { DiscoverInfoContainer } from '../../components/particles/DiscoverInfoContainer'

export const Discover = () => {
  return (
    <>
      <Main>
        <DiscoverContentContainer>
          <DiscoverInfoContainer>
            <Box sx={{ textAlign: 'left', fontSize: '2rem', width: '80%' }}>
              Discover new music
            </Box>
            <DiscoverSectionsContainer>
              <DiscoverSectionsBox>
                <img src="../../assets/microphone.svg" alt="Charts" width='40%' />
                Charts
              </DiscoverSectionsBox>
              <DiscoverSectionsBox>
              <img src="../../assets/albums.svg" alt="Albums" width='40%' />
                Albums
              </DiscoverSectionsBox>
              <DiscoverSectionsBox>
                <img src="../../assets/more.svg" alt="More" width='40%' />
                More
              </DiscoverSectionsBox>
            </DiscoverSectionsContainer>
            <Box sx={{ textAlign: 'left', fontSize: '0.75rem', width: '90%', marginTop: '13px' }}>
              By joining you can benefit by listening to the latest albums released.
            </Box>
          </DiscoverInfoContainer>
          <DiscoverCoversBox>
            <img src="../../assets/covers.jpg" alt="Covers" width='80%' style={{ marginRight: '20px' }} />
          </DiscoverCoversBox>
        </DiscoverContentContainer>
        </Main>
      <Footer />
    </>
  )
}

