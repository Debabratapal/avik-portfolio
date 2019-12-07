import React from 'react';
import { GalleryLayout } from './GalleryLayout';
import Gallery from '../Components/Gallery/Gallery';

export const GalleryPage = props => (
    <GalleryLayout>
        <Gallery {...props} />
    </GalleryLayout>
)
