import { Helmet } from "react-helmet-async"

const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://bishnuprasadkhanal.com.np/#person",
        name: "Bishnu Prasad Khanal",
        alternateName: [
          "Bishnu Khanal",
          "Bishnu Prasad",
          "BPK Developer",
          "Bishnu Nepal Developer",
          "Laravel Developer Bishnu",
        ],
        jobTitle: [
          "Laravel Developer",
          "Software Developer",
          "Full-Stack Developer",
          "PHP Developer",
          "Web Developer",
          "Nepal Laravel Developer",
          "Laravel Developer in Nepal",
        ],
        description:
          "Expert Laravel Developer and Software Developer from Nepal. Bishnu Prasad Khanal specializes in PHP Laravel development, full-stack web applications, e-commerce solutions, and modern software development. Top Laravel developer in Nepal with 2.5+ years experience.",
        url: "https://bishnuprasadkhanal.com.np",
        image: {
          "@type": "ImageObject",
          url: "https://bishnuprasadkhanal.com.np/images/bishnu-prasad-khanal-laravel-developer.jpg",
          width: 800,
          height: 800,
        },
        email: "khanalbishnu333@gmail.com",
        telephone: "+977-9868642250",
        birthDate: "2000-02-25",
        gender: "Male",
        nationality: "Nepali",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gwarko",
          addressLocality: "Lalitpur",
          addressRegion: "Bagmati Province",
          postalCode: "44700",
          addressCountry: "Nepal",
        },
        sameAs: [
          "https://github.com/KhanalBishnu",
          "https://www.linkedin.com/in/bishnu-prasad-khanal",
          "https://www.facebook.com/bishnuprd.khanal",
          "https://twitter.com/bishnukhanal",
          "https://www.youtube.com/channel/UC5x0zOTjT6hvozdc1BK1XsQ",
        ],
        knowsAbout: [
          "Laravel Development",
          "PHP Programming",
          "Software Development",
          "Full-Stack Development",
          "React Development",
          "JavaScript Programming",
          "MySQL Database",
          "E-commerce Development",
          "CRM Development",
          "API Development",
          "Payment Gateway Integration",
          "Web Application Development",
          "Nepal Software Development",
          "Laravel Framework",
          "Modern Web Technologies",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Laravel Developer",
          occupationLocation: {
            "@type": "City",
            name: "Lalitpur, Nepal",
          },
          skills: [
            "Laravel",
            "PHP",
            "React",
            "JavaScript",
            "MySQL",
            "Tailwind CSS",
            "Git",
            "Docker",
            "AWS",
            "Payment Gateways",
          ],
        },
        worksFor: {
          "@type": "Organization",
          name: "App Technologies Pvt. Ltd",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Nepal",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://bishnuprasadkhanal.com.np/#website",
        url: "https://bishnuprasadkhanal.com.np",
        name: "Bishnu Prasad Khanal - Laravel Developer Nepal",
        description: "Portfolio of Bishnu Prasad Khanal, Expert Laravel Developer and Software Developer from Nepal",
        publisher: {
          "@id": "https://bishnuprasadkhanal.com.np/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://bishnuprasadkhanal.com.np/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://bishnuprasadkhanal.com.np/#service",
        name: "Laravel Development Services Nepal",
        description:
          "Professional Laravel development services by Bishnu Prasad Khanal. Expert Laravel developer in Nepal offering custom web application development, e-commerce solutions, CRM systems, and full-stack development services.",
        provider: {
          "@id": "https://bishnuprasadkhanal.com.np/#person",
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Nepal",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        serviceType: [
          "Laravel Development",
          "PHP Development",
          "Software Development",
          "Full-Stack Development",
          "E-commerce Development",
          "CRM Development",
          "API Development",
          "Web Application Development",
        ],
      },
    ],
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Bishnu Prasad Khanal | Expert Laravel Developer Nepal | Software Developer | PHP Specialist</title>
      <meta
        name="title"
        content="Bishnu Prasad Khanal | Expert Laravel Developer Nepal | Software Developer | PHP Specialist"
      />
      <meta
        name="description"
        content="🚀 Bishnu Prasad Khanal - Expert Laravel Developer and Software Developer from Nepal. Specializing in PHP Laravel development, full-stack web applications, e-commerce solutions. Top Laravel developer in Nepal with 2.5+ years experience. Available for freelance projects worldwide."
      />
      <meta
        name="keywords"
        content="Bishnu, Bishnu Prasad, Bishnu Prasad Khanal, Laravel Developer, Software Developer, Nepal Developer, Nepal Laravel Developer, Laravel Developer in Nepal, PHP Developer Nepal, Full-Stack Developer Nepal, Web Developer Nepal, Bishnu Khanal Laravel, Laravel Expert Nepal, Software Engineer Nepal, PHP Laravel Nepal, React Developer Nepal, JavaScript Developer Nepal, E-commerce Developer Nepal, CRM Developer Nepal, API Developer Nepal, Freelance Developer Nepal, Nepal Software Development, Laravel Framework Nepal, Modern Web Development Nepal, Bishnu Developer, BPK Developer"
      />
      <meta name="author" content="Bishnu Prasad Khanal" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://bishnuprasadkhanal.com.np/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bishnuprasadkhanal.com.np/" />
      <meta property="og:title" content="Bishnu Prasad Khanal | Expert Laravel Developer Nepal | Software Developer" />
      <meta
        property="og:description"
        content="🚀 Bishnu Prasad Khanal - Expert Laravel Developer and Software Developer from Nepal. Top Laravel developer in Nepal specializing in PHP, full-stack development, e-commerce solutions. 2.5+ years experience."
      />
      <meta property="og:image" content="https://bishnuprasadkhanal.com.np/images/bishnu-prasad-khanal-og.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bishnu Prasad Khanal - Laravel Developer Nepal" />
      <meta property="og:site_name" content="Bishnu Prasad Khanal Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://bishnuprasadkhanal.com.np/" />
      <meta property="twitter:title" content="Bishnu Prasad Khanal | Laravel Developer Nepal" />
      <meta
        property="twitter:description"
        content="🚀 Expert Laravel Developer and Software Developer from Nepal. Bishnu Prasad Khanal specializes in PHP Laravel development and modern web applications."
      />
      <meta
        property="twitter:image"
        content="https://bishnuprasadkhanal.com.np/images/bishnu-prasad-khanal-twitter.jpg"
      />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="NP-03" />
      <meta name="geo.placename" content="Lalitpur, Nepal" />
      <meta name="geo.position" content="27.6588;85.3247" />
      <meta name="ICBM" content="27.6588, 85.3247" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//facebook.com" />

      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#00ff88" />
      <meta name="msapplication-TileColor" content="#00ff88" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  )
}

export default SEOHead
