import axios from 'axios';

const isLogedIn = () => {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("Auth");

    if (token) {
      const backendApiUrl = "https://instagram-backend-y55a.onrender.com";
      axios
        .get(`${backendApiUrl}/profile`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log("response", res.data);
          resolve();
        })
        .catch((err) => {
          console.log("error", err);
          reject();
        });
    } else {
      reject();
    }
  });
};

export default  isLogedIn; 
