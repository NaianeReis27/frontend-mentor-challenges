import { Card } from "./styles"
export const CardComponent = () => {
    return (
        <Card>
            <figure>
                <img src="qr-code.png"></img>
            </figure>
            <div className="text">
                <h3>Improve your front-end skills by building projects</h3>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </Card>
    )
}