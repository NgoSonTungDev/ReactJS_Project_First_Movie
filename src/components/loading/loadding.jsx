import "./loadding.css";
import React, { useEffect } from "react";


const Loadding = () => {
  //   function loading() {
  //     var loading = document.getElementById("loading");
  //     loading.style.display = "none";
  //   }
  
  useEffect(async () => {
      var loading = document.getElementById("loading");
      setTimeout(() => {
      loading.style.display = "none";
    }, 3300);
  }, []);

  return (
    <div class="anim-container" id="loading" >
      <span class="shutter top">
        <img
          src="https://image.freepik.com/free-vector/click-movie-logo-vector_18099-258.jpg"
          class="logo"
          alt=""
        />
      </span>
      <span class="shutter bottom"></span>
    </div>
  );
};

export default Loadding;
