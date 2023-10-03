export async function generateMetadata() {
  // SEO DATA FETCH
  const res = await fetch(process.env.BASE_URL + 'api/SiteMeta/projects');
  const JSON = await res.json();
  return {
    title: JSON[0]['title'],
    description: JSON[0]['description'],
    keywords: JSON[0]['keywords'],
    oneGraph: {
      image: JSON[0]['image'],
    },
  };
}

export default function Error({ children }) {
  return <div>{children}</div>;
}
