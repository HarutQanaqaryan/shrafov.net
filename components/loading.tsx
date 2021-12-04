import Image from 'next/image';
import spiner from "../img/spinner.svg"
const Loading = () => {
    return (
        <div className="loading">
        <Image src={spiner} alt="Spinner Icon" width="100px" height="100px" />
        <div className="loading_text">Загрузка</div>
        </div>
    )
}

export default Loading;