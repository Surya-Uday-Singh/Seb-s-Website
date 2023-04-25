import React from 'react';
import $ from "jquery";
import  { useState , useEffect} from 'react';
import './Booking.css';

function Booking() {
  const [guests, setGuests] = useState(0);
  const [name, setName] = useState("");
  const [date, setDate] = useState("")
  const handleAddGuest = () => {
    if (guests < 10) {
      
      setGuests(guests + 1);
     
       }
  };

  const handleRemoveGuest = () => {
    if (guests > 0) {
      setGuests(guests - 1);

    }
  };

  
  
  
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleDate = (e) => {
      setDate(e.target.value);
    };
    
  
    const [guestList, setGuestList] = useState([]);

    const handleSumbit = (e) => {
      e.preventDefault();
      const form = $(e.target);
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
          
          sessionStorage.setItem('guestList', JSON.stringify([...guestList, data]));
    
          
          setGuestList((guestList) => [...guestList, data]);
        },
      });
    };
    useEffect(() => {
      const guestListFromStorage = sessionStorage.getItem('guestList');
      if (guestListFromStorage) {
        setGuestList(JSON.parse(guestListFromStorage));
      }
    }, []);
    
    
 
  return (
    <div>
    <div>
      <form method="POST" action="http://localhost:9000/guestList.php"
      onSubmit={(event) => handleSumbit(event)}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => handleName(event)} />

        <label for="guests">Number of Guests:</label>
        <button type="button" id="add-guest" onClick={handleAddGuest}>+</button>
        <input type="text" id="guests" name="guests" value={guests} readonly />
        <button type="button" id="remove-guest" onClick={handleRemoveGuest}>-</button>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={handleDate} />

        <button type="submit">Book now</button>
      </form>
      
    </div>
    <div>
    <table>
    <tr><td>Name</td><td>Number of Guests</td> <td>Date</td></tr>
        {guestList.map((guest) => (
      <tr key={guest} dangerouslySetInnerHTML={{ __html: guest }} />
        ))}
    </table>
  
    </div>
    </div>
  );
}


  
export default Booking;

