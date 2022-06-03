import { Helmet } from "react-helmet";

function MyHelmet() {
  return (
    <Helmet>
      <title>Homebody</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300&family=Playfair+Display:wght@700&family=Poppins:wght@300;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default MyHelmet;
