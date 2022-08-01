import { useState, useEffect } from "react";
import Loading from "./components/Loading"
import Tours from "./components/Tours"
import { Container } from '@mui/material';

function App() {

  const baseURI = 'https://course-api.com/react-tours-project'
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  //fetch data api
  const HandelToursData = async () => {
    try {
      const Response = await fetch(baseURI)
      const Data = await Response.json()
      setLoading(false)
      setTours(Data)
    } catch (err) {
      setLoading(false)
      console.log(err)

    }

  }
  useEffect(() => {
    HandelToursData()
  }, [])
  //delete item
  const DeleteItem = (itemid) => {
    const filterDelete = tours.filter((item) => item.id != itemid)
    setTours(filterDelete)
  }
  // return Data when click Refresh
  const RefreshData = () => {
    HandelToursData()
  }

  return (
    <Container maxWidth="sm">

      <main>
        {loading ? <Loading /> : <Tours tours={tours} DeleteItem={DeleteItem} />}
        {tours.length == 0 && <button className="delete-btn" onClick={RefreshData}>Refresh</button>}

      </main>
    </Container>

  );
}

export default App;
