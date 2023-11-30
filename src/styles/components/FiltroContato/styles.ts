import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#ffeaa7' : '#eeeeee')};
  background-color: ${(props) => (props.ativo ? '#ff7675' : '#ff7675')};
  color: ${(props) => (props.ativo ? '#ffeaa7' : '#fff')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
