import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shri Mata Vaishno Devi University</h4>
                <h5>B.Tech, Computer Science and Engineering</h5>
              </div>
              <h3>2022-Present</h3>
            </div>
            <p>
              Current CGPA: 7.0. Building strong foundations in software
              development, AI/ML, and systems design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Ethara.AI</h4>
                <h5>LLM Post-Training Intern (Generative AI) - Remote</h5>
              </div>
              <h3>Jan 2026-Present</h3>
            </div>
            <p>
              Orchestrating LLM post-training workflows using SFT and RLHF,
              engineering high-quality human-aligned datasets and curation
              pipelines, and running HITL evaluation and benchmarking to improve
              alignment, reliability, response accuracy, and complex reasoning
              performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Industrial Trainee - Larsen &amp; Toubro (L&amp;T)</h4>
                <h5>Patna, Bihar</h5>
              </div>
              <h3>May 2025</h3>
            </div>
            <p>
              Completed hands-on training at the 6-Lane Ganga Bridge Project,
              focused on technology and safety integration in large-scale
              infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern - SMVDSB and NIT Patna</h4>
                <h5>Katra, J&amp;K and Patna, Bihar</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Worked on RFID-based visitor flow automation and built a proof-of-
              concept health prediction web app integrated with hospital data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications and Leadership</h4>
                <h5>NPTEL, Microsoft, Cisco, AWS Academy</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Active in event management, hostel committee, PR and photography,
              chess club, NSS, and creative teams; represented SMVDU at AVIMAS
              river rafting course.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
