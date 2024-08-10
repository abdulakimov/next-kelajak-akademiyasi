import Card3d from "@/components/3dcard"
import SectionTitle from "@/components/sectionTitle"

function Courses() {
    return (
        <div className='flex flex-col w-full h-full p-10 items-center'>
            <SectionTitle title='Kurslar' />
            <div className="flex flex-row max-sm:flex-col py-10 justify-center items-center gap-8 max-sm:gap-2 flex-wrap">
                <Card3d title='English Course' description='Learn English with our expert teachers' image='english.jpg' />
                <Card3d title='English Course' description='Learn English with our expert teachers' image='english.jpg' />
                <Card3d title='English Course' description='Learn English with our expert teachers' image='english.jpg' />
                <Card3d title='English Course' description='Learn English with our expert teachers' image='english.jpg' />
            </div>
        </div>
    )
}

export default Courses