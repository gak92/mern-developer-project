import React, { useEffect } from 'react';

const About = () => {

  const callAboutPage = async () => {
    try {
      console.log("==================");
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      console.log("==================");
      console.log(res);


      const data = await res.json();
      console.log("DATA:", data);

      if(res.status !== 200) {
        //throw new Error(res.error);
        console.log(res.error);
      }
    }
    catch(err) {
      console.log("Error (front): ", err);
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div>About</div>
  )
}

export default About;