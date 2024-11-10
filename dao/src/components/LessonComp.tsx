import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: "rotate(0deg)",
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: "rotate(180deg)",
            },
        },
    ],
}));

interface LessonComp {
    src: string;
    alt: string;
    date: string;
    title: string;
    completion: boolean;
}

const LessonComp = ({ lessons }: { lessons: LessonComp[] }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Container sx={{ width: "100%", marginTop: "13%" }}>
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
                style={{ width: "80vw" }}
            >
                <div className="lesson plus" onClick={handleOpen}>
                    +
                </div>
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
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
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
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        Method:
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        Heat 1/2 cup of the broth in a pot until
                                        simmering, add saffron and set aside for
                                        10 minutes.
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        Wordsssss
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        More wordsss
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest
                                        for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="flex-center"
            >
                <div className="flex-col-center modal">
                    <h3 className="lesson-text">Generate a lesson about...</h3>
                    <TextField
                        id="standard-textarea"
                        label="Lesson Generator"
                        placeholder="Generate a lesson about...."
                        multiline
                        variant="standard"
                        rows={4}
                        defaultValue="Generate a lesson about...."
                        className="text-field-multiline"
                    />
                    <Button
                        className="button"
                        variant="contained"
                        size="large"
                        style={{
                            width: "35%",
                            fontSize: "var(--h5)",
                            fontFamily: "Alata",
                        }}
                    >
                        Generate Lesson
                    </Button>
                </div>
            </Modal>
        </Container>
    );
};

export default LessonComp;
