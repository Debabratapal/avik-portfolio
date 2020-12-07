import React from "react";
import Layout from "../Hoc/Layout";

export const GalleryLayout = props => {
    if (props.openGallery) {
        return <>{props.children}</>;
    }
    return <Layout>{props.children}</Layout>;
};
