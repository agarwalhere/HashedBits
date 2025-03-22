
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception", image: "/images/inception.jpg" },
  { id: 2, title: "Interstellar", image: "/images/interstellar.jpg" },
  { id: 3, title: "The Dark Knight", image: "/images/dark_knight.jpg" },
  { id: 4, title: "Avengers: Endgame", image: "/images/avengers.jpg" },
  { id: 5, title: "Joker", image: "/images/joker.jpg" },
  { id: 6, title: "Parasite", image: "/images/parasite.jpg" },
  { id: 7, title: "Titanic", image: "/images/titanic.jpg" },
  { id: 8, title: "Shawshank Redemption", image: "/images/shawshank.jpg" }
];


const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  padding: "20px"
};

const cardStyle = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
  borderRadius: "8px"
};

const imageStyle = {
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "8px"
};

const MovieList = () => (
  <div style={gridStyle}>
    {movies.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id} style={cardStyle}>
        <img src={movie.image} alt={movie.title} style={imageStyle} />
        <h3>{movie.title}</h3>
      </Link>
    ))}
  </div>
);

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <img src={movie.image} alt={movie.title} style={{ width: "50%", borderRadius: "8px" }} />
      <h2>{movie.title}</h2>
      <button onClick={() => navigate(`/book/${id}`)} style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>Book Seat</button>
    </div>
  );
};

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = uuidv4().slice(0, 8);
    navigate(`/confirmation/${bookingId}`, { state: formData });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Book Seat</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} style={{ display: "block", margin: "10px auto", padding: "8px" }} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} style={{ display: "block", margin: "10px auto", padding: "8px" }} />
        <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} style={{ display: "block", margin: "10px auto", padding: "8px" }} />
        <button type="submit" style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
};

const ConfirmationScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const formData = location.state || { name: "", email: "", mobile: "" };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: <strong>{id}</strong></p>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Mobile:</strong> {formData.mobile}</p>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation/:id" element={<ConfirmationScreen />} />
    </Routes>
  </Router>
);

export default function MovieBooking() {
    return <App />;
  }
  
