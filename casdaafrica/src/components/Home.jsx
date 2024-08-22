import { aboutimg } from '../assets'
import { SectionWrapper} from '../hoc'
import { styles } from '../style'

const About = () => {
  return (
    <section className='pt-8'>
      <div>
        <h1 className={`${styles.sectionHeadText} text-green-800 text-center`}>About Us</h1>
      </div>
    <div className='flex bg-white w-[100%] flex-wrap'>
      <div
        className="flex-[0.70] bg-black-100 bg-opacity-0 p-4 rounded-2xl">
          <img src= {aboutimg} alt="about" 
          className='border rounded-lg'
          />
        </div>

        <div
        className="flex-[0.30] bg-black-100 bg-opacity-0 p-4 rounded-2xl">
          <div>
            <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
            Cooperation Arena for Sustainable Development in Africa <span className='text-red-600'>(CASDA)</span> is an international NGO in Kenya with an aim of developing sustainability initiatives in energy, social services and collaborative business development.
            </p>
          </div>
        </div>
    </div>
    
    <div className='pt-8'>
      <div className={`${styles.sectionSubText}`}>
        <p>
        Kenya adopted the devolved system of governance in 2010 with a view to bringing governance closer to the people, with county governments being at the center of dispensing political, social and economic resources to Kenyans at the grassroots levels. The Principles that underpin devolution in the country are that County governments shall be based on democratic principles and  separation of powers; have reliable sources of revenue to enable them govern and deliver services effectively; and ensure no more than two-thirds of the members of representative bodies in each county government shall be of the same gender. 
        </p>
        <br />
      </div>

      <div  className={`${styles.sectionSubText}`}>
        <p>
        Specifically, the objects of devolution of government in Kenya were to promote democratic and accountable exercise of power, foster national unity by recognizing diversity, give powers of self-governance to the people and enhance the participation of the people in the exercise of the powers of the State and in making decisions affecting them, at local levels, and recognize the right of communities to manage their own affairs and further their development
        </p>
        <br />
        <p>
        Other pertinent intentions were to protect and promote the interests and rights of citizens, promote social and economic development and the provision of proximate, easily accessible services throughout the Country; ensure equitable sharing of national and local resources throughout the Country; facilitate the decentralization of State organs, their functions and services, from the capital; and enhance checks and balances and the separation of powers. To this end, various laws have been enacted by Parliament to create strategies, for implementation frameworks and processes which would enable counties realize the desired devolution objectives.
        </p>
        <br />
        <p>
        Devolution has presented a major transformation of the state and undoubtedly reversed the system of centralized control. It has now opened up the prospects of fundamental and progressive changes in both our politics and the economy. Through devolution, County Governments not only have the mandate and budgetary provisions to deliver services relevant to the local population but are also required by Law to involve the people in the planning process and service delivery. 
        </p>
        <br />
      </div>

      <div className={`${styles.sectionSubText}`}>
        <p>
        <span className='text-yellow-500 text-2xl font-bold'>So far,</span> CASDA has witnessed County-driven infrastructural development, development of markets; provision of water, enhancement of access to health care, creation of investments and trading blocs; promotion of leadership’ accountability in the utilization of funds; increased public-participation in the prioritization of key projects; and better access to information on both policy and operational issues.
        </p>
        <br />
        <p>
        However, fundamental challenges have continued to dog the Counties including low revenue collection levels from local sources; weak and uncoordinated planning and execution, stalled projects, inadequate financial  resources from national raised revenue share, corruption, misallocation of the available financial resources, over-indebtedness including bank overdrafts negotiated to off-set wages and salaries, huge pending bills, bloated workforce,  inadequate capacity and competencies at the county level to effectively and efficiently perform the devolved functions, engaging in activities that contravene the Public Finance Management Act and most importantly also, the lack of an effective association to synergize and promote effective service delivery efforts, provide lobbying, advocacy and networking support at the regional and international levels to enable Counties exchange information and good practices. 
        </p>
        <br />
        <p className='text-white'>
        CASDA’s vital role is partnering of local governments in Kenya with Municipalities in Sweden that actively provides activities and programmes that  offer knowledge transfer, bridge existing gaps by  offering solutions that strengthen local democracy, governance and improve their effectiveness and efficiency in service delivery, promote citizen participation with a focus on women, youth and marginalized groups and ultimately eradicate poverty.
        </p>
      </div>
    </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')