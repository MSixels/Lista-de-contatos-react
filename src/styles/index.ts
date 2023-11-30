import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #ff7675;
  border: 1px solid #ff7675;
  margin-left: 40px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
