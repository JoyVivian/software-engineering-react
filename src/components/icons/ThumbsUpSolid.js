import {useState} from "react";

const SvgThumbsUpSolid = (props) => {
  const [fillColor, setFillColor] = useState("#808080");
  const handleClick = () => 
  fillColor === "#808080" ? setFillColor("#0000FF") : setFillColor("#808080")
 
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path onClick={handleClick} fill={fillColor} stroke="#000000" d="M128 447.1v-224c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.7 1.8 32-11.7 32-30.2zm384-223c0-26.5-21.48-47.98-48-47.98H317.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6l-16.3 13c-11.8 9.5-17.8 23.4-17.9 37.4-.023.023 0 0 0 0l-.1 160c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98 0-3.635-.48-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
  </svg>
  );
}


export default SvgThumbsUpSolid;
