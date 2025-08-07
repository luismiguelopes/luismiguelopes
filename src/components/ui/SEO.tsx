import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Luís Miguel Lopes - Data Analyst Coordinator & Full-Stack Developer',
  description = 'Experienced Data Analyst Coordinator skilled in transforming complex data into actionable insights and leading cross-functional teams. Passionate about building web applications with Laravel and WordPress.',
  keywords = 'data analyst, full-stack developer, Laravel, PHP, Python, Power BI, web development, automation, DevOps, Portugal',
  image = '/images/luismiguelopes.png',
  url = 'https://luismiguelopes.com',
  type = 'website'
}: SEOProps) => {
  const siteTitle = title.includes('Luís Miguel Lopes') ? title : `${title} | Luís Miguel Lopes`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Luís Miguel Lopes" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Luís Miguel Lopes Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@luismiguelopes" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Luís Miguel Lopes",
          "jobTitle": "Data Analyst Coordinator & Full-Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/luismiguelopes",
            "https://www.linkedin.com/in/luismiguelopes/"
          ],
          "knowsAbout": [
            "Data Analysis",
            "Full-Stack Development",
            "Laravel",
            "PHP",
            "Python",
            "Power BI",
            "DevOps",
            "Web Development"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;