import {HiSearch} from 'react-icons/hi'
import {FaBell} from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'


const navMenu = ['Home', "TV Shows", 'Movies & Popular', 'My List']

const Header = () => {
    const [isScroll, setIsScoll] = useState(false)
    const {logout} = useAuth()
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScoll(true)
            } else {
                setIsScoll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
  return (

    <header className={`${isScroll && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex" >
            {navMenu.map((item, i)=> (
                <li className="cursor-pointer font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]" key={i} >{item}</li>
            ))}
        </ul>
        </div>

        <div className='flex items-center space-x-4 text-sm font-light'>
            <HiSearch className='hidden sm:inline h-6 w-6 '/>
            <p className='hidden lg:inline'>Kids</p>
            <FaBell className='h-6 w-6'/>
            {/* <Link href={'/account'}> */}
                <img    onClick={()=>logout()} src='https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41' className='cursor-pointer rounded' alt=''  />
            {/* </Link> */}
        </div>
    </header>
  )
}

export default Header