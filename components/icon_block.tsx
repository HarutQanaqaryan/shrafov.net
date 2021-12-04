import Image from 'next/image';
import iconSh from "../styles/sh.png"

const IconBlock = () => {
    return  (
        <div className="header">
            <div className="header_icon"><Image src={iconSh} alt="header icon" className="header-icon_sh"/></div>
            <span className="header_title">ШТРАФОВ <span className="icon_title_no">НЕТ</span></span>
        </div>
    )
}

export default IconBlock;