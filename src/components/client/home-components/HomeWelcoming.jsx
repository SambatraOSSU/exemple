const HomeWelcoming = () => {
  return (
    <section id="client-home__welcoming">
      <div className="header">
        <div className="title">
          <h1>
            A la recherche de la qualité? Choisissez <span>Easy-invet</span>
          </h1>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            consectetur corrupti consequatur{" "}
          </p>
        </div>
        <div className="button">
          <button className="btn">Découvrir</button>
        </div>
      </div>
      <div className="image">
        <img src="/image-welcoming.png" alt="" />
      </div>
    </section>
  );
};

export default HomeWelcoming;
