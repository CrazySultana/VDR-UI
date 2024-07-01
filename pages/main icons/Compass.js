  import React, { useState, useEffect } from "react";
  import { useGeolocated } from "react-geolocated";
  import backgroundImage from '../../assets/main_icons/background.png'

  import './style.css';

  export default function CipherCompass() {
    const {
      coords,
      isGeolocationAvailable,
      isGeolocationEnabled,
    } = useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

    const [pointDegree, setPointDegree] = useState(0);
    const [compassCircleTransformStyle, setCompassCircleTransform] = useState(
      "translate(-50%, -50%) rotate(0deg)"
    );
    const [myPointStyle, setMypointStyle] = useState(0);

    const locationHandler = (coords) => {
      const { latitude, longitude } = coords;
      const resP = calcDegreeToPoint(latitude, longitude);
      if (resP < 0) {
        setPointDegree(resP + 360);
      } else {
        setPointDegree(resP);
      }
    };

    useEffect(() => {
      if (!isGeolocationAvailable) {
        alert("Your browser does not support Geolocation");
      } else if (!isGeolocationEnabled) {
        alert(
          "Geolocation is not enabled, Please allow the location check your setting"
        );
      } else if (coords) {
        locationHandler(coords);
      }
    }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

    const isIOS = () => {
      return (
        navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
        navigator.userAgent.match(/AppleWebKit/)
      );
    };

    const calcDegreeToPoint = (latitude, longitude) => {
      // Replace with your desired point coordinates
      const point = {
        lat: 21.422487,
        lng: 39.826206,
      };

      const phiK = (point.lat * Math.PI) / 180.0;
      const lambdaK = (point.lng * Math.PI) / 180.0;
      const phi = (latitude * Math.PI) / 180.0;
      const lambda = (longitude * Math.PI) / 180.0;
      const psi =
        (180.0 / Math.PI) *
        Math.atan2(
          Math.sin(lambdaK - lambda),
          Math.cos(phi) * Math.tan(phiK) -
            Math.sin(phi) * Math.cos(lambdaK - lambda)
        );
      return Math.round(psi);
    };

    const startCompass = async () => {
      const checkIos = isIOS();
      if (checkIos) {
        DeviceOrientationEvent.requestPermission()
          .then((response) => {
            if (response === "granted") {
              window.addEventListener("deviceorientation", handler, true);
            } else {
              alert("Permission denied!");
            }
          })
          .catch(() => alert("Permission request not supported"));
      } else {
        window.addEventListener("deviceorientationabsolute", handler, true);
      }
    };

    const handler = (e) => {
      const compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      const compassCircleTransform = `translate(-50%, -50%) rotate(${-compass}deg)`;
      setCompassCircleTransform(compassCircleTransform);

      // Adjust the threshold as needed
      const threshold = 150;
      if (
        (pointDegree < Math.abs(compass) &&
          pointDegree + threshold > Math.abs(compass)) ||
        pointDegree > Math.abs(compass + threshold) ||
        pointDegree < Math.abs(compass)
      ) {
        setMypointStyle(0);
      } else {
        setMypointStyle(1);
      }
    };

    return (
      <div
      className=" text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% 100%', // Stretches the image to fit the container
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        borderRadius: '8px',
      }}
    >
      <div className='flex justify-center'>
      <div className="App mt-40 bg-white pt-16 pb-16 w-fit pl-16 pr-16">
        {/* <div>myPointStyle: {myPointStyle}</div>
        <div>pointDegree: {pointDegree}</div>
        <div>Latitude: {coords?.latitude}</div>
        <div className="pb-20">Longitude: {coords?.longitude}</div> */}
        <div className="compass">
          <div className="arrow" />
          <div
            className="compass-circle"
            style={{ transform: compassCircleTransformStyle }}
          />
          <div className="my-point" style={{ opacity: myPointStyle }} />
        </div>
        <button className="start-btn" onClick={startCompass}>
          Start compass
        </button>
      </div>
      </div>
      </div>
    );
  }
