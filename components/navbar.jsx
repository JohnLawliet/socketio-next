import {BellIcon, MailIcon, CogIcon} from '@heroicons/react/solid'

const Navbar = () => {
    return (
        <div className="h-13 flex bg-green-500 items-center justify-around text-white py-1 px-3">
            <span className="">Logo</span>
            <div className="space-x-3">
                <div className="relative inline-block cursor-pointer">
                    <BellIcon className="h-7 text-white " />
                    <span 
                    className="w-[12px] h-[12px] flex items-center 
                    justify-center absolute ring-2 ring-white 
                    top-0 right-0 text-[10px] bg-red-500 font-medium
                    text-white rounded-full">
                    3</span>
                </div>

                <div className="relative inline-block cursor-pointer">
                    <MailIcon className="h-7 text-white" />
                    <span 
                    className="w-[12px] h-[12px] flex items-center 
                    justify-center absolute ring-2 ring-white 
                    top-0 right-0 text-[10px] bg-red-500 font-medium
                    text-white rounded-full">
                    3</span>
                </div>

                <div className="relative inline-block cursor-pointer">
                    <CogIcon className="h-7 text-white" />
                    <span 
                    className="w-[12px] h-[12px] flex items-center 
                    justify-center absolute ring-2 ring-white 
                    top-0 right-0 text-[10px] bg-red-500 font-medium
                    text-white rounded-full">
                    3</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
