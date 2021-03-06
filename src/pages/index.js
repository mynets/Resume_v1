import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} {config.email} ·   
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
          <p className="lead mb-5">
          Goal driven, results oriented programmer with more than five years’ experience in developing complex
          software systems in a fast pace environment. Quick learner with advance research skills. Dynamic team player
          with well-developed written and verbal communication abilities.
          </p>
          <div className="social-icons">
           
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">FRONT DESK/ROVER</h3>
              <div className="subheading mb-3">FIRST SERVICE RESIDENTIAL</div>
              <p>
              • Nightly patrols of high rise condominium and townhomes
              • Daily written reports on all violation of law, company or guard regulations learned of or witnessed  
              • Answer calls and assist residents with the scheduling of amenities 
              • Verify all vehicles on premise have barcode and decal stickers.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 – Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SOFTWARE DEVELOPER</h3>
              <div className="subheading mb-3">MOORE LLC</div>
              <p>
              • Designed various Web forms Using React, Reactstrap, JS and HTML
              • Developed backend Java SpringBoot Microservices that connect to NoSql databases
              • Built, set up and managed web servers using Amazon Web Services
              • Discovery of customer’s critical business issues and requirements and designing solutions to meet the requirements
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2016 – Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">CONTINUED EDUCATION</h3>
              <p>
              • Relocated to Tulsa, OK from New York, NY
              • Practiced programming and working on personal projects
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2013 – August 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SOFTWARE DEVELOPER</h3>
              <div className="subheading mb-3">INTERNATIONAL BIOMETRIC GROUP</div>
              <p>
              • Conducted market research on commercially available biometric systems to compare current market
                competitors and to determine market standards
              • Provided clients with web access to biometric programs using Java Server Pages.
              • Presented new discoveries in the biometric industries to prospective clients
              • Performed Data mining and fact verification in MySQL databases
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2012 – July 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">SOFTWARE DEVELOPER</h3>
              <div className="subheading mb-3">RESEARCH FOUNDATION OF CUNY</div>
              <p>
              • Implemented GUI to display real time data generated by traveling robots
              • Created a communication program using Java that allowed search and rescue robots to converse
              collectively which significantly decreased the amount of time taken to find victims and drastically
              increased rescue response time
              • Designed, configured and tested software tools for pattern matching and visualization
              • Presented progress on search and rescue robots at several international conferences to gain support
              and funding for further research
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2009 – August 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Oral Roberts University</h3>
              <div className="subheading mb-3">Masters of Divinity</div>
              
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2016</span>
            </div>
          </div>  
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">City University of New York - Lehman College</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2011</span>
            </div>
          </div>
          
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Infrastructure as code
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Continuous Integration/Continuous Delivery
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            When I'm not coding, I'm usually spending time with my family.
            My son was born in August 2020. He gives me great joy. The events
            of the past year have made engaging in outdoor activites more challenging.
            However, I still find a way to get some sun playing tennis or biking with the family.
          </p>
          <p className="mb-0">
            When I get time alone, I'm usually gaming or trying to learn something
            new. I love reading about current discoveries in the tech industry 
            and how they will shape the future of tomorrow.                      
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              AWS Certified Solutions Architect - Associate (SAA)
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
