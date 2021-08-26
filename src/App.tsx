import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { format } from "date-fns"
import ja from 'date-fns/locale/ja'

function App(): JSX.Element {
  // 2週間を取得
  const twoWeeks = Array.from({length: 14}, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    const [year, month, date, day] = format(d, 'yyyy MM dd eee', { locale: ja }).split(' ')
    return {
      year,
      month,
      date,
      day
    }
  })

  // timeline とりあえずの時間を設定
  const time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

  // dateが存在すれば可能とする
  // memo: このへんの要件を少し考えたい + タイムラインとの同期をしないと使い勝手が悪い
  const isAbleReservation = (date: string) => {
    if(date) return '○'
    return '✗'
  }

  return (
    <div className="App">
      <Box>
        {twoWeeks.map(i =>
          <div key={i.date}>{i.date}</div>
        )}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row" />
                {twoWeeks.map(({ month, date }) =>
                  <TableCell>{month}.{date}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {time.map((row) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  {
                    twoWeeks.map((i, index) =>
                      <TableCell key={i.date}>{isAbleReservation(i.date)}</TableCell>
                    )
                  }
                  {/*
                  <TableCell align="right">{row}</TableCell>
                  <TableCell align="right">{row}</TableCell>
                  <TableCell align="right">{row}</TableCell>
                  <TableCell align="right">{row}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}

export default App;
