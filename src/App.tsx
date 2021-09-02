import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles } from '@material-ui/core';
import { format } from "date-fns"
import ja from 'date-fns/locale/ja'
import data from './assets/dummyData'

const useStyles = makeStyles({
  paper: {
    maxWidth: 1000,
  },
  root: {
    tableLayout: 'fixed',
    maxWidth: 1000
  },
  row: {
    display: 'table-row',
  },
  tableRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  emptyCell: {
    width: '68px'
  },
  datePick: {
    padding: 0,
  },
  datePickTableCell: {
    textAlign: 'center',
    borderBottom: 'none',
    width: '200px'
  },
  emptyCellTime: {
    padding: 0,
    width: '68px',
  },
  tableTimeCols: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  tableCols: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  tableHeaderRowMonths: {
    padding: '12px 20px',
  },
  tableHeaderRowDates: {
    padding: '12px',
    textAlign: 'center',
  }
})

function App(): JSX.Element {
  const classes = useStyles()
  // 2週間を取得
  const twoWeeks = Array.from({length: 14}, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)

    // memo:eee 曜日
    const fullDate = format(d, 'yyyy MM dd', { locale: ja })
    const [year, month, date, day] = fullDate.split(' ')
    return {
      year,
      month,
      date,
      day,
      fullDate
    }
  })

  // timeline とりあえずの時間を設定
  const time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

  // dateが存在すれば可能とする
  // memo: このへんの要件を少し考えたい + タイムラインとの同期をしないと使い勝手が悪い
  const isAbleReservation = (date: number) => {
    if(date === 3) return '×'
    if (date === 2) return '△'
    if (date === 1 || date === 0) return '○'
    return 'エラー'
  }

  // 現在表示されている"日にち"の中で重複している月数の計算を行う。
  const numberOfMonths = twoWeeks.reduce((acc, cur) => {
    if(!acc[cur.month]) {
      acc[cur.month] = 1
      return acc
    }
    acc[cur.month] += 1
    return acc
  }, {} as { [key: string]: number})

  return (
    <div className="App">
        <TableContainer component={Paper} className={classes.paper}>
          <Table aria-label="simple table" className={classes.root}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.emptyCell} />
                {Object.keys(numberOfMonths).map(month =>
                <TableCell component="th" colSpan={numberOfMonths[month]} className={classes.tableHeaderRowMonths}>{month}</TableCell>
                )}
              </TableRow>

              <TableRow>
                <TableCell className={classes.emptyCell} />
                {twoWeeks.map(({ date }) =>
                  <TableCell className={classes.tableHeaderRowDates}>
                      {date}
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.row}>
                <TableCell className={classes.emptyCellTime}>
                  {time.map((col) => (
                    <TableRow key={col}>
                      <TableCell>
                        {col}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                {/* 日付個数分並ぶ */}
                {
                  data.map(obj => (
                    <TableCell className={classes.datePick}>
                      {obj.timeTable.map(i => (
                        <TableRow className={classes.tableRow}>
                          <TableCell className={classes.datePickTableCell}>
                            {isAbleReservation(i.list.length)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableCell>
                  ))
                }

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default App;
