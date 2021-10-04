import "./modal.style.css"

export default function Modal({counter}) {
    return (
        <>
            <p>Game over 🏁</p>
            <p>Your points: {counter} 🎈</p>
        </>
    )
}