import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  buttons: {
    align: 'center',
    margin: '30px'
  },
  icon: {
    marginRight: '20px'
  }
}))

export const Main = styled.div`
  /* background-color: #dc965a; */
`

export const Header = styled.div`
  background-color: #242325;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  margin: auto;
  height: 4rem;
  text-align: center;
  align-items: center;
  font-size: 35px;
  font-weight: 600;
  background-image: linear-gradient(to left, #c8c8c8, #bbb891);
  background-color: #242325;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
` 

export const Button = styled.button`
  margin-top: 2rem;
  display: inline-block;
  padding: 0.5em 3em;
  border: 0.16em solid #fff;
  &:hover {
    color: #fff;
    background-color: #242325;
  }
`