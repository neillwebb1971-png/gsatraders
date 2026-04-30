import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  placeholder?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  rounded?: boolean;
}

export default function ImageGallery({
  images,
  columns = 3,
  rounded = true,
}: ImageGalleryProps) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4`}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`relative aspect-[4/3] overflow-hidden bg-[#EBF5FB] ${rounded ? "rounded-2xl" : ""}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
