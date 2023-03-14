import styled from "styled-components"
import { COLORS, SIZES } from "../../../assets/theme/theme"

export const TextAreaScroll = styled.div `
    width: 100%;
    height: 80px;
    border: 1px solid #CED4DA;
    border-radius: ${SIZES.radiusx};
    font-size: 13px;
    color: #495057;
    background-color: #FFFFFF;

    textarea {
        border: none;
        outline: none;
        resize: none;
        width: 100%;
        background: transparent;
        padding: 1rem;
        height: 80px;

        &:focus{
            border: 1px solid ${COLORS.kLightGray};
            border-radius: ${SIZES.radiusx};
        }

        &::-webkit-scrollbar{
            width: 3px;
            margin: 1rem;
        }

        &::-webkit-scrollbar-track{
            -webkit-box-shadow: inset 0 0 10px #CED4DA;
        }

        &::-webkit-scrollbar-thumb{
            background-color: var(--kGray);
        }
    }

`