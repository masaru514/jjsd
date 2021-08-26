import { Box } from '@material-ui/core';
import { format } from "date-fns"
import { utcToZonedTime } from "date-fns-tz"

function App(): JSX.Element {
  const today = new Date()
  const test = new Date('2021-08-31')
  console.log(test)
  const t = today.getDate()
  const jstDate = utcToZonedTime(today, 'Asia/Tokyo')
  const time = format(jstDate, 'yyyy/MM/dd HH:mm:ss')
  console.log(t)
  return (
    <div className="App">
      {time}
      </div>
  );
}

export default App;
