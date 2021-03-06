import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
// import {Link} from 'react-router-dom';
import Photos from "./imageSource";
import "./Gallery.css";

function GalleryCard() {

  const [model, setModel] = React.useState(false);
  const [tempimgUrl, setTempimgUrl] = React.useState(' ');

  const getImage = (imageUrl) => {
    // console.log(imageUrl);
    setTempimgUrl(imageUrl);
    setModel(true)
  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgUrl} alt=" "/>
        <MDBBtn className="icon" color="danger" onClick={() => setModel(false)}><MDBIcon icon="times" /></MDBBtn>
      </div>
      <div>
        <h3 style={{ textAlign: "right" }}>2022</h3>
        <hr></hr>
        <div className="gallery">
          {Photos.map((val, key) => {
            return (
              <div>
                {val.year === 2022 &&
                  <div className="pics" key={key} onClick={() => getImage(val.imageUrl)}>
                  <img
                   src={val.imageUrl}
                   alt={" "}
                   style={{ width: "100%" }}
                 />
                </div>
                }
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: "right" }}>2021</h3>
        <hr></hr>
        <div className="gallery">
          {Photos.map((val, key) => {
            return (
              <div>
                {val.year === 2021 &&
                  <div className="pics" key={key} onClick={() => getImage(val.imageUrl)}>
                  <img
                   src={val.imageUrl}
                   alt={" "}
                   style={{ width: "100%" }}
                 />
                </div>
                }
              </div>
              
            );
          })}
        </div>
      </div>

      <div>
        <h3 style={{ textAlign: "right" }}>2020</h3>
        <hr></hr>
        <div className="gallery">
          {Photos.map((val, key) => {
            return (
              <div>
                {val.year === 2020 &&
                  <div className="pics" key={key} onClick={() => getImage(val.imageUrl)}>
                  <img
                   src={val.imageUrl}
                   alt={" "}
                   style={{ width: "100%" }}
                 />
                </div>
                }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function Gallery() {
  return (
    <div className="container">
      <div className="card shadow">
        <div className="card-body">
          <h2>Gallery Page</h2>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className="card-body">
          <GalleryCard />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
