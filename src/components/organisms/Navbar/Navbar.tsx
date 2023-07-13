import { AppBar, Box } from '@mui/material'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { LogoTypography } from '../../particles/LogoTypography'
import { MenuLinks } from '../../particles/MenuLinks'
import { NavbarContainer } from '../../particles/NavbarContainer'
import { ToolbarCustom } from '../../particles/ToolbarCustom'
import { MenuLink } from '../../atoms/MenuLink'

const AppBarCustom = styled(AppBar)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}))

export const Navbar = () => {
  return (
        <AppBarCustom elevation={0} sx={{ bgcolor: 'rgba(0, 0, 0, 0)' }}>
            <NavbarContainer>
                <ToolbarCustom>
                    <Box>
                        <Link to='/'>
                            <LogoTypography variant='h5'>
                                <img src="../../../assets/logo.png" alt="Soundwave" style={{ maxWidth: '20%' }}/>Soundwave
                            </LogoTypography>
                        </Link>
                    </Box>
                    <MenuLinks>
                        <MenuLink to='/discover' >
                            Discover
                        </MenuLink>
                        <MenuLink to='/join'>   
                            Join
                        </MenuLink>
                    </MenuLinks>
                </ToolbarCustom>
            </NavbarContainer>
        </AppBarCustom>
    )
}
