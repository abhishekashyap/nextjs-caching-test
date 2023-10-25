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
  const queryParam = context.params.id;
  const res = await fetch(`http://localhost:3009/${queryParam}`);
  const repo = await res.json();
  return { props: { repo } };
};

const Index = ({ repo }) => {
  console.log("repo: ", repo);

  const handleOnClick = async () => {
    if (window) {
      const prompt = window.prompt(
        "Enter the query param you want to revalidate"
      );
      await fetch("/api/revalidate?secret=supersecret", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ url: `/places/${prompt}` }),
      });
    }
  };

  return (
    <div>
      <h1>Index page: {repo}</h1>
      <button onClick={handleOnClick}>Revalidate cache</button>
    </div>
  );
};

export default Index;
