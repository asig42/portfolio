import { useEffect } from "react";

function Input() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../src/component/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return;
}

export default Input;