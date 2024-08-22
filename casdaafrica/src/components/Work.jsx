import { approach, work } from "../assets"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"

const Work = () => {
  return (
    <section className="container">
    <div className=" text-center">
        <h1 className={`${styles.sectionHeadText}`}>Our Work</h1>
        <div className=" w-full flex p-4 gap-2 " >
        <div className="w-[65%]" >
        <img 
        src={work}
        className="border-none rounded-lg"
        />
        </div>
        <div className="w-[35%]">
            <p className={`${styles.sectionSubText}`}><span className="font-bold">Sustainable Development</span> is not just a global responsibility but also a collective effort that starts at the grassroots level. Local communities play a vital role in driving sustainable development initiatives, as they are intimately connected to the natural resources, social fabric, and economic well-being of their regions. Empowering local communities to actively participate in and lead sustainable development efforts is essential for achieving long-term environmental, social, and economic goals</p>
        </div>
        </div>
        <div>
            <p className={`${styles.sectionSubText}`}><span className="text-yellow-600">CASDA</span> plays a vital role in the collaboration and partnership projects with municipalities in Sweden, empowering local communities, discussing key strategies for fostering community engagement, and highlighting inspiring examples of sustainable development initiatives driven by empowered communities.</p>
            <br />
        </div>
        <div className={`${styles.sectionSubText} flex flex-col gap-4`}>
            <p>
                CASDA’s activities are centred on building private, public and multilateral partnerships, collaborations and good will to generate the know-how between Africa and the rest of the world.
            </p>
        </div>
        <br />
        <div className="w-[70%] items-center  flex text-center">
        <ol className={`${styles.heroSubText} text-3xl font-semibold`}>
                <li>1. Project Coordination that creates an enabling environment for parties involved in a particular project to work together without necessarily meeting physically, offers expertise in resource mobilization, projects development, monitoring and evaluation and risk assessment.</li>
                <li>2. International research in exploring innovative practical ideas on global challenges with the aim of promoting co-operations, partnerships, public participation and awareness in the international arena as a means of fostering international order, peaceful co-existence and prosperity towards a sustainable society.</li>
                <li>3. Facilitate co-operation between the general public, governments and international community towards promoting and enhancing sustainable development projects.</li>
                <li>4. Gender Equality and Sustainability that aims not only to empower the women but also to contribute to the broader goals of environmental sustainability and social resilience through the following activities:-</li>
                <br />
                <p className={`${styles.heroSubText} italic`}>- Women's Empowerment and Sustainable Agriculture, Clean Energy Access for Women, Gender-Inclusive Water and Sanitation Programs, Gender-Responsive Climate Change Adaptation, Women-Led Sustainable Entrepreneurship and Holistic care and support for Sexual and Gender Based Violence victims.</p>
            </ol>
        </div>
    </div>
    <br />
    <div>
        <div className="text-center">
            <h1 className="font-bold text-2xl text-secondary">Our Approach</h1>
        </div>
        <div className="w-full flex p-4 gap-4  ">
            <div className="w-[50%] ">
                <p className={`${styles.heroSubText}`}>
                Emerging issues within the Counties include the need for better planning, strengthened performance management framework, strengthened  public participation in  identification, planning and execution of activities , improved democracy and governance frameworks to facilitate good leadership, Improved and transparent public financial management and accountability, institutional capacity building, equality and inclusivity challenges, strengthening of the monitoring, evaluation and reporting framework; enhanced strategic alliances and partnerships, and benchmarking with best-case examples  both locally and globally. 
                </p>
            </div>
            <div className="w-[50%]">
                <img 
                src={approach}
                className="border-none rounded-lg w-full"
                />
            </div>
        </div>
        <div className="bg-green-100 mt-4 border-none rounded-2xl p-2">
            <div className={`${styles.heroSubText}`}>
                <p>1. <span className="font-bold text-yellow-700">Ownership and Relevance:</span> Local governments and communities have a deep understanding of their unique needs, challenges, and opportunities. Empowering them to take charge of sustainable development initiatives ensures that solutions are context-specific, relevant, and address the specific issues faced by the community.</p>
                <p>2. <span className="font-bold text-yellow-700">Bottom-up Approach:</span> Empowering local governments and communities encourages a bottom-up approach to decision-making and problem-solving. By involving community members in the planning, implementation, and monitoring of sustainable development projects, initiatives are more likely to be effective, sustainable, and embraced by the community.</p>
                <p>3. <span className="font-bold text-yellow-700">Building Social Capital:</span> Empowering local governments and communities fosters social cohesion, trust, and collaboration among community members. By working together towards a common goal, communities develop social capital, which strengthens their ability to address challenges, share resources, and collectively pursue sustainable development.</p>
            </div>
        </div>
        <div className="mt-4">
            <div className=''>
                <h1 className="text-center font-bold text-3xl text-secondary">
                CASDA employs the following Strategies for Empowering Local governments and Communities:
                </h1>
                <br/>
            </div>
            <div className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
                <p>
                1. <span className="font-bold text-xl text-green-700">Education and Awareness:</span> Providing education and raising awareness about sustainable development principles, practices, and benefits is crucial for empowering local governments and communities. Workshops, training programs, and community outreach activities that equip community members with the knowledge and skills needed to participate actively in sustainable development initiatives.
                </p>
                <br />
                <p>
                2. <span className="font-bold text-xl text-green-700">Capacity Building:</span> Enhancing the capacity of local governments and communities involves providing them with the tools, resources, and training necessary to take leadership roles in sustainable development. This includes training in project management, financial literacy, sustainable agriculture techniques, renewable energy technologies, and other relevant skills.
                </p>
                <br/>
                <p>
                    3. <span className="font-bold text-xl text-green-700">Collaboration and Partnerships:</span> Collaboration between local communities, governments, non-governmental organizations, businesses, and academic institutions is essential for empowering communities and driving sustainable development. Partnerships can provide access to expertise, funding, and resources, enabling communities to implement and scale up their initiatives effectively.
                </p>
                <br/>
                <p>
                4. <span className="font-bold text-xl text-green-700">Access to Information and Technology:</span> Access to information and technology that empowers local governments and communities to make informed decisions and leverage innovative solutions. Providing communities with access to reliable information, data, and technology platforms enables them to monitor their progress, identify areas for improvement, and access market opportunities.
                </p>
                <br/>
            </div>
        </div>
        <div className="mt-2 border-none text-center bg-green-100 font-bold underline italic rounded-xl">
            <p className={styles.heroSubText}>
             Empowering local governments and communities for sustainable development is a crucial step towards achieving global sustainability goals. By recognizing the knowledge, agency, and potential within the local governments and communities, we strive to foster inclusive and participatory approaches to address environmental challenges, improve social well-being, and promote economic prosperity. Through education, capacity building, collaboration, and access to information and technology, both local governments and communities becomes agents of change, leading the way towards a more sustainable and resilient future.
            </p>
        </div>
    </div>
    </section>
  ) 
}

export default SectionWrapper(Work, 'work')