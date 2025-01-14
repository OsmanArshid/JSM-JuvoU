import {loading} from '../assets'

const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <img className='w-5 h-5 mr-4'
            src={loading}
            alt='Loading'
        /> 
        Prices are Loading
    </div>
  )
}

export default Generating


// <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />