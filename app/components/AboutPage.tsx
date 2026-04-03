"use client";

import Footer from "./Footer";

type Page =
  | "home"
  | "about"
  | "services"
  | "corporates"
  | "academic"
  | "donors"
  | "government"
  | "contact";

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <div className="about-hero">
        <div className="about-hero-inner">
          <div className="section-label" style={{ color: "var(--mint)" }}>
            About Oakvale Learning
          </div>
          <h1>
            We exist to change lives through{" "}
            <em style={{ fontStyle: "italic", color: "var(--mint)" }}>
              learning and self-discovery.
            </em>
          </h1>
          <p>
            Oakvale Learning is a specialist workforce, leadership and
            organisational development consultancy. We work with organisations
            across Africa to design and deliver learning that creates lasting,
            systemic change.
          </p>
        </div>
      </div>

      <section style={{ background: "var(--cream)", padding: "6rem 8%" }}>
        <div
          style={{
            display: "flex", 
            gap: "6rem",
            alignItems: "start",
          }}
        >
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Born in health and social care. <em>Built for everywhere.</em>
            </h2>
            <div
              style={{
                marginTop: "2rem",
                color: "var(--mid-grey)",
                fontSize: "0.95rem",
                lineHeight: "1.85",
                fontWeight: 300,
              }}
            >
              <p style={{ marginBottom: "1.5rem" }}>
                Oakvale Learning grew out of more than a decade of workforce
                development work in health and social care — one of the most
                demanding, highest-stakes sectors in the world. The rigour,
                contextual sensitivity and commitment to real-world outcomes
                that this sector demands became the foundation of everything we
                do.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                We recognised that the quality of learning available to African
                workforces was not keeping pace with the ambition of the
                organisations and people we were working with. Too much of what
                passed for &ldquo;training&rdquo; was generic, extractive and
                disconnected from real-world application.
              </p>
              <p>
                We set out to do something different: high-quality, globally
                relevant learning, designed from the ground up for African
                realities, delivered with the rigour of the sectors where the
                stakes are highest.
              </p>
            </div>
          </div>
          <div className="w-full bg-forest-mid/10 p-6 rounded-lg" style={{maxWidth: "400px", height: "400px", background: "url(/female_health_professional.png) no-repeat center/cover"}}>

          </div>
        </div>
      </section>

      <div className="people">
        <div>
          <div className="section-label">Our Team</div>
          <h2 className="section-title">
            The people behind <em>Oakvale Learning</em>
          </h2>
        </div>
        <div className="people-grid">
          {[
            {
              initials: "OL",
              name: "Founder & CEO",
              title: "Founder & Chief Executive",
              bio: "Over 15 years leading workforce development programmes across Africa, with deep expertise in health systems strengthening and large-scale skills programmes.",
            },
            {
              initials: "OL",
              name: "Director of Programmes",
              title: "Director of Programmes",
              bio: "Specialist in curriculum design and organisational learning, with a background spanning university education and corporate L&D across West and East Africa.",
            },
            {
              initials: "OL",
              name: "Head of Technology",
              title: "Head of Technology & Digital Learning",
              bio: "Expert in digital learning infrastructure and content development, with a focus on low-bandwidth solutions for dispersed workforces.",
            },
          ].map((p, i) => (
            <div className="person-card" key={i}>
              <div className="person-photo">
                <img
                  src="https://plus.unsplash.com/premium_photo-1745624797647-37ddb5c77b65?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="photo"
                />
                <div className="person-photo-label">Photo Coming Soon</div>
              </div>
              <div className="person-info">
                <div className="person-name">{p.name}</div>
                <div className="person-title">{p.title}</div>
                {/* <div className="person-bio">{p.bio}</div> */}
                <a className="person-link placeholder">LinkedIn →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="advisory">
        <div className="">
          <div className="section-label">Advisory Board</div>
          <h2 className="section-title">
            Guided by <em>experience and expertise</em>
          </h2>
        </div>
        <div className="advisory-grid">
          {[
            {
              name: "Advisory Board Member",
              title: "Health Systems | West Africa",
              bio: "Senior figure in health systems strengthening, with 20+ years advising governments and development agencies across Sub-Saharan Africa.",
            },
            {
              name: "Advisory Board Member",
              title: "Corporate Leadership | East Africa",
              bio: "Former CEO of a major East African conglomerate, with expertise in organisational transformation and leadership development at scale.",
            },
            {
              name: "Advisory Board Member",
              title: "Academic & Policy | Global",
              bio: "Professor of Education Policy with extensive research and advisory experience across African university systems and skills development policy.",
            },
          ].map((a, i) => (
            <div className="advisor-card" key={i}>
              <div className="advisor-photo">
                <img
                  src="https://images.unsplash.com/photo-1613876215075-276fd62c89a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${a.name} photo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />
                <div className="advisor-photo-label">Photo Coming Soon</div>
              </div>
              <div className="advisor-info">
                <div className="advisor-name">{a.name}</div>
                <div className="advisor-title">{a.title}</div>
                <div className="advisor-bio">{a.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta">
        <div className="cta-inner">
          <h2>Interested in working with us?</h2>
          <p>
            We work with a small number of institutional partners at any one
            time. If you are working on something that aligns with our
            expertise, we would like to hear from you.
          </p>
          <div className="cta-actions">
            <button
              className="btn-primary-dark"
              onClick={() => onNavigate("contact")}
            >
              Get in touch
            </button>
            <button
              className="btn-outline-dark"
              onClick={() => onNavigate("services")}
            >
              Our services
            </button>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
