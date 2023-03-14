import styled from "styled-components"
import { COLORS, SIZES } from "../../../assets/theme/theme"

export const LayoutWrapper = styled.div `
    color: ${COLORS.kwhite}
    // min-height: 100vh;
`

export const LayoutContent = styled.div `
    padding-left: ${SIZES.sidebar};
    background: ${COLORS.kbackground};
    min-height: 100vh !important
`

export const LayoutContentMain = styled.div `
    min-height: 100vh;
    padding: ${props => props.active ? `1.2rem 2rem` : ""};
    padding-top: 15vh;
`