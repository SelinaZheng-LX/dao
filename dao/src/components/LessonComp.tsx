import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import AddBoxIcon from "@mui/icons-material/AddBox";
interface LessonComp {
    src: string;
    alt: string;
    subject: string;
    title: string;
    completion: boolean;
}

const LessonComp = ({ lessons }: { lessons: LessonComp[] }) => {
    return (
        <Container sx={{ width: "100%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                style={{ width: "80vw" }}
            >
                {lessons.map((lesson, index) => (
                    <Grid size={6} key={index} style={{ width: "25vw" }}>
                        <div className="lesson">
                            <div className="wrap">
                                <img
                                    src={lesson.src}
                                    alt={lesson.alt}
                                    className="lesson-img"
                                />
                            </div>
                            <p className="lesson-text">{lesson.subject}</p>
                            <h1 className="lesson-title">{lesson.title}</h1>
                            <hr className="solid"></hr>
                        </div>
                    </Grid>
                ))}
                <div className="lesson">
                    <AddBoxIcon sx={{ fontSize: 250 }} />
                </div>
            </Grid>
        </Container>
    );
};

export default LessonComp;
