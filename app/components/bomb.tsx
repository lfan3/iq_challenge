import style from "./styles.module.css"

const Bomb: React.FC = () => {
    return (
        <div className={style.bomb}>
            <div className={style.fuse}></div>
            <div className={style.body}>
                <div className={style.top}></div>
                <div className={style.middle}></div>
                <div className={style.bottom}></div>
            </div>
        </div>
    )
}

export default Bomb