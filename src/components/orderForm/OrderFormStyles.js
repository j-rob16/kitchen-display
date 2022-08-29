import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 8, 6, 0)
  },
  title: {
    padding: '15px 0 0 15px'
  }
}))

export const FormTitle = styled.h2`
  padding-left: 1rem;
  padding-top: 1rem;
  margin: 0;
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 10px;
  /* background-color: #b3b3b3; */
  border-radius: 10px;
  border: 0.5px solid grey;
`

export const SubmitButton = styled.input`
  display: inline-block;
  padding: 0.5em 3em;
  border: 0.16em solid #fff;
  &:hover {
    color: #fff;
    background-color: #242325;
  }
`