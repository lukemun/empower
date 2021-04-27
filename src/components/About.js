import { Link } from 'react-router-dom';
import slugify from '../utils/slugify';

import './about.css';

import Jane from './employees/jane';
import Lily from './employees/lily';
import Keith from './employees/keith';
import Mason from './employees/mason';
import Emma from './employees/emma';
import Noah from './employees/noah';

const employees = [Jane, Lily, Keith, Mason, Emma, Noah];

function About() {
  return (
    <div className="about-page">
      <div>
        <div className="about-info">
          <h1>About us</h1>
          <p>
            Empower Plant is an IoT company determined to keep house plants
            happy. After reading Michael Pollan’s 2013 New Yorker article (“The
            Intelligent Plant”), the wife-and-wife founding team invested their
            life savings in measuring and improving the emotional state of their
            leafy housemates. Seven years later, the company’s grown from its
            humble roots in the couples’ backyard greenhouse (converted from a
            garage) into a Series C-funded San Francisco startup and the world’s
            most accurate plant mood measurer (“a must-have for any responsible
            plant parent,” according to Plant Parenthood Magazine). Their
            original state-of-the-art product is a technological marvel built
            with a plant-first mindset, and they now offer a range of
            plant-centric options through the online store on their website.
          </p>
          <p>
            Today, the company employs 170 people (and 852 plants, according to
            the Empower Plant Careers page) in San Francisco, New York City,
            Denver, and Kiev. Generally speaking, employees at Empower Plant are
            happy, fulfilled, and thriving. (The founding team, however, is
            experiencing marital problems — an open secret that they’ve
            unsuccessfully tried to keep out of the workplace.)
          </p>
          <p>
            In the last week, however, everything seems to be going wrong with
            Empower Plant’s software. Glitches cause misreads on plant moods,
            causing users to accidentally mistreat their plant family members.
            The website’s malfunctioning, too, and the checkout button in the
            online store wasn’t working for a full day before anyone noticed.
          </p>
          <p>
            Basically, Empower Plant’s in a state of pure pandemonium. And
            someone’s gotta fix it.
          </p>
        </div>
      </div>
      <div>
        <ul className="employee-list">
          {employees.map((employee) => {
            return (
              <li key={employee.name}>
                <Link to={`/employee/${slugify(employee.url)}`}>
                  <img src={employee.img} alt={`${employee.name}`} />
                  <h5>{employee.name}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;
