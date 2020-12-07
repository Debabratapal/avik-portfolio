import React from "react";
import "./Gallery.css";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import { Portfolio } from "../../assets/portfolio";

class Gallery extends React.Component {
    state = {
        images: [[], [], []]
    };
    id = null;

    componentDidMount() {
        this.loadImages();
    }

    loadImages = id => {
        this.id = id || this.props.match.params.id;
        const ImagesObj = Portfolio[this.id];
        let stateImage = [[], [], []];
        let images = [];
        if (ImagesObj && Object.keys(ImagesObj).length) {
            for (let key in ImagesObj) {
                images.push(key);
            }
            for (let i = 0; i < images.length; i++) {
                let index = i % 3;
                stateImage[index].push({
                    image: images[i],
                    index: i
                });
            }
        }
        this.setState({ images: stateImage });
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.loadImages(nextProps.match.params.id);
        }
    }

    openGallery = index => {
        this.props.openGallery(this.id, index);
    };

    render() {
        const { images } = this.state;

        return (
            <div className="container-fluid">
                {images.map((image, index) => (
                    <div className="col" key={index}>
                        {image.map((el, i) => (
                            <div
                                key={i}
                                className="col-md-4 img-gal"
                                onClick={() => this.openGallery(el.index)}
                            >
                                <ProgressiveImage
                                    preview={Portfolio[this.id][el.image]}
                                    image={Portfolio[this.id][el.image]}
                                    key={i}
                                    alt={el.path}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Gallery;
