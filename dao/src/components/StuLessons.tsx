import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

interface LessonComp {
    src: string;
    alt: string;
    date: string;
    title: string;
    completion: boolean;
}

const LessonComp = ({ lessons }: { lessons: LessonComp[] }) => {
    return (
        <Container sx={{ width: "100%", marginTop: "13%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                style={{ width: "80vw" }}
            >
                {lessons.map((lesson, index) => (
                    <Grid size={6} key={index} style={{ width: "25vw" }}>
                        <Card
                            sx={{ maxWidth: 345 }}
                            style={{ marginBottom: "3rem" }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe"
                                    >
                                        R
                                    </Avatar>
                                }
                                title={lesson.title}
                                subheader={lesson.date}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={lesson.src}
                                alt={lesson.alt}
                            />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    This impressive paella is a perfect party
                                    dish and a fun meal to cook together with
                                    your guests. Add 1 cup of frozen peas along
                                    with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LessonComp;
