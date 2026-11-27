import PageHeader from "../../components/common/PageHeader";
import Gallery from "../../components/common/Gallery";
import { galleryImages } from "../../data/siteData";

export default function GalleryPage() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="Gallery"
        title="A look at the site."
        description={`${galleryImages.length} views of the site, roads, and boundary — updated as construction and site photography progress.`}
      />
      <Gallery />
    </div>
  );
}