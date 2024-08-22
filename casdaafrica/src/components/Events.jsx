import { last1, last2, last3, ninth, ninth2, ninth3, not1, not2, not3, not4, not5, not6, tunza, tunza2, tunza3, tunza4 } from '../assets'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'

const Events = () => {
  return (
    <section >
        <h1 className={`${styles.sectionHeadText} text-center`}>Events</h1>
        <div className='flex flex-row w-full gap-2 items-center justify-center'>
            <img
            src={not1}
            className='w-[405%] border-none rounded-xl '
             />
            <img 
            src={not2}
            className='w-[45%] border-none rounded-xl'
            />
            
        </div>
        <br />
        <div className='flex flex-row w-full gap-2 items-center justify-center'>
        <img 
        src={not3}
        className='w-[45%] border-none rounded-xl'
        />
        <div className='w-[50%] border-none'>
            <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
            <span className='text-yellow-600 underline'>#NotOurStory</span> project was a campaign against Gender Based Violence by identifying and developing media methods and tools for knowledge and awareness-raising.  
            </p>
        </div>
        </div>
        <br />
        <div className=' w-full flex gap-2'>
            <div className='w-[50%] flex items-center'>
                <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
                This was a collective call for stakeholders to act to ensure the next generation does not grow up in a world where Gender Based Violence (GBV) is the norm with the aim to create an inter-generational shift in the discussion and approach around GBV.  Eight countries, including seven African countries collaborated in this project; Kenya, Uganda, Tanzania, Ethiopia, Rwanda, Zambia and Somaliland.
                </p>
            </div>
            <img 
            src={not4}
            className='w-[31%] border-none rounded-xl'
            />
        </div>
        <div className='flex flex-row w-full gap-4 items-center justify-center pt-2 '>
        <img
            src={not5}
            className='w-[45%] border-none rounded-xl '
             />
            <img 
            src={not6}
            className='w-[45%] border-none rounded-xl'
            />
        </div>
        <div className='p-2'>
            <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
            The Tunis Forum on Gender Equality explored the potential transformative role of women participating in local spaces/local government, and other issues. It also provided a platform to explore the role of new trends in innovation and technology in encouraging women's economic empowerment.
            </p>
        </div>
        <br/>
        <div className='flex flex-row w-full gap-4 items-center justify-center pt-2 '>
        <img
            src={ninth}
            className='w-[45%] border-none rounded-xl '
             />
            <img 
            src={ninth2}
            className='w-[45%] border-none rounded-xl'
            />
        </div>
        <div className='p-2 w-full flex gap-4'>
            <div className='w-[50%] mt-3'>
            <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}>
            The 9th edition of Afri Cities was held in Kisumu under the theme “The role of intermediary cities of Africa in the implementation of the Agenda 2030 of the United Nations and the African Union Agenda 2063”
            </p>
            </div>
            <div className='w-[50%]'>
                <img 
                src={ninth3}
                className='rounded-xl w-[80%]'
                />
            </div>
        </div>
        <br />
        <div className=''>
            <h1 className="font-bold text-2xl underline text-secondary italic">
                Gender Equality Work
            </h1>
            <div className='w-full flex gap-2 mb-4'>
                <img 
                src={tunza}
                className='w-[65%]'
                />
                <img  
                src={tunza2}
                className='w-[30%] rounded-xl'
                />
            </div>
            <div className='w-full flex gap-6 mt-2'>
                <img 
                src={tunza4}
                className='w-[40%] h-[20%] rounded-xl'
                />
                <img  
                src={tunza3}
                className='w-[20%] rounded-xl'
                />
            </div>
        </div>
        <div className='mt-4'>
            <div className="bg-green-100 mt-4 border-none rounded-2xl p-2">
                <p className={`${styles.heroSubText} text-center italic border-none rounded-lg`}>
                Poverty remains a significant impediment to dignity, especially for girls and women in Kenya. CASDA AFRICA recognizes the urgent need to address the multifaceted challenges posed by poverty and its direct impact on the dignity of women and girls in Kisumu. “Tunza Hadhi Initiative Centre of Hope” is a community based organization founded under the Umbrella of CASDA Africa, is committed to building the capacity of rural communities in Kisumu and Western Kenya to effectively deal with the challenges facing children at risk, empowering and improving the lives of single teen mums, SGBV survivors and vulnerable women in Kisumu and Western Kenya, focusing on the following objectives:-
                </p>
            </div>
            <div className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg mt-4`}>
                <p>
                1.	<span className="font-bold text-xl text-green-700">Mentorship Programs:</span> THICH offers mentorship programs to young women and girls through the use grandmothers to provide guidance and support in emotional, life experiences, interpersonal skills, and cultural sensitivity.
                </p>
                <br/>
                <p>
                2.	<span className="font-bold text-xl text-green-700">Economic Empowerment:</span> THICH provides Life skills training such as communication, decision-making, problem-solving, and critical thinking to women and single teen mums then offers support to start small businesses to become financially independent.
                </p>
                <br/>
                <p>
                3.	<span className="font-bold text-xl text-green-700">Sheltering:</span> To provide a physically and psychologically safe space for abused women and children in Ojola, Kisumu.
                </p>
                <br/>
                <p>
                4.	<span className="font-bold text-xl text-green-700">Counseling:</span> To provide Mental Health awareness program, Depression, Post violence care, HIV Testing and Counseling.
                </p>
                <br/>
                <p>
                5.	<span className="font-bold text-xl text-green-700">Training and Capacity Building:</span> To equip the grandmothers with mentoring skills, effective communication techniques, and an understanding of the challenges faced by the mentees.
                </p>
                <br/>
            </div>
            <div className='text-center '>
                <p className={`${styles.heroSubText} text-center bg-green-100 border-none rounded-lg mt-4`}>
                The “Triple Threat” <span className='font-bold'>(</span>HIV/Aids, Gender Based Violence, Teen Pregnancy and Marriage<span className='font-bold'>)</span> has continued to fuel poverty in our communities, with most of our girls and women lacking basic education and the necessary skills required for self-reliance and sufficiency.  Our programs seek to enhance life skills and economic empowerment in order to promote resilience and self-dependency, hence restoring their dignity.
                </p>
            </div>
            <div className='flex w-full mt-4 gap-2'>
                <div>
                    <img
                    src={last2}
                    className='rounded-xl'
                    />
                </div>
                <div>
                    <img 
                    src={last3}
                    className='rounded-xl'
                    />
                </div>
            </div>
            <div className='mt-4 flex w-full'>
                <div className='w-[50%]'>
                <img 
                    src={last1}
                    className='rounded-xl w-[90%]'
                />
                </div>
                <div className='w-[50%] flex items-center justify-center'>
                    <p className={`${styles.heroSubText} text-center border-none rounded-lg mt-4`}>
                      CASDA promotes the menstrual health hygiene, accelerates and blends learning for teen and single mothers and vulnerable women by re-admitting them back to school as well as promoting sustainable alternative sources of livelihood through Smart farming-kitchen gardens, rain harvesting and Agribusiness initiatives.
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center m-4 w-full'>
                <div className=" rounded-xl w-full md:w-[75%] lg:w-[50%] xl:w-[40%] h-[500px] flex items-center justify-center">
                    <iframe src="https://www.youtube.com/embed/0iqTRh2Qw5E" title="TUNZA HADHI LAUNCH" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full rounded-xl h-[75%]"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(Events, 'events')