import { useEffect } from "react";
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css'
function Crop() {

    useEffect(() => {
        //Cropper 
        const image = document.getElementById('image');
        const cropper = new Cropper(image, {
            aspectRatio: 0,
            viewMode: 0,
            crop(event) {
                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
            },
        });
    }, [])

    return (
        <div>
            <div className="container">
                <div>
                    <img src="file-upload.png" className="max-w-full" id="image"/>
                </div>
            </div>
        </div>
    )
}

export default Crop;