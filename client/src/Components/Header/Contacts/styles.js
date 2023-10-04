import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const ButtonContainer = styled(Box)((theme)=>({
    display:'flex',
    flexDirection:"row",
    justifyContent:'center',
    margin:'0.5rem 2rem',
    gap:"1rem",
    whiteSpace:"nowrap"
}))