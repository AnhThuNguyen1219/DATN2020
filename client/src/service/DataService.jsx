import React, { useState } from "react";
import axios from "axios";
const addFavourBook =async (userID, bookID) => {
  var token = localStorage.getItem("accessToken");
  

  return await axios({
    method:"post",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',

      'Authorization': `Bearer ${token}`,
    },
    url: "http://localhost:9000/api/favourite",
    data: {
      'user_id': userID,
      'book_id': ''+bookID
    },
  })
    .then(function (response) {
      return response.status
    })
    .catch(function (error) {
      let status = error.response;
      return status;
    });
};

const addReviewBook = async (userID, bookID, rating, rate_review)=>{
  var token = localStorage.getItem("accessToken");
  

  return await axios({
    method:"post",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',

      'Authorization': `Bearer ${token}`,
    },
    url: "http://localhost:9000/api/review",
    data: {
      'user_id': userID,
      'book_id': ''+bookID,
      'rating':''+rating,
      'rate_review':rate_review
    },
  })
    .then(function (response) {
      return response.status
    })
    .catch(function (error) {
      let status = error.response.status;
      return status;
    });
}
export{addFavourBook, addReviewBook} ;