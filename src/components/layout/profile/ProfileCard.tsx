import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  height: 150,
  width: 275,
}));

const AvatarBox = styled(Box)(() => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
}));

interface Props extends CardProps {
  name?: string;
  email?: string;
}

export default function ProfileCard({ name, email, ...rest }: Props) {
  return (
    <StyledCard {...rest}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Personal
        </Typography>
        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item>
            <AvatarBox>
              <Avatar />
            </AvatarBox>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {name ? name : <Skeleton animation={false} />}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {email ? email : <Skeleton animation={false} />}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
}
