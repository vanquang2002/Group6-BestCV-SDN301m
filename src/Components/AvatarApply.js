import { useEffect, useMemo, useState } from "react";
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';

function AvatarApply({ display, imgSrc }) {

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        // Open avatar apply
        const avatar = document.getElementById('avatar-apply');
        if (display === -1) {
            avatar.style.display = 'flex';
            avatar.style.flexDirection = 'column';
            avatar.style.alignItems = 'center';
        } else {
            avatar.style.display = 'none';
        }

        // Close avatar apply
        const closeBtn = document.getElementById('close-button');
        closeBtn.addEventListener('click', () => {
            avatar.style.display = 'none';
        });

        // upload avatar
        document.getElementById('upload-avatar').addEventListener('click', function uploadAvatar() {
            const uploadInput = document.getElementById('uploads');
            uploadInput.click();
        });


    }, [display]);


    function each(arr, callback) {
        var length = arr.length;
        var i;

        for (i = 0; i < length; i++) {
            callback.call(arr, arr[i], i, arr);
        }

        return arr;
    }

    function processInputImage(event) {
        const file = event.target.files[0];
        const uploadContainer = document.getElementById('upload-container');
        const image = document.getElementById('avatar');
        if (uploadContainer) {
            uploadContainer.style.display = 'block'
            document.getElementById('upload-avatar').style.display = 'none';
            // Preview the image (optional)
            image.src = URL.createObjectURL(file);
        }

        // Cropper
        const previews = document.querySelectorAll('.preview');
        var previewReady = false;

        const cropper = new Cropper(image, {
            aspectRatio: 3 / 4,
            viewMode: 3,
            minContainerHeight: 400,
            minContainerWidth: 450,
            responsive: true,

            ready: function () {
                var clone = this.cloneNode();

                clone.className = '';
                clone.style.cssText = (
                    'display: block;' +
                    'width: 100%;' +
                    'min-width: 0;' +
                    'min-height: 0;' +
                    'max-width: none;' +
                    'max-height: none;'
                );

                each(previews, function (elem) {
                    elem.appendChild(clone.cloneNode());
                });
                previewReady = true;
                //Set Avatar
                setAvatar(cropper.getCroppedCanvas().toDataURL('image/jpeg'));
            },

            crop: function (event) {
                if (!previewReady) {
                    return;
                }

                var data = event.detail;
                var cropper = this.cropper;
                var imageData = cropper.getImageData();
                var previewAspectRatio = data.width / data.height;

                each(previews, function (elem) {
                    var previewImage = elem.getElementsByTagName('img').item(0);
                    var previewWidth = elem.offsetWidth;
                    var previewHeight = previewWidth / previewAspectRatio;
                    var imageScaledRatio = data.width / previewWidth;

                    elem.style.height = previewHeight + 'px';
                    previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px';
                    previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px';
                    previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px';
                    previewImage.style.marginTop = -data.y / imageScaledRatio + 'px';
                });
            },

        });

    };


    return (
        <div className=" absolute bg-[#bbbfbc] bg-opacity-25 left-0 top-0 right-0 bottom-0" id="avatar-apply">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="w-[75%] h-auto lg:w-[50%]  lg:h-[50%] bg-white rounded-md p-3">
                <div className="h-auto border-b-2 py-2"><span className="mx-3 font-bold text-2xl">Cập nhật ảnh đại diện</span></div>
                <div className="flex overflow-hidden">
                    <div className="text-center container">
                        <span className="text-lg">Ảnh gốc</span>
                        <input className="hidden" type="file" id="uploads" accept="image/png, image/jpeg, image/gif, image/jpg" onChange={(e) => processInputImage(e)} />
                        <img src="upload.png" className="bg-[#f0f1f5ff]  rounded-md border-1 border-black border-dashed object-cover" id="upload-avatar" />
                        <div className="w-[200px] h-[400px] hidden " id="upload-container">
                            <img className="w-[400px] h-[400px] bg-[#f0f1f5ff]  rounded-md border-1 border-black border-dashed object-cover max-w-full block" id="avatar" />
                        </div>
                    </div>
                    <div className=" text-center">
                        <span className="text-lg">Ảnh hiển thị trên CV</span>
                        <div className="w-[150px] h-[200px] lg:w-[300px] lg:h-[400px] rounded-md border-1 border-black border-dashed"><div className="preview overflow-hidden"></div></div>
                    </div>
                </div>
                <div className="h-auto border-t-2 py-2 flex justify-center mt-[1%]">
                    <button className="bg-[#edededff] p-2 m-2 rounded-md" id="close-button">Đóng lại</button>
                    <button className="bg-green-400 p-2 m-2 rounded-md text-white">Hoàn tất</button>
                </div>
            </div>
        </div>
    )
}

export default AvatarApply;