import styled from "styled-components"
import { COLORS, SIZES } from "../../../assets/theme/theme"

export const TableWrapper = styled.div`
    // overflow-y: auto;
    // padding:18px;

    .table-spacing {
        overflow-y: auto;
        width: 100%;
        min-width: 400px;
        border-collapse: separate;
        border-spacing:0 10px !important;
       
        thead {
            background: ${COLORS.kwhite};
            tr{
                text-align: left;
                    th, td {
                        text-transform: capitalize;
                        padding: 15px 10px;
                        color:  ${COLORS.kblackCom};
                        font-size: ${SIZES.body5};
                        font-weight : 600;
                    }
            }
        }

        

        tbody tr{
            background: ${COLORS.kwhite};
            th,  td {
                text-transform: capitalize;
                padding: 15px 10px;
                color:  ${COLORS.kblackCom};
                font-size: ${SIZES.body5};
                margin-top: 5rem;
            }

            &:hover{
                background: ${COLORS.kLightGray};
            }
        }

        tbody > tr:hover{
        }
    }

    .table__pagination {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;

        .table__pagination-item{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: ${COLORS.kblackCom};
        }

        .table__pagination-item.active, 
            .table__pagination-item.active:hover{
                background-color: ${COLORS.kprimary};
                color: white;
                font-weight: 600;
            }

            .table__pagination-item:hover {
                color: white;
                background-color: ${COLORS.kprimary};
                opacity: .3
            }
        .table_pagination ~ .table_pagination-item {
            margin-left: 10px;
        }
    }
`

export const TableCard = styled.div `
    // padding: 10px;
    padding : 10px 28px 10px 28px;
    // margin-bottom: 30px;
    border-radius: 4;
`