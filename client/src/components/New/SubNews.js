import { convertTime } from "../../utils/convertTime";
export default function SubNews({ data }) {
    const { thumbnail, link, title, source, release_time } = data;
    const date = release_time;
    return (
        <div>
            <div className=' group grid grid-cols-6 mb-2 gap-5 overflow-hidden'>
                <a href={link} target="_blank" rel="noreferrer" className="block col-start-1 col-end-3" >
                        <img src={thumbnail} alt="" className=' h-i-3 w-full object-cover rounded' />
                </a>
                <div className="col-start-3 col-end-7">
                    <span className='text-sm sm:text-lg font-medium group-hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer" >{title}</a>
                    </span>
                    <div className='flex gap-3 mt-2 items-end overflow-hidden'>
                        <img src={'https://photo-baomoi.zadn.vn/d59db7f26ab183efdaa0.png'} alt="" className='max-h-4 object-cover' />
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - (new Date(release_time)).getTime()) }</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-2" />
        </div>
    )
}