export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3009/");
  const data = await res.json();
  return { props: { message: data.message } };
};

const Index = ({ message }) => {
  return <div>NextJS 12 App {message}</div>;
};

export default Index;
