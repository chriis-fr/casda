import { useState } from "react"
import { ira, yvonne } from "../assets"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"

const Found = () => {

    const [showProfiles, setShowProfiles] = useState(false)

  return (
    <section>
      <div>
            <h1 className={`${styles.sectionHeadText} text-green-800 text-center`}>Founders' Voices</h1>
      </div>
      <div className="w-full mt-4 rounded-md flex items-center justify-around gap-2 flex-row">
        <div className="w-[50%] flex flex-col items-center">
            <img src={yvonne} 
            className="w-[50%] h-[50%] border rounded-lg"
            />
            <div className="p-4">
                <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}><span className="text-yellow-600">YVONNE ANYANGO</span> has a background in Development Studies and International Relations, She is the Founder and Executive Director of Cooperation Arena for Sustainable Development in Africa (CASDA), an International Non-Governmental Organization based in Kenya</p>
            </div>
        </div>
        <div className="w-[50%] flex flex-col items-center">
            <img src={ira} 
            className="w-[50%] h-[50%] border rounded-lg"
            />
            <div className="p-4">
                <p className={`${styles.heroSubText} text-center italic bg-gray-100 border-none rounded-lg`}><span className="text-yellow-600">IRA SUNDBERG</span> studied conservation and environment before getting her master´s degree in psychology. She is a registered psychologist and psychotherapist. Ira has been an entrepreneur and networker for most of her working life with systems-thinking and interdisciplinary as core.</p>
            </div>
        </div>
      </div>
      { !showProfiles &&
      <div className="text-center">
        <div>
            <button
            onClick={()=>{
                setShowProfiles(true)
            }}
            className="border rounded-lg p-2 text-yellow-300 bg-green-800 hover:bg-green-600"
            >See Full Profiles</button>
        </div>
      </div>
      }
      {showProfiles &&
      <div>
      <div className="p-4 items-center">
        <h1 className={`${styles.sectionHeadText} text-green-600 text-center`}>
            Full profiles
        </h1>
        <div>
            <h2 className="font-bold text-[170%]">Yvonne Anyango</h2>
            <br/>
            <p className={`${styles.sectionSubText}`}>
            <span className="text-yellow-600">YVONNE ANYANGO</span> has a background in Development Studies and International Relations, is the Co-founder and Executive Director of Cooperation Arena for Sustainable Development in Africa (CASDA), an International Non-Governmental Organization based in Kenya that specializes in initiating collaborative partnerships between Swedish organizations and companies or county governments in Kenya and East Africa. Yvonne Anyango has 20 years’ experience in Projects Management and coordination in adderssing multifaceted challenges that contributes meaningfully to sustainable development.has a background in Development Studies and International Relations, is the Co-founder and Executive Director of Cooperation Arena for Sustainable Development in Africa (CASDA), an International Non-Governmental Organization based in Kenya that specializes in initiating collaborative partnerships between Swedish organizations and companies or county governments in Kenya and East Africa. Yvonne Anyango has 20 years’ experience in Projects Management and coordination in adderssing multifaceted challenges that contributes meaningfully to sustainable development.</p>
            <br />
            <p className={`${styles.sectionSubText}`}>
            A strong academic foundation with a degree in Governance and Development Studies, with a major in International Relation. Experience in conducting research and analysis on governance structures, development policies, and socio-economic issues. Proficiency in using research tools, methodologies, and data analysis techniques. Hands-on experience in managing development projects, including planning, coordination, implementation, monitoring, and evaluation. Knowledgeable on project management tools and methodologies and the development and analysis of policies related to governance, social development, and economic growth. Advocacy experience in promoting policies that enhance governance and sustainable development. Work experience in governmental institutions, non-governmental organizations (NGOs) and international development agencies. 
            </p>
            <br />
            <p className={`${styles.sectionSubText}`}>Excellent exposure to the practical aspects of governance and development initiatives. Demonstrated experience in engaging with local communities, understanding their needs, and involving them in development processes. Skills in facilitating participatory approaches and community-based development. Exposure to international contexts, global governance issues, and an understanding of the interconnectedness of global and local development challenges.</p>
            <br />
            <p className={`${styles.sectionSubText}`}>Participation in international conferences, workshops, or collaborations. Experience in designing and delivering capacity-building programs for individuals, communities, or organizations. Training or mentoring initiatives that contribute to strengthening governance structures. Strong written and verbal communication skills, including the ability to articulate complex development issues clearly and effectively.</p>
            <br />
            <p className={`${styles.sectionSubText}`}>Experience in preparing reports, policy briefs, and communication materials. Proven ability to establish and maintain partnerships with government agencies, NGOs, international organizations, and other stakeholders. Experience in collaborative initiatives that promote sustainable development. Exposure to conflict resolution mechanisms and diplomatic skills, especially in areas where governance challenges may lead to tensions. Understanding of the role of governance in preventing and addressing conflicts.</p>
            <br />
            <p className={`${styles.sectionSubText}`}>Demonstrated leadership skills in guiding teams or organizations toward effective governance and development outcomes and ability to make informed and strategic decisions in complex situations.</p>
            <br />
        </div>
        <div>
        <h2 className="font-bold text-[170%]">Ira Sundberg</h2>
            <br/>
            <p className={`${styles.sectionSubText}`}>
            <span className="text-yellow-600">Ira Sundberg</span> studied conservation and environment before getting her master´s degree in psychology. She is a registered psychologist and psychotherapist. Ira has been an entrepreneur and networker for most of her working life with systems-thinking and interdisciplinary as core. She is a generalist. For some years she worked with qualitative research and depth interviewing. She has worked more than 20 years as a sychotherapist and consultant. For a few years she worked as a project leader, building and developing a new service in Sweden in the area of human resources.
            </p>
            <br/>
            <p className={`${styles.sectionSubText}`}>
            Now her focus is on the human aspects of sustainable development. She initiated “Psychologists for the Environment” in the early 1990´s, a network within the NGO “The Natural Step”. Ira focuses are on leadership, processes and communication as well as on raising the awareness and importance of the human aspect when it comes to changing the state of the world into a more desirable place for all. She has worked with the public-, private-and civil sector and has been a member of a number of boards.
            </p>
            <br/>
            <p className={`${styles.sectionSubText}`}>Ira has been working in Kenya with sustainable development since the early 2000s. She initiated a partnership process with a municipality in Kenya and a Swedish municipality, which started in 2007 and has evolved and spread since then. She is co-founder of CASDA (Co-operation Arena for Sustainable Development in Africa) which is a NGO in Kenya. Ira lives in Uppsala, close to her son, Marcus, daughter in law Lisa, their twins Idun and Atle, and their son Axe.</p>
            <br />
            <p className={`${styles.sectionSubText}`}>She also enjoys social life, animals, nature, reading, writing, music, photography and movies. Our children, grandchildren and generations to come are what motivates her in the work for making the world a more sustainable and good place for all.</p>
        </div>
      </div>

      <div className="text-center">
        <div>
            <button
            onClick={() => {
              setShowProfiles(false);
              const partnersSection = document.getElementById('founders');
              if (partnersSection) {
                partnersSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="p-2 bg-red-100 border rounded-lg hover:bg-red-800"
            >Hide Full Profiles</button>
        </div>
      </div>
      </div>
        }
    </section>
  )
}

export default SectionWrapper(Found, 'founders')