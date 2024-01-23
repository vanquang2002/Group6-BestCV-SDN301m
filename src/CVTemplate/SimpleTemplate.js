import { useEffect, useRef, useState } from "react";
import AvatarApply from "../Components/AvatarApply";

function SimpleTemplate() {
    const[click, setClick] = useState(1);   
    const imgSrcRef = useRef();

    useEffect(() => {
        //Change page title
        document.title = "Viết CV online theo mẫu tinh gọn";
        //change page icon
        const link = document.querySelector("link[rel~='icon']");
        link.href = "logo-dragon.svg";
        // Change border color when click
        const elements = document.querySelectorAll('.element');
        elements.forEach(element => {
            element.addEventListener('click', () => {
                elements.forEach(element => {
                    element.style.borderColor = 'black';
                });
                element.style.borderColor = 'green';
            });
        });

        const avartar = document.getElementById('avartar');
        avartar.addEventListener('mouseover', () => {
            avartar.querySelector('button').classList.remove('hidden');
        });
        avartar.addEventListener('mouseout', () => {
            avartar.querySelector('button').classList.add('hidden');
        });
    }, [])


    function getImgSrc() {
        const img= imgSrcRef.current;
        if(img){
            return img.src
        }
        return null;
    }

    return (
        <div className="w-full  bg-[#f0eeeb] p-[5%] relative">
            <br />
            <br />
            <br />
            <div className="h-screen w-[50%] mx-[25%]  bg-white shadow-lg">
                <div className="element w-full h-[25%]">
                    <div className="element w-[25%] h-auto relative" id="avartar">
                        <img className="element w-auto h-auto border-1 border-black border-dotted  " src="avatar-icon.png" ref={imgSrcRef}/>
                        <button onClick={() => setClick(-click)} className="bg-green-800 px-3 py-1 rounded-md  z-20 font-bold text-white absolute bottom-0 left-[50%] translate-x-[-50%] hidden">Sửa ảnh</button>
                    </div>
                </div>
            </div>
            <AvatarApply display={click} imgSrc={getImgSrc()}/>
        </div>
    )
}

export default SimpleTemplate;