import React, { useState } from "react";
import Select from "../../pieces/Select/Select";
import Input from "../../pieces/Input/Input";
import ErrorMessage from "../../pieces/ErrorMessage/ErrorMessage";
import axios from "axios";
import "./Form.css";

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [meetingPoint, setMeetingPoint] = useState("Restaurant");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("DSA");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

  // Format the date to be compatible with the date input element
  const formattedOneMonthFromNow = oneMonthFromNow.toISOString().split("T")[0];

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleMeetingPointChange = (event) => {
    setMeetingPoint(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value, 10));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    // Ensure the selected time is within the range of 10:00 to 20:00
    if (selectedTime >= "10:00" && selectedTime <= "20:00") {
      setTime(selectedTime);
    } else {
      // If the selected time is outside the range, set it to the minimum value (10:00)
      setTime("10:00");
    }
  };

  const placeSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setError(false); // Reset the error state before each submit
      setErrorMessage("");

      const response = await axios.post("http://localhost:5000/api", {
        fullName,
        date: date.toString(),
        time: time.toString(),
        place: meetingPoint,
        subject,
        numOfPeople: numberOfPeople,
        message,
        emailForm: email,
      });

      console.log(response.data); // Display the response data from the backend

      // Clear the form fields after successful submission
      setFullName("");
      setMeetingPoint("Restaurant");
      setDate("");
      setTime("");
      setSubject("DSA");
      setNumberOfPeople(1);
      setEmail("");
      setMessage("");
    } catch (error) {
      setError(true);
      if (error.response) {
        setErrorMessage(error.response.data.message); // Display backend error message if available
      } else if (error.message) {
        setErrorMessage(error.message); // Display general network error message
      } else {
        setErrorMessage("An unknown error occurred. Please try again."); // Display a generic error message
      }
    }
  };

  return (
    <div className="booking-form-container">
      <form onSubmit={placeSubmitHandler}>
        <div className="full-name-form">
          <label>
            Full Name <span>*</span>
            <Input
              name="full-name"
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
        </div>
        <div className="email-form">
          <label>
            Email <span>*</span>
            <Input
              name="emailForm"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div className="date-and-time--booking">
          <div className="date-sub">
            <label htmlFor="date-booking">
              Date <span>*</span>
            </label>
            <Input
              value={date}
              onChange={handleDateChange}
              name="date-booking"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              max={formattedOneMonthFromNow}
            />
          </div>
          <div className="time-sub">
            <label htmlFor="time-booking">
              Time <span>*</span>
            </label>
            <Input
              value={time}
              onChange={handleTimeChange}
              name="time-booking"
              type="time"
              min="10:00"
              max="20:00"
            />
          </div>
        </div>
        <label>
          Meeting Point <span>*</span>
          <select value={meetingPoint} onChange={handleMeetingPointChange}>
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
            <option value="University">University</option>
          </select>
        </label>
        <label>
          Subject <span>*</span>
          <select value={subject} onChange={handleSubjectChange}>
            <option value="DSA">Data Structures and Algorithms</option>
            <option value="Programming Language">Programming Language</option>
            <option value="Coursework">Coursework</option>
            <option value="other">other</option>
          </select>
        </label>
        {error && (
          <ErrorMessage
            onClick={() => setError(false)}
            message={errorMessage}
          />
        )}
        <label>
          Number of People <span>*</span>
          <select
            type="number"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Write a message with your booking..."
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
