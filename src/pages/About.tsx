function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Publisher Section */}
        <section className="about-section">
          <h2 className="about-section-title">Publisher</h2>
          <p className="about-text">Stefano Carpani</p>
        </section>

        <div className="about-divider"></div>

        {/* Imprints Section */}
        <section className="about-section">
          <h2 className="about-section-title">Imprints</h2>
          <p className="about-text">JUNGIANEUM is based in Berlin.</p>
          <p className="about-text">
            It publishes original works of nonfiction, literature, and art, and
            encompasses JUNGIANEUM and the ongoing art project Retyping a
            Library.
          </p>
        </section>

        <div className="about-divider"></div>

        {/* Distribution Section */}
        <section className="about-section">
          <h2 className="about-section-title">Distribution</h2>
          <p className="about-text">
            All our titles are available worldwide through Columbia University
            Press:
          </p>

          <div className="about-subsection">
            <h3 className="about-subsection-title">
              UK, Europe, Africa, Middle East, South Asia, South Africa, South
              America
            </h3>
            <p className="about-text">Wiley European Distribution Centre</p>
            <p className="about-text">New Era Estats</p>
            <p className="about-text">Bognor Regis</p>
            <p className="about-text">West Sussex PO 22 9SA</p>
          </div>

          <div className="about-subsection">
            <h3 className="about-subsection-title">USA</h3>
            <p className="about-text">Columbia University Press</p>
            <p className="about-text">61 West 62 Street</p>
            <p className="about-text">New York, NY 10023</p>
          </div>
        </section>

        <div className="about-divider"></div>

        {/* Sales Section */}
        <section className="about-section">
          <h2 className="about-section-title">Sales</h2>
          <p className="about-text">Catherine Hobbs</p>
          <p className="about-text">Columbia University Press</p>
          <p className="about-text">Sales Department</p>
          <p className="about-text">61 West 62nd Street</p>
          <p className="about-text">New York, NY 10023</p>
        </section>

        <div className="about-divider"></div>

        {/* Submissions Section */}
        <section className="about-section">
          <h2 className="about-section-title">Submissions</h2>
          <p className="about-text">
            We are happy to receive original nonfiction for consideration.
            Proposals should include a clear outline of the project's central
            idea, a table of contents, biographical information about the
            author(s), and an estimated writing timetable. Please use our
            contact form to get in touch.
          </p>
        </section>

        <div className="about-divider"></div>

        {/* Jobs Section */}
        <section className="about-section">
          <h2 className="about-section-title">Jobs</h2>
          <p className="about-text">There are no job openings at present.</p>
          <p className="about-text">We do not offer internships.</p>
        </section>

        <div className="about-divider"></div>

        {/* Copyright Section */}
        <section className="about-section">
          <h2 className="about-section-title">Copyright</h2>
          <p className="about-text">
            All copyright © 2025 the authors, artists, and editors. Unauthorized
            reproduction is prohibited. All images are reproduced courtesy of
            the artist unless otherwise specified.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
