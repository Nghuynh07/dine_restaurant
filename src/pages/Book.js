import React from "react";
import BookHeader from "../components/BookHeader";
import Form from "../components/Form";
import Footer from "../components/Footer";
const Book = () => {
  return (
    <div className='book'>
      <BookHeader />
      <Form />
      <Footer />
    </div>
  );
};

export default Book;
