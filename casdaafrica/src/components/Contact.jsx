import { useRef, useState } from 'react'
import { SectionWrapper } from '../hoc'
import emailjs from "@emailjs/browser"
import { styles } from '../style'

// public key: qyZgTlXWOeW8-vGNw
//tempelate id: template_red8y4d
//service id: service_8huie4r

const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_8huie4r',
            'template_red8y4d',
            {
                from_name: form.name,
                to_name: "CASDA AFRICA",
                from_email: form.email,
                to_email: 'tunzahadhi.ihc@gmail.com',
                message: form.message,
            },
            'qyZgTlXWOeW8-vGNw'
        )
        .then(() => {
            setLoading(false)
            alert("Thankyou for your response, We will get back to you as soon as possible!")

            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (error) => {
            setLoading(false)
            console.log(error)
            alert("Sorry, something went wrong")
        })
    }

  return (
    <div className=''>
        <h1 className={`${styles.sectionHeadText} text-center`}>Get in touch</h1>
        <div className="xl: mt-12 xl: flex-row flex-wrap flex col-reverse flex gap-10 overflow-hidden">
            <div className="flex-[0.5] bg-green-600 p-8 text-secondary rounded-2xl">
                <p className='text-center font-bold italic underline'>EMAIL US</p>
                <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-green-200 text-white rounded-lg outlined-none border-none font-medium"
                />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-green-200 text-white rounded-lg outlined-none border-none font-medium"
                />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows='7'
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-green-200 text-white rounded-lg outlined-none border-none font-medium"
                />
            </label>
            <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "sending..." : "send"}
            </button>
          </form>
            </div>
            <div className='border-none flex-[0.5] rounded-2xl bg-gray-200'>
                <div className='flex flex-col'>
                    <h1 className='text-center text-3xl font-bold italic underline p-4'>Details</h1>
                    <p className={`${styles.heroSubText} pl-2`}>CooperationArena for Sustainable Development in Africa</p>
                    <p className={`${styles.heroSubText} pl-2`}>P.O. Box 66842 – 00800</p>
                    <p className={`${styles.heroSubText} pl-2`}>Nairobi – Kenya</p>
                    <p className={`${styles.heroSubText} pl-2`}>Office: +254 20 2407012</p>
                    <p className={`${styles.heroSubText} pl-2`}>Mobile: +254 722 314436 / +254 733 314436</p>
                    <p className={`${styles.heroSubText} pl-2`}>Email: <a className='italic underline' href='mailto:info@casdaafrica.org'>info@casdaafrica.org</a></p>
                    <p className={`${styles.heroSubText} pl-2`}>Website: <a className='italic underline' href='https://www.casdaafrica.org'>www.casdaafrica.org</a></p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-center text-3xl font-bold italic underline p-4'>Social media</h1>
                    <p className={`${styles.heroSubText} pl-2`}>Find us on Facebook: CASDA_Africa</p>
                    <p className={`${styles.heroSubText} pl-2`}>Find us on Twitter: @CASDA_Africaa</p>
                    <p className={`${styles.heroSubText} pl-2`}>Find us on Instagram: @CASDA_Africa</p>
                    <p className={`${styles.heroSubText} pl-2`}>Find us on Youtube: CASDA_Africa</p>
                </div>
            </div>
        </div>
        <footer className=' bottom-0 left-0 right-0 bg-transparent '>
            <div className='text-center text-xs mt-4'>
            <a href='https://www.hostgator.com/tos'>Terms & Conditions | Terms of Use | Privacy Policy | About CASDA <br/>
             ©2024 CASDA
            </a>
            </div>
            </footer>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')