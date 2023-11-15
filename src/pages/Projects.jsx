import { Link } from 'react-router-dom';
import {projects} from '../constants'
import { arrow } from '../assets/icons';
import CTA from '../components/CTA'
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
        {""}
        💻
      </h1>

     
        <p className='text-slate-500 mt-2 leading-relaxed'>
          Over the years, I've undertaken numerous projects, but the ones that
          are particularly dear to me are a select few. A significant number of
          these projects are open-source, so if you encounter something that
          captures your interest, don't hesitate to delve into the codebase and
          share your ideas for potential improvements. Your collaboration is
          greatly appreciated!
        </p>
      

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img 
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />

      <div className="mt-10 ">
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
