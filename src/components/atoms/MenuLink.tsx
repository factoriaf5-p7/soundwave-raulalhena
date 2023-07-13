import { styled } from "@mui/material"
import { Link } from "react-router-dom"

export const MenuLink = styled(Link)(() => ({
    color: '#fff',
    '&:hover': {
        color: '#adadad'
    },
    textDecoration: 'none'
}))