import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 8, 6, 0),
    overflow: 'scroll'
  },
  title: {
    padding: '15px 0 0 15px'
  },
  button: {
    position: 'sticky'
  }
}))

export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`

export const Table = styled.table`
  width: 100%;
  justify-content: center;
  overflow-x: scroll;
`