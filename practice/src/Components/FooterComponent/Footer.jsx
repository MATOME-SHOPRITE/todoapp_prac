import React from "react";
import "./FooterStyles.css"


function Footer(){


    var year = new Date().getFullYear()


    return <div>

        <footer>

            <p>© CopyRight {year}</p>


        </footer>

        
    </div>


}

export default Footer;