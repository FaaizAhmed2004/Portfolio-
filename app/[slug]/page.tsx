import { notFound } from "next/navigation";
import { PortfolioPage } from "../../components/PortfolioPage";
import { About } from "../../sections/About";
import { Achievements } from "../../sections/Achievements";
import { Contact } from "../../sections/Contact";
import { Experience } from "../../sections/Experience";
import { Projects } from "../../sections/Projects";
import { Services } from "../../sections/Services";
import { Skills } from "../../sections/Skills";
import { TechStack } from "../../sections/TechStack";
import { Testimonials } from "../../sections/Testimonials";

const pageRegistry: Record<string, { component: React.ComponentType }> = {
  about: { component: About },
  experience: { component: Experience },
  skills: { component: Skills },
  projects: { component: Projects },
  services: { component: Services },
  contact: { component: Contact },
  achievements: { component: Achievements },
  testimonials: { component: Testimonials },
  "tech-stack": { component: TechStack },
};

export function generateStaticParams() {
  return Object.keys(pageRegistry).map((slug) => ({ slug }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pageRegistry[slug];

  if (!page) {
    notFound();
  }

  const Component = page.component;

  return (
    <PortfolioPage>
      <Component />
    </PortfolioPage>
  );
}
