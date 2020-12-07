import React from "react";
import { GalleryLayout } from "./GalleryLayout";
import Gallery from "../Components/Gallery/Gallery";
import { Portfolio } from "../assets/portfolio";
import ImageGallery from "react-image-gallery";
import "./styles/Gallery.css";

export const GalleryPage = props => {
    const [images, setImages] = React.useState([]);
    const [openGallery, setOpenGallery] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const openGalleryHandler = (id, i) => {
        window.scrollTo(0, 0);
        const ImagesObj = Portfolio[id];
        let images = [];
        if (ImagesObj && Object.keys(ImagesObj).length) {
            for (let key in ImagesObj) {
                images.push({
                    original: ImagesObj[key],
                    thumbnail: ImagesObj[key]
                });
            }
            setImages(images);
            setOpenGallery(true);
            setIndex(i);
        }
    };
    return (
        <>
            <GalleryLayout openGallery={openGallery}>
                {openGallery && (
                    <div className="Backdrop">
                        <div className="FlexEnd">
                            <i
                                onClick={() => setOpenGallery(false)}
                                class="fa fa-times-circle"
                            ></i>
                        </div>
                        <ImageGallery
                            startIndex={index}
                            items={images}
                            showPlayButton={false}
                        />
                    </div>
                )}
                <Gallery {...props} openGallery={openGalleryHandler} />
            </GalleryLayout>
        </>
    );
};
