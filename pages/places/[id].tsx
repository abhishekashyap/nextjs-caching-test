// export const getServerSideProps = async (context) => {
//   const queryParam = context.query.id;
//   const res = await fetch(`http://localhost:3009/${queryParam}`);
//   const repo = await res.json();
//   return { props: { repo } };
// };

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: "blocking",
  };
}

export const getStaticProps = async (context) => {
  const queryParam = context.query.id;
  const res = await fetch(`http://localhost:3009/${queryParam}`);
  const repo = await res.json();
  return { props: { repo } };
};

const Index = ({ repo }) => {
  console.log("repo: ", repo);
  return <div>Index page: {repo}</div>;
};

export default Index;
