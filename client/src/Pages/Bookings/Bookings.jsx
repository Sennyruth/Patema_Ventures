import "./Bookings.css"
import { useState,useEffect } from "react"
import { apiUrl } from "../../utils/config.js"

function Bookings() {
  const [bookings, setBookings] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
   
    try {
      const response = await fetch(`${apiUrl}/api/user/SpecificBooking`,{
        method: 'GET',
          credentials:'include'
          });
          const data = await response.json();
          if (data.success === true){
            console.log(data.data)
            setBookings(data.data);
            setLoading(false)
          }
          else
          {
            setError(true)
            setLoading(false)
            }
      
    } catch (error) {
      setError(error);
      setLoading(false)
      
    }
  };
  fetchData();
  }, []);
  if (loading){
    return <div>Loading...</div>;
  }
  else if (error){
    return <div>Error: {error.message}</div>;
    }
 
  
  return (
    <div>

      <h1>View Bookings</h1>
      <table>
        <thead>
        <tr>
          <th> UserID</th>
          <th> ID</th>
          <th> Date</th>
          <th> Location</th>
          <th> Phone</th>
          <th>service</th>
        </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
        
          
          <td>{booking.userId}</td>
          <td>{booking.id}</td>
          <td>{booking.date}</td>
          <td>{booking.location}</td>
          <td>{booking.number}</td>
          <td>{booking.service}</td>
        </tr>
        ))}
        </tbody>
       
       
      </table>

    </div>
  );
}

export default Bookings;
