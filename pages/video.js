import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";


export default function Video(){
    const contexto = React.useContext(ColorModeContext);

    return(
        <div>
            <span>lugar de video!  {contexto.mode}  </span>
           
            <button onClick={() => contexto.toggleMode()}>
                Trocar cor
            </button>
        </div>
    )
}