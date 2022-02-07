import { convertTime } from "../../utils/convertTime";
export default function MainNews({ data }) {
    const { thumbnail, link, title, source, release_time } = data;
    return (
        <div>
            <div className='group overflow-hidden'>

                <a href={link} target="_blank" rel="noreferrer">
                        <img src={thumbnail} alt="" className='h-40 mb:h-48 md:max-h-mi-5 w-full md:h-i-5 lg:object-cover rounded' />
                </a>
                <div className="mt-2">
                    <span className='text-2xl font-semibold group-hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </span>
                    <div className='flex gap-3 mt-1 items-end'>
                            <img src={'https://photo-baomoi.zadn.vn/d59db7f26ab183efdaa0.png'} alt="" className='max-h-4 object-fill' />
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - Date.parse(release_time))}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}