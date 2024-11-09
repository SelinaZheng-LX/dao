interface LessonComp {
    src: string;
    alt: string;
    title: string;
    completion: boolean;
}

const LessonComp = ({ lessons }: { lessons: LessonComp[] }) => {
    return (
        <>
            {lessons.map((lesson, index) => (
                <div key={index} className="lesson">
                    <img
                        src={lesson.src}
                        alt={lesson.alt}
                        className="lesson-img"
                    />
                    <h1 className="title">{lesson.title}</h1>
                </div>
            ))}
        </>
    );
};

export default LessonComp;
