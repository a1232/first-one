import React, { useState } from "react";
import Image from "../../resources/images/coffee.jpeg";
import Image2 from "../../resources/images/c3.jpg";
import Image3 from "../../resources/images/sales.jpeg";
import "./banner.css";

function Banner() {
  const [Images, setImages] = useState([
    {
      title: "image 1",
      image: Image,
    },
    {
      title: "image 2",
      image: Image2,
    },
    {
      title: "image 3",
      image: Image3,
    },
  ]);
  const [Index, setIndex] = useState(0);
  // next images
  const next = (i) => {
    if (i === Images.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
  };
  const prev = (i) => {
    if (i === 0) {
      setIndex(Images.length - 1);
    } else {
      setIndex(i - 1);
    }
  };

  return (
    <div className="title">
      {Images.map((val, i) => {
        if (i === Index) {
          return (
            <div
              key={i}
              className="banner_data bg-green-400"
              style={{
                contain: "",
                content: "",
                // backgroundImage: `url(${val.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "750px",
              }}
            >
              <div className="btn">
                <div className="buttonnext" onClick={() => next(i)}>
                  next
                </div>
                {val.title}

                <div className="buttonprev" onClick={() => prev(i)}>
                  prev
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
export default Banner;
