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

  // 日にちのうちの１日の情報をオブジェクトで持つ
  const obj = {
    // １日の日付
    date: twoWeeks[0],
    // 各時間毎にどういうデータを持っているかという情報を知りたい。
    // 10:00 0件~3件データが入っているか、など。 しかしこのデータ自体は上限幅だけを決める形にしたいとおもう。
    timeTable: [
      // 1オブジェクトが10:00, 11:00...で同期
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
      {
        list: [
          {
            name: 'masaruです'
          },
          {
            name: 'ふじこです。'
          },
          {
            name: 'まさおです;'
          }
        ]
      },
    ]
  }
  console.log(obj.date)

  // const test = () => {

  // }

  return (
    <div className="App">
      <Box>
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
                    {row}aa
                  </TableCell>
                  {
                    twoWeeks.map((i, index) =>
                      <TableCell align="center" key={i.date} />
                    )
                  }
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
