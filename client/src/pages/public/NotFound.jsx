import { Link } from "react-router";
import PageHeader from "../../components/common/PageHeader";

export default function NotFound() {
  return (
    <div className="pb-20">
      <PageHeader
        eyebrow="404"
        title="Page not found."
        description="The page you are looking for doesn't exist or has moved."
      >
        <Link
          to="/"
          className="inline-block rounded-full bg-forest-950 px-6 py-3 font-display text-sm font-semibold text-white hover:bg-forest-700 transition-colors"
        >
          Back to Home
        </Link>
      </PageHeader>
    </div>
  );
}
