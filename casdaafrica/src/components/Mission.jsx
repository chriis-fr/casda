import { vision } from '../assets'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'

const Mission = () => {
  return (
    <section>
        <h1 className={`${styles.sectionHeadText} text-center`}>Mission and Vision</h1>
        <div className='  flex '>
            <div className='flex flex-col text-center justify-center items-center w-[45%] m-2 '>
                <div>
                    <h1 className="font-bold text-3xl text-secondary underline italic">Vision</h1>
                    <p className={`${styles.heroSubText} italic`}>To create a robust and effective sustainable and democratic local governance system in Kenya and beyond</p>
                </div>
                <br/>
                <div>
                    <h1 className="font-bold text-3xl text-secondary underline italic">Mission</h1>
                    <p className={`${styles.heroSubText} italic`}>Build the capacity of County Governments and their Municipalities for improved democracy and efficient service delivery in Kenya</p>
                </div>
            </div>
            <div className='w-[70%] flex justify-end'>
                <img 
                src={vision}
                className='border-none rounded-xl w-[70%]'
                />
            </div>
        </div>
    </section>
  )
}

export default SectionWrapper(Mission, "mission")