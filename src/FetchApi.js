import {useState} from 'react';
import axios from 'axios';
function FetchApi()
{

    const [data,setData]=useState([])

  const handleClick=()=>
  {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>
      {
        setData(response.data)
      })
      .catch(error=>
        {
          this.setData(error);
        })
  }

  return (
    <div>
      <center>
        <button onClick={handleClick}>Fetch API </button>
      </center>
      <table border={1} width="100%">
        <thead>
          <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
            {
              data.map(data=>
                {
                  return <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                          </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}
export default FetchApi;
