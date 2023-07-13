import { Input, styled } from '@mui/material'

export const JoinInput = styled(Input)(() => ({
    border: '1px solid #2E3852',
    ':hover': {
      border: '1px solid #596da0'
    },
    borderRadius: '4px',
    padding: '3px 10px 3px 10px',
    fontSize: '0.75rem'
  }))