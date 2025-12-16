import { Box } from "@mui/material";
import {
  getProjectsPageData,
  getProjectsPageSEO,
} from "@/src/lib/api/projects";
import { ProjectsClient } from "@/src/components/Projects/ProjectsClient";
import type { Locale } from "@/i18n";
import type { Metadata } from "next";
import { WhyChooseUs } from "@/src/components/Home/WhyChooseUs";
import { getHomePageData } from "@/src/lib/api/home";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = await getProjectsPageSEO(locale);

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const data = await getProjectsPageData(locale);
  const homePageData = await getHomePageData(locale as Locale);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          minHeight: "100vh",
          m: { xs: 2, md: 3 },
        }}
      >
        <ProjectsClient data={data} locale={locale as Locale} />
      </Box>
      <WhyChooseUs data={homePageData?.whyChooseUs} />
    </>
  );
}
