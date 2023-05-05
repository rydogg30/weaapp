import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "/images/snowboard-1.jpg", width: 1600, height: 900 },
    { src: "/images/snowboard-2.jpg", width: 1600, height: 900 },
    { src: "/images/snowboard-3.jpeg", width: 1600, height: 900 },
    { src: "/images/snowboard-4.webp", width: 1600, height: 900 },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}