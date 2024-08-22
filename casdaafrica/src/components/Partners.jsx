import { another } from "../assets"
import { partners } from "../constants"
import { SectionWrapper } from "../hoc"
import { styles } from "../style"



const Partners = () => {
  return (
    <section>
        <h1 className={`${styles.sectionHeadText} text-green-800 text-center`}>
            Partners
        </h1>
        <div className=" w-[100%] flex flex-wrap p-2 ">
            {
              partners.map((partner, index) => {
                return(
                  <>
                    <div className="w-1/2 p-2 " key={index}>
                      <div>
                        {partner.title && <p className='text-2xl text-center p-2 font-bold text-green-800'>{partner.title}</p>}
                      </div>
                      <img 
                      src={partner.imageSrc}
                      className="w-full  rounded-lg"
                      />
                      <div className={`${styles.heroSubText} text-center mt-2 bg-gray-100 border-none rounded-lg`}>
                        {partner.description}
                      </div>
                    </div>
                  </>
                )
              })
            }
        </div>

        <div className="w-full mt-4  text-center"> 
          <div className={`${styles.heroSubText} text-center italic border-none rounded-lg`} >
          <span className="text-yellow-600">CASDA</span> also acknowledges collaborations with other county government namely County Government of Machakos, County Government of Busia and County Government of Migori.
          </div>
          
          <div className="w-full  flex flex-wrap p-2">
            <div className=" bg-none w-[50%] flex justify-center items-center flex-col">
              <img 
              className=" justify-center"
              src={another}
              alt="another development foundation"
              />
              <p className="text-secondary font-bold text-lg p-2">~Another development foundation~</p>
            </div>
            <div className=" w-[50%] flex justify-center items-center">
              <p className={`${styles.heroSubText} text-3xl font-semibold`}>
                A Think tank and do Tank for promoting
                People, Places and The planet
                Peace and Freedom from Violence
                Sustainable Climate Justice and 
                Human Rights and Gender Equality.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default SectionWrapper(Partners, 'partners')