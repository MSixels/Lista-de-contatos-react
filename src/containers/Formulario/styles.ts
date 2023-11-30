import styled from 'styled-components'
import { Botao } from '../../styles/components/Contato/styles'
import variaveis from '../../styles/variaveis'

export const Titulo = styled.p`
  margin-bottom: 16px;
  margin-left: 40px;
  font-weight: bold;
  color: #ff7675;
  font-size: 40px;
`

export const Campo = styled.input`
  padding: 16px;
  background-color: #ffeaa7;
  border-radius: 8px;
  font-weight: bold;
  color: #ff7675;
  border-color: #ff7675;
  margin-left: 40px;
  width: 50%;
  margin-bottom: 16px;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
`

export const Opcoes = styled.div`
  margin-bottom: 16px;
  margin-left: 40px;

  label {
    margin-right: 16px;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.amarelo};
  margin-left: 40px;
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
