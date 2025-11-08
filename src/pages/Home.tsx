function Home() {
  return (
    <div className="home-page">
      <img
        src="/example-home-bg.jpg"
        alt="Jungianeum background"
        className="home-image"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
}

export default Home;
