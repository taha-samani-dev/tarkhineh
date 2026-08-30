 // * options:{
 // * width?: number
 // * height?: number
 // * quality?: number
 // * crop?: "fill" | "fit" | "scale"
 // * format?: "auto" | "webp" | "jpg" | "png"
 // * }

export function getImageUrl(publicId, options) {
    const CloudName = process.env.NEXT_PUBLIC_CLOUD_NAME
    const ImageCloud = process.env.NEXT_PUBLIC_IMAGE_CLOUD
    const {
        width,
        height,
        quality = 80,
        crop = "fill",
        format = "auto",
    } = options

    const transformations = [
        width && `w_${width}`,
        height && `h_${height}`,
        crop && `c_${crop}`,
        quality && `q_${quality}`,
        format && `f_${format}`,
    ]
        .filter(Boolean)
        .join(",")
    if(ImageCloud==="yes"){
        return `https://res.cloudinary.com/${CloudName}/image/upload/${transformations}/tarkhineh${publicId}`
    }
    else{
        return `${publicId}`
    }
}
